import logo from './logo.svg';
import bass from './bass.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link href="./output.css" rel="stylesheet"/>
        <div className='flex flex-row m-16'>
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div>
            <img src={bass} className="App-logo" alt="logo" />
          </div>
        </div>
        <p class="text-3xl font-bold">
          jhilla.org, for computer science and bass
        </p>
        <p class="text-2xl">
          hillia45@msu.edu
        </p>
        <div className=''>
          <a href='https://www.github.com/volxage'>
            <div className="bg-cyan-800 shadow rounded-md py-2 px-4 m-8">
              <p>Github</p>
            </div>
          </a>
          <a href='https://www.instagram.com/jhilla.bass'>
            <div className="bg-cyan-800 shadow rounded-md py-2 px-4 m-8">
              <p><a href='https://www.instagram.com/jhilla.bass'>Instagram</a></p>
            </div>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
