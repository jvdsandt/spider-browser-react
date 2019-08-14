import React from "react";

const ClassInstSwitch = ({ onSwitch, instanceSide }) => {
  if (instanceSide) {
    return (
      <div>
        <strong>Inst. Side</strong>{" "}
        <button onClick={() => onSwitch()}>Class Side</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => onSwitch()}>Inst. Side</button>{" "}
        <strong>Class Side</strong>
      </div>
    );
  }
};

export default ClassInstSwitch;
