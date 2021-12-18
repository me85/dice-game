import React from "react";

class CurrentResult extends React.Component {
  render() {
    const currentResult = this.props.currentScore;

    return (
      <div className="DivCurrentResult">
        <h2>Current Result </h2>
        <div>{currentResult}</div>
      </div>
    );
  }
}

export default CurrentResult;
