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
    }
    
    this.setState({printerArray: printerArray});
  }

  render() {
    return (
      <div className="Kata">
        {this.state.printerArray.map((row) => {
          return row.map((col) => {
            return <span>{col}</span>
          });
        })
        }
      </div>
    );
  }
}

export default Kata;
