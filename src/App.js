import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
     <h1>esto es magina</h1> 
     

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <p>
          SERGIO OLIVA
        </p> 
        <form>
  <label>
    busqueda:
    <input type="text" name="sergio" />
  </label>
  <input type="submit" value="Submit" />
</form>

        <a
          className="App-link"
          href="https://reactjs.or"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
