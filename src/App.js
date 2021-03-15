/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import logo from './assets/logo.svg';
import example from './assets/example.png';
import Kata from './Kata';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <p className="App-intro">
          El ejercicio consiste en recorrer un array en espiral de izquierda a derecha.
          Para poder realizar el ejercicio es necesario:
        </p>

        <ul>
          <li>1.- Crear e imprimir el array original de dos dimensiones nxn</li>
          <li>2.- Imprimir el output requerido</li>
        </ul>

        <p>Ejemplo:</p>
        <img src={example}/>

        <Kata></Kata>
      </div>
    );
  }
}

export default App;
