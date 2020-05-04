import React from "react";
const Square = ({ className = "", eventClick = "", squareId = 0 }) => {
  const classString = `square button-style ${className}`;

  return (
    <button
      value={squareId}
      className={classString}
      onClick={eventClick}
    ></button>
  );
};

export default Square;
