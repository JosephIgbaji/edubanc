import React from "react";
import Image from "next/image";

const BlogCard = ({ heading, post, image, author, date, avatar, showFooter }) => {
  return (
    <div className="w-[300px] p-2 bg-white rounded-lg">
      <Image src={image} width={300} height={200} alt="alt" />
      <div className="flex gap-2 my-3 text-xs justify-between items-center">
        <h2 className="font-semibold text-lg">{heading}</h2>
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
      <p className="text-xs text-black text-opacity-50 mb-2 overflow-hidden h-16 ">
        {post}
      </p>
      {showFooter && <div className="flex gap-3 items-center">
        <Image
          className="rounded-full"
          src={avatar}
          width={40}
          height={40}
          alt="alt"
        />
        <div>
          <p className="text-sm font-semibold">{author}</p>
          <p className="text-sm text-black text-opacity-50">{date}</p>
        </div>
      </div>}
    </div>
  );
};

export default BlogCard;
