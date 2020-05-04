import React from "react";
const Square1 = ({ className = "" }) => {
  const classString = `square-1 ${className}`;
  return <div className={classString}></div>;
};

export default Square1;
