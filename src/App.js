import logo from './logo.svg';
import bass from './bass.svg';
import './App.css';
import jhillaFloating from './floatingjhilla.png';
import museum from './museum.png';

function App() {
  return (
    <body class="App bg-gradient-to-b from-brown-50">
      <link href="./output.css" rel="stylesheet"/>
      <div class='grid place-items-center'>
        <div class="relative h-[67vw] w-[80vw] flex">
          <img class="absolute inset-0 object-contain" src={museum} />
          <div class="absolute inset-0 right-[8vw]">
            <p class="text-[17vw] drop-shadow-2xl font-extrabold font-sans text-brown-50 italic">
              JHILLA
            </p>
            <p class="text-[22vw] font-extrabold m-[-13vw] text-brown-50 italic">
              BASS.
            </p>
          </div>
          <img class="absolute inset-0 object-contain" src={jhillaFloating} />
        </div>
      <p class="text-4xl font-light m-5">
        jhilla@jhilla.org
      </p>
    <div class="text-xl w-3/5">
      Jonathan Hilliard is a bassist/computer scientist from the Philadelphia area. He is studying Jazz and Computer Science with the MSU faculty. He is currently developing an App named TuneTracker, whose progress can be monitored
      <span class="inline">
        <a class="inline text-brown-50" href='https://www.github.com/volxage/tunetracker'> here.</a>
      </span>
    </div>
      </div>
    </body>
  );
}

export default App;
