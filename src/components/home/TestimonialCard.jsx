import React from "react";

const TestimonialCard = ({ testmonial, author, role, color }) => {
  return (
    <div className="w-[320px] h-[250px] py-[32px] px-5 bg-white rounded-lg">
      <h2 style={{ color }} className="text-4xl md:text-6xl text-primary">
        “
      </h2>
      <p className="text-sm mb-2 h-[130px] overflow-clip">{testmonial}</p>
      <div className="flex gap-2 text-xs flex-col md:flex-row md:justify-between md:items-center">
        <p className="font-semibold">{author}</p>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
