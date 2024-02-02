"use client";
import React, { useState } from "react";

const QuestionCard = ({ que, ans, lists }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    // onCLick();
    setShow(!show);
  };

  return (
    <div className="sm:w-[400px] md:w-[500px] lg:w-[600px] p-4">
      <div
        onClick={handleShow}
        className="cursor-pointer flex gap-5 items-center justify-between"
      >
        <h3 className="font">{que}</h3>
        <div>
          {show ? (
            <svg
              className="cursor-pointer"
              onClick={handleShow}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              onClick={handleShow}
              className="cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
      {show && (
        <p className="text-textGray">
          {ans}
          <ul>
            {lists
              ? lists.map((list, index) => (
                  <li key={index} className="list-disc pl-3 ml-5">
                    {list}
                  </li>
                ))
              : ""}
          </ul>
        </p>
      )}
    </div>
  );
};

export default QuestionCard;
