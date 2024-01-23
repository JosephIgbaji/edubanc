import React from "react";
import Link from "next/link";

const ProductCard = ({ soon, color, icon, title, details, linkTo }) => {
  return (
    <div className="relative flex flex-col items-center gap-7 py-7 text-center bg-white rounded-lg w-[300px] h-[260px]">
      <div
        style={{ backgroundColor: color }}
        className="absolute -top-4 flex items-center justify-center w-10 h-10 rounded-full"
      >
        {icon}
      </div>
      <h2 className="mt-10 text-xl font-bold">{title}</h2>
      <p className="text-textGray text-sm">{details}</p>
      {!soon ? (
        <Link href={linkTo}>
          <div className="flex">
            <p style={{ color: color }}>Explore Now</p>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 14.6868L14.8333 6.35352M14.8333 6.35352H6.5M14.8333 6.35352V14.6868"
                stroke="#297373"
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

export default ProductCard;
