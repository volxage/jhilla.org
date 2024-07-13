import { useEffect, useRef, useState } from "react";
import React from 'react';

type Props = {
  children: React.ReactNode;
  reappear?: boolean;
  threshold?: number;
  reverse?: boolean;
};

type Options = {
  threshold: number,
  reappear?: boolean,
};
// https://johnckealy.medium.com/how-to-create-slide-in-on-scroll-animations-in-a-react-app-127eae92ee16
// A hook that takes options and passes a reference to the object and a flag indicating if the element is in the viewport.
const useElementOnScreen = (options: Options): [React.RefObject<HTMLDivElement>, boolean] => {
  const containerRef = useRef<HTMLDivElement>(null); //Referencing value not needed for rendering
  const [isVisible, setIsVisible] = useState<boolean>(false); //Simple state

  //(entries:any) => {} is an anonymous function
  // func(entries:any){...}
  const makeAppear = (entries: any) => {
    const [entry] = entries;
    if (entry.isIntersecting) //This assumes entry has isIntersecting as a function
      setIsVisible(true); //Utilizing the state
      console.log("Appearing")
  };

  const makeAppearRepeating = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting); //Same as above, but setIsVisible is called every time
    console.log("Re-appearing")
  };

  // callback function changes depending on options.reappear
  const callBack = options.reappear ? makeAppearRepeating : makeAppear;

  //Used to "synchronize a component (containerRef) with an external system (the observation of the component)
  useEffect(() => { 
    const containerRefCurrent = containerRef.current
    //IntersectionObserver "asynchronously observes changes in intersection of target with ancestor or top-level document's viewport" 
    //https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    const observer = new IntersectionObserver(callBack, options);
    if (containerRefCurrent)
      observer.observe(containerRefCurrent);
    return () => { //Cleanup function ran before running setup function with new values
      if (containerRefCurrent) {
        observer.unobserve(containerRefCurrent);
      }
    };
  }, [containerRef, options, callBack]); //Effect depends on container, and visibility

  return [containerRef, isVisible];
};


const BlurSlideOnScroll = ({ children, reappear, threshold = 0.5 }: Props) => {
  const [containerRef, isVisible] = useElementOnScreen({
    threshold: threshold,
    reappear: reappear,
  });
  console.log("Is visible:" + isVisible)
  return (
    <>
      <div ref={containerRef} className={`transition duration-1000 ${isVisible ? "opacity-100 blur-none transform-none" : "opacity-0 blur-lg -translate-x-40"}`}>
        {children}
      </div>
    </>
  );
}
const BlurOnScroll = ({ children, reappear, threshold = 0.5 }: Props) => {
  const [containerRef, isVisible] = useElementOnScreen({
    threshold: threshold,
    reappear: reappear,
  });
  console.log("Is visible:" + isVisible)
  return (
    <>
      <div ref={containerRef} className={`transition duration-1000 ${isVisible ? "opacity-100 blur-none " : "opacity-0 blur-lg"}`}>
        {children}
      </div>
    </>
  );
}

const SlideOnScroll = ({ children, reappear, threshold = 0.5, reverse=false }: Props) => {
  const [containerRef, isVisible] = useElementOnScreen({
    threshold: threshold,
    reappear: reappear,
  });
  if(reverse === false){
    return (
      <>
        <div ref={containerRef} className={`transition duration-1000 ${isVisible ? "opacity-100 transform-none" : "-translate-x-60"}`}>
          {children}
        </div>
      </>
    );
  }else{
    console.log("Reversing animation")
    return (
      <>
        <div ref={containerRef} className={`transition duration-1000 ${isVisible ? "opacity-100 transform-none" : "translate-x-60"}`}>
          {children}
        </div>
      </>
    );
  }
}

export {BlurSlideOnScroll, SlideOnScroll, BlurOnScroll};
