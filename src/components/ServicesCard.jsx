"use client";
import React, { useState } from "react";
import Link from "next/link";

const ServicesCard = ({ soon, icon, heading, details, color }) => {
  const [hoverColor, setHoverColor] = useState("white");

  return (
    <div
      onMouseOver={() => setHoverColor(color)}
      onMouseOut={() => setHoverColor("white")}
      style={{ backgroundColor: hoverColor }}
      className="w-[320px] h-[160px] rounded-lg transition-all p-3"
    >
      <div>{icon}</div>
      <h2
        style={hoverColor === color ? { color: "white" } : {}}
        className="text-sm font-bold"
      >
        {heading}
      </h2>
      <p
        style={hoverColor === color ? { color: "white" } : {}}
        className="my-2 text-xs text-opacity-50"
      >
        {details}
      </p>
      {!soon ? (
        <Link href="/">
          <div className="flex items-center">
            <p
              style={hoverColor === color ? { color: "white" } : {}}
              className="text-sm  bg-black bg-opacity-10 p-2 rounded-lg "
            >
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
                stroke={hoverColor === color ? "white" : "#adadad"}
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
      ) : (
        <p className="text-xs w-[110px] text-black font-semibold rounded-lg p-3 bg-[#f5f5f5]">
          Coming Soon
        </p>
      )}
    </div>
  );
};

export default ServicesCard;
