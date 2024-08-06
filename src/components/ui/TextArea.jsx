import React from "react";

const TextArea = ({ classname='', ...props }) => {
  return (
    <textarea
      {...props}
      className={`${classname} w-full h-full px-2 border-2 border-solid border-sky-300 rounded focus-visible:outline-none text-black
`}
    ></textarea>
  );
};

export default TextArea;
