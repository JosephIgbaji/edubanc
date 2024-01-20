import React from "react";
import Link from "next/link";

const ServicesCard = ({ icon, heading, details }) => {
  return (
    <div className="w-[320px] h-[160px] rounded-lg transition-all hover:bg-primary hover:text-white p-3">
      <div>{icon}</div>
      <h2 className="text-sm font-bold">{heading}</h2>
      <p className="my-2 text-xs hover:text-white text-textGray">{details}</p>
      <Link href="/">
        <div className="flex items-center">
          <p className="text-sm  bg-black bg-opacity-10 p-2 rounded-lg ">
            Explore Now
          </p>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 14.6868L14.8333 6.35352M14.8333 6.35352H6.5M14.8333 6.35352V14.6868"
              stroke="#adadad"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default ServicesCard;
