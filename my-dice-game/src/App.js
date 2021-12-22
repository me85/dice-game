import React from "react";
import Player from "./components/Player";
import RollDice from "./components/RollDice";
import Hold from "./components/Hold";
import NewGame from "./components/NewGame";
import PointsToWin from "./components/PointsToWin";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onDiceChange = this.onDiceChange.bind(this);
    this.onDice2Change = this.onDice2Change.bind(this);
    // this.upDateCurrentScore = this.upDateCurrentScore.bind(this);

    this.state = {
      playerOneCurrentScore: 0,
      playerOneTotalScore: 0,
      playerTowCurrentScore: 0,
      playerTowTotalScore: 0,
      limitPointsTowin: 0,
      winner: false,
      playersTurn: 1,
    };
  }

  onDiceChange(diceNumOne) {
    this.setState({ dice1: diceNumOne });
  }

  onDice2Change(diceNumTow) {
    this.setState({ dice2: diceNumTow });
  }

  updateCurrentScore = (newCurrentScore) => {
    console.log(newCurrentScore);
    console.log("inside update current score");
    if (this.state.playersTurn === 1) {
      console.log("player 1");
      this.setState((state) => ({
        playerOneCurrentScore: state.playerOneCurrentScore + newCurrentScore,
      }));
    }
    if (this.state.playersTurn === 2) {
      this.setState((state) => ({
        playerTowCurrentScore: state.playerTowCurrentScore + newCurrentScore,
      }));
    }
  };

  render() {
    const diceNumOne = this.state.dice1;
    const diceNumTow = this.state.dice2;

    return (
      <div className="playGround">
        <Player
          playerNum="1"
          currentScore={this.state.playerOneCurrentScore}
          totalScore={this.state.playerOneTotalScore}
          onChange={this.upDateCurrentScore}
        />
        <Player
          playerNum="2"
          currentScore={this.state.playerTowCurrentScore}
          totalScore={this.state.playerTowTotalScore}
        />
        <div className="divGameOptions">
          <h2>Gaming Options </h2>
          <NewGame />
          <RollDice
            updateCurrentScore={(newCurrentScore) => this.updateCurrentScore(newCurrentScore)}
            onDiceChange1={this.onDiceChange}
            onDiceChange2={this.onDice2Change}
            diceNumOne={this.state.dice1}
            diceNumTow={this.state.dice2}
            // onClick={() => {
            //   const { playerOneCurrentScore } = this.state;
            //   upDateCurrentScore({ playerOneCurrentScore });
            // }}
          />
          <Hold />
          <PointsToWin />
        </div>
      </div>
    );
  }
}

export default App;
