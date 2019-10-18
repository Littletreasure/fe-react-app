import React from 'react';
import './App.css';
import Grid from './grid.jsx';

class App extends React.Component {
  state = {
    gridArray: [null, null, null, null, null, null, null, null, null],
    whoseTurn: Math.random() > 0.5 ? true : false, // true is "O", false is "X"
  };

  buttonClick = (event) => {
    const buttonIndex = +event.target.id;
    this.setState((currentState) => {
      return {
        gridArray: currentState.gridArray.map((value, index) => {
          return index === buttonIndex
            ? currentState.whoseTurn
            : value;
        }),
        whoseTurn: !currentState.whoseTurn,
      };
    });
    console.log(this.checkIfWon());
  };

  checkIfWon = (event) => {
    const checker = (bool1, bool2, bool3) => {
      return (
        (bool1 && bool2 && bool3) ||
        (bool1 === false && bool2 === false && bool3 === false)
      );
    };
    const gr = this.state.gridArray;
    if (checker(gr[0], gr[1], gr[2])) return gr[0];
    if (checker(gr[3], gr[4], gr[5])) return gr[3];
    if (checker(gr[6], gr[7], gr[8])) return gr[6];
    if (checker(gr[0], gr[3], gr[6])) return gr[0];
    if (checker(gr[1], gr[4], gr[7])) return gr[7];
    if (checker(gr[2], gr[5], gr[8])) return gr[2];
    if (checker(gr[2], gr[4], gr[6])) return gr[2];
    if (checker(gr[0], gr[4], gr[8])) return gr[0];
  };

  render() {
    return (
      <div className='App'>
        <p>Noughts & Crosses</p>
        <Grid
          buttonClick={this.buttonClick}
          gridArray={this.state.gridArray}
        />
      </div>
    );
  }
}

export default App;
