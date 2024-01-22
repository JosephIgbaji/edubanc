import React from "react";

const TestimonialCard = ({ testmonial, author, role }) => {
  return (
    <div className="max-w-[320px] h-[250px] py-[32px] px-5 bg-white rounded-lg">
      <h2 className="text-6xl text-primary">“</h2>
      <p className="text-sm mb-2 ">{testmonial}</p>
      <div className="flex gap-2 text-xs flex-col md:flex-row md:justify-between md:items-center">
        <p>{author}</p>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
