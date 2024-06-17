import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link href="./output.css" rel="stylesheet"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p class="text-3xl font-bold">
          jhilla.org, for computer science and bass
        </p>
        <div className="bg-white shadow p-4">
        <p><a href='https://www.github.com/volxage'>Github</a></p>
        <p><a href='https://www.instagram.com/jhilla.bass'>Instagram</a></p>
        </div>
      </header>
    </div>
  );
}

export default App;
