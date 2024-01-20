import React from "react";

const ButtonPrimary = ({ name }) => {
  return (
    <button className="bg-primary p-3 rounded-lg text-white text-center">
      {name}
    </button>
  );
};

export default ButtonPrimary;
