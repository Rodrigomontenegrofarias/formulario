import logo from './logo.svg';
import './App.css';
import {ComponenteOldSchool, HolaMundo} from './ComponentOldSchool';

function App() {
  return (
    
    <div className="App">
      {/* Esto es JSX */}    
      <header className="App-header">
        <HolaMundo />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ComponenteOldSchool />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bienvenido al super curso de react.
        </a>
      </header>
    </div>
  );
}

export default App;
