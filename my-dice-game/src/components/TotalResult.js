import React from "react";

const TotalResult = (props) => {
  return (
    <div className="DivTotalResult">
      <h2>Total Result </h2>
      <div>{props.totalScore}</div>
    </div>
  );
};

export default TotalResult;
