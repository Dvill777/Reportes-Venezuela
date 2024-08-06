import React from "react";
import yendri from "../../assets/images/veneco.jpg";
const CardImage = ({ className = "", src = yendri, ...props }) => {
  return (
    <img
      {...props}
      src={src}
      className={`${className} w-full h-80 object-cover`}
    />
  );
};

export default CardImage;
