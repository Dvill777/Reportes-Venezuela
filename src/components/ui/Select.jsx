import React from "react";

const Select = ({ children, className = "", ...props }) => {
  return (
    <select
      {...props}
      className={`${className} w-full h-7 px-2 border-2 border-solid border-sky-300 rounded focus-visible:outline-none text-black`}
    >
      {children}
    </select>
  );
};

export default Select;
