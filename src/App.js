import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

import Formulario from './componentes/formularios'

function App() {
  return (
    <div className="App">
     <h1>esto es magia</h1> 
     

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <p>
          sergio
        </p> 
   <a
          className="App-link"
          href="https://reactjs.or"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
        <Formulario />
      </header>
    </div>
  );
}

export default App;
