import './App.css';
import jhillaFloating from './floatingjhilla.png';
import museum from './museum.png';
import {BlurOnScroll, SlideOnScroll} from './animateOnScroll.tsx';

function App() {
  return (
    <header className="App">
      <link href="output.css" rel="stylesheet"/>
      <p className="opacity-30" />
      <div className='grid place-items-center'>
        <div className="relative h-[67vw] w-[80vw] flex">
          <img className="absolute inset-0 object-contain" src={museum} alt='Museum'/>
          <div className="absolute inset-0 right-[8vw]">
            <SlideOnScroll threshold={0}>
            <p className="text-[17vw] drop-shadow-2xl font-extrabold font-sans text-brown-50 italic">
              JHILLA
            </p>
            </SlideOnScroll>
            <SlideOnScroll reverse={true} threshold={0}>
            <p className="text-[22vw] font-extrabold m-[-13vw] text-brown-50 italic">
              BASS.
            </p>
            </SlideOnScroll>
          </div>
          <img className="absolute inset-0 object-contain" src={jhillaFloating} alt='J hilla'/>
        </div>


      <p className="text-4xl font-light m-5">
        jhilla@jhilla.org
    </p>
    <BlurOnScroll reappear={true}>
        <div className="grid place-items-center">
          <p className="text-xl w-3/5">
            Jonathan Hilliard is a bassist/computer scientist from the Philadelphia area. He is studying Jazz and Computer Science with the MSU faculty. He is currently developing an app named TuneTracker, whose progress can be monitored below.
        </p>
        </div>
    </BlurOnScroll>
    <BlurOnScroll reappear={true} threshold={0.5}>
    <a href="https://github.com/volxage/tunetracker" target="_blank" rel="noopener noreferrer">
      <button className="bg-brown-50 text-4xl font-light p-3 m-5 rounded">TuneTracker</button>
    </a>
    </BlurOnScroll>
      </div>
    </header>
  );
}

export default App;
