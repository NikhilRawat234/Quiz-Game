import React from "react";

const ProgressBar = ({ progress }) => {
  const progressPercentage = (progress * 100).toFixed(2);

  return (
    <div>
      <div>{progressPercentage}% Completed</div>
      <div style={{ width: "100%", height: "20px", background: "#f0f0f0" }}>
        <div
          style={{
            width: `${progressPercentage}%`,
            height: "100%",
            background: "#007bff",
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
