import './App.css';
import jhillaFloating from './floatingjhilla.png';
import museum from './museum.png';
import overlay from './JHILLA-Layers_0000_AdobeStock_467160063-(1).png'
import {BlurOnScroll, SlideOnScroll} from './animateOnScroll.tsx';

function App() {
  return (
    <header className="App">
      <link href="output.css" rel="stylesheet"/>
      <div className='grid place-items-center'>
        <div className="relative h-[82.7vw] w-[100vw] flex">
          <img className="absolute inset-0 object-contain" src={museum} alt='Museum'/>
          <div className="absolute inset-0 right-[8vw]">
            <SlideOnScroll threshold={0}>
            <p className="text-[20vw] drop-shadow-2xl font-black font-sans text-brown-50 italic">
              JHILLA
            </p>
            </SlideOnScroll>
            <SlideOnScroll reverse={true} threshold={0}>
            <p className="text-[26vw] font-extrabold m-[-13vw] text-brown-50 italic">
              BASS.
            </p>
            </SlideOnScroll>
          </div>
          <img className="absolute inset-0" src={jhillaFloating} alt='J hilla'/>
          <img className='absolute inset-0 opacity-5 object-fill h-[83.7vw] w-full' src={overlay} alt='overlay'/>
        </div>
      </div>

      <div className="bg-orange-100 p-10">
        <BlurOnScroll reappear={true}>
        <p className="text-4xl font-light m-5">
          jhilla@jhilla.org
        </p>
        </BlurOnScroll>
        <BlurOnScroll reappear={true}>
            <div className="grid place-items-center">
              <p className="text-xl w-4/5">
                Jonathan Hilliard is a bassist/computer scientist from the Philadelphia area. He is studying Jazz and Computer Science with the Michigan State University faculty. He is currently developing an app named TuneTracker, whose progress can be monitored below.
              </p>
            </div>
        </BlurOnScroll>
        <BlurOnScroll reappear={true} threshold={0.5}>
        <a href="https://github.com/volxage/tunetracker" target="_blank" rel="noopener noreferrer">
          <button className="bg-brown-50 text-4xl font-light p-3 m-8 rounded">TuneTracker</button>
        </a>
        </BlurOnScroll>
      </div>
    </header>
  );
}

export default App;
