import React from "react";
import Dice from "./Dice";
import "./roolDice.css";

class RollDice extends React.Component {
  constructor(props) {
    super(props);
    this.handleRollTheDice = this.handleRollTheDice.bind(this);
  }

  // sumDice(dice1, dice2) {
  //   let playerOneCurrentScore = [];
  //   let playerOneTotalScore = 0;
  //   for (let i = 0; i < 2; i++) {
  //     playerOneCurrentScore[i] = dice1 + dice2;
  //     playerOneTotalScore += playerOneCurrentScore[i];
  //   }
  // }
  handleRollTheDice() {
    // console.log("this is:", this);

    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const rollDice = () => getRandomNumber(1, 6);
    const dice1 = rollDice();
    const dice2 = rollDice();

    this.props.onDiceChange1(dice1);
    this.props.onDiceChange2(dice2);
  }

  render() {
    const diceNumOne = this.props.diceNumOne;
    const diceNumtow = this.props.diceNumtow;

    return (
      <div>
        <button onClick={() => this.handleRollTheDice()}>Roll The Dice</button>
        <div className="result">
          <div className="dice1">{this.props.diceNumOne}</div>
          <div className="dice2">{this.props.diceNumTow}</div>
        </div>
      </div>
    );
  }
}

export default RollDice;

// <img src={require(`dice-${dice1}.png`)/>;

/* <img alt="dice" src={`dice-${dice2}.png`} /> */
