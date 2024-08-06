import React from "react";

const Label = ({ children, direction = "col", className='', ...props }) => {
  return (
    <label
      {...props}
      className={`${className} flex flex-${direction} justify-center items-${
        direction === "row" ? "center" : "start"
      } gap-3`}
    >
      {children}
    </label>
  );
};

export default Label;
