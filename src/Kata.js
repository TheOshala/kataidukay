/* eslint-disable no-loop-func */

import React, { Component } from 'react';
import './Kata.css';

class Kata extends Component {

  constructor(props) {
    super(props);
    
    this.state = {};
  }


  componentWillMount() {
    this.generateArray(4, 5);
  }


  generateArray(rowNumber, columnsNumber) {
    let count = 1;
    let printerArray = [];

    for (let row = 0; row < rowNumber; row++) {

      const initRow = Array.from({length: columnsNumber}, () => count++);
      printerArray.push(initRow);
      console.log(initRow);
    }
    
    console.log(printerArray);
    this.setState({printerArray: printerArray});
  
  }

  render() {
    return (
      <div className="Kata">
        <p> Resultado </p>
        {this.state.printerArray.map((row, index) => {
          return(
            <p key={index}>{row.map((col,i) => {return <span key={i}> {col} </span>})}</p>
          )
        })
        }
      </div>
    );
  }
}

export default Kata;
