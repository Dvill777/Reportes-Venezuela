import React from "react";

const Input = ({ className='', ...props }) => {
  return (
    <input
      {...props}
      className={`${className} w-full h-8 px-2 border-2 border-solid border-sky-300 rounded focus-visible:outline-none text-black`}
    />
  );
};

export default Input;
