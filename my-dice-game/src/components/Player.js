import React from "react";
import CurrentResult from "./CurrentResult";
import TotalResult from "./TotalResult";

const Player = (props) => {
  return (
    <div className="player">
      <h1>PLAYER {props.playerNum}</h1>
      <div className="DivCurrentResult">
        <h2>Current Result </h2>
        <div>{props.currentScore}</div>
      </div>
      <div className="DivTotalResult">
        <h2>Total Result </h2>
        <div>{props.totalScore}</div>
      </div>
    </div>
  );
};

export default Player;

// totalScore={this.state.totalScore}
