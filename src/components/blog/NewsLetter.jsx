import React from "react";
import ButtonPrimary from "../ButtonPrimary";

const NewsLetter = () => {
  return (
    <div className="w-[300px] p-[20px] bg-primary bg-opacity-20 rounded-lg">
      <div className="bg-primary flex justify-center items-center rounded-full h-[50px] w-[50px]">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.6654 2.3335L12.832 15.1668M25.6654 2.3335L17.4987 25.6668L12.832 15.1668M25.6654 2.3335L2.33203 10.5002L12.832 15.1668"
            stroke="white"
            strokeWidth="2.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h2 className="text-2xl font-semibold my-4 text-primary">
        Weekly Newsletter
      </h2>
      <p className="text-sm">
        No spam. Just the latest releases and tips, interesting articles, and
        exclusive interviews in your inbox every week.
      </p>
      <input
        className="mt-4 mb-2 p-2 rounded-2xl"
        type="text"
        placeholder="Enter Email"
      />
      <p className="text-xs">Read about our privacy policy</p>
      <button className="bg-primary text-white w-full mt-4 p-2 rounded-lg">
        Subscribe
      </button>
    </div>
  );
};

export default NewsLetter;
