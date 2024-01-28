import React from "react";
import Image from "next/image";

const HomeBlogCard = ({ heading, post, image }) => {
  return (
    <div className="w-[250px] p-2 h-[280px] bg-white rounded-lg">
      <Image src={image} width={250} height={200} alt="alt" />

      <div className="flex gap-2 my-3 text-xs justify-between items-center">
        <p className="font-semibold text-sm">{heading}</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 17L17 7M17 7H7M17 7V17"
            stroke="#101828"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="text-xs mb-2 ">{post}</p>
    </div>
  );
};

export default HomeBlogCard;
