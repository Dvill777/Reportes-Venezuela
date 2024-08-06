import React from "react";

const Button = ({ children, className='', ...props }) => {
  return (
    <button
      className={`${className} bg-sky-300 hover:bg-sky-400 text-sky-950 font-bold py-2 px-4 rounded text-2xl`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
