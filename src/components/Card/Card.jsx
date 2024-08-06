import React from "react";

const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      {...props}
      className={`${className} flex flex-col gap-4 w-full h-full p-2 border-solid border border-gray-400`}
    >
      {children}
    </div>
  );
};

export default Card;
