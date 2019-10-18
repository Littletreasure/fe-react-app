import React from "react";
import "./App.css";
import Grid from "./grid.jsx";

class App extends React.Component {
  state = {
    gridArray: [null, null, null, null, null, null, null, null, null],
    whoseTurn: false, // true is "O", false is "X"
    footer: "Game in play"
  };

  buttonClick = event => {
    const buttonIndex = +event.target.id;
    this.setState(currentState => {
      return {
        gridArray: currentState.gridArray.map((value, index) => {
          return index === buttonIndex ? currentState.whoseTurn : value;
        }),
        whoseTurn: !currentState.whoseTurn
      };
    }, this.buttonClickChecker);
  };

  buttonClickChecker = () => {
    let winner;
    if (this.checkIfWon() !== undefined) {
      if (this.checkIfWon() === true) {
        winner = "Player 2";
      } else {
        winner = "Player 1";
      }
      // const winner = this.checkIfWon() === true
      this.setState({ footer: `Game won by ${winner}` });
    }
  };

  checkIfWon = event => {
    console.log(this.state);
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
      <div className="App">
        <h1>Noughts & Crosses</h1>
        <p>Player 1 = X / Player 2 = O</p>

        <Grid buttonClick={this.buttonClick} gridArray={this.state.gridArray} />
        <footer>{this.state.footer}</footer>
      </div>
    );
  }
}

export default App;
