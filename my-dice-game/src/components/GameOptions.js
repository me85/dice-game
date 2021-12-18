import React from "react";
import RollDice from "./RollDice";
import Hold from "./Hold";
import NewGame from "./NewGame";
import PointsToWin from "./PointsToWin";

class GameOptions extends React.Component {
  render() {
    return (
      <div className="divGameOptions">
        <h2>Gaming Options </h2>
        <NewGame />
        <RollDice />
        <Hold />
        <PointsToWin />
      </div>
    );
  }
}

export default GameOptions;
