import React from "react";
const Section = ({ className = "", children }) => {
  const classString = `section ${className}`;
  return <div className={classString}>{children}</div>;
};

export default Section;
