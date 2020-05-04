import React from "react";
const Container = ({ className = "", children }) => {
  const classString = `container ${className}`;
  return <div className={classString}>{children}</div>;
};

export default Container;
