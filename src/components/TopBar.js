import React from "react";

const TopBar = ({ questionNumber, stars }) => {
  return (
    <div>
      <div>Question {questionNumber}</div>
      <div>{stars}</div>
    </div>
  );
};

export default TopBar;
