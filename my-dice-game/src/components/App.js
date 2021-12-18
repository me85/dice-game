import React from "react";
import "./App.css";
import Player from "./Player";
import RollDice from "./RollDice";
import Hold from "./Hold";
import NewGame from "./NewGame";
import PointsToWin from "./PointsToWin";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onDiceChange = this.onDiceChange.bind(this);
    this.onDice2Change = this.onDice2Change.bind(this);
    // this.upDateCurrentScore = this.upDateCurrentScore.bind(this);

    this.state = {
      dice1: null,
      dice2: null,
      playerOneCurrentScore: 0,
      playerOneTotalScore: 0,
      playerTowCurrentScore: 0,
      playerTowTotalScore: 0,
      limitPointsTowin: 0,
      winner: false,
      playersTurn: null,
    };
  }

  onDiceChange(diceNumOne) {
    this.setState({ dice1: diceNumOne });
  }

  onDice2Change(diceNumTow) {
    this.setState({ dice2: diceNumTow });
  }

  // upDateCurrentScore() {
  //   // let CurrentReault = this.state.dice1 + this.state.dice2;
  //   console.log("hi");
  //   this.setState({ playerOneCurrentScore: 777 });
  //   // this.state.dice1 + this.state.dice2
  // }

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
