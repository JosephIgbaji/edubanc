import React from "react";

const ButtonPrimary = ({ name, color }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="bg-primary p-3 rounded-lg text-white text-center"
    >
      {name}
    </button>
  );
};

export default ButtonPrimary;
