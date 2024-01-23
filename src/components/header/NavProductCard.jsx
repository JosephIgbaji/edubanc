import React from "react";

const NavProductCard = ({ icon, heading, details, soon }) => {
  return (
    <div className="max-w-[320px] cursor-pointer hover:bg-primary hover:text-white rounded-lg p-2 flex  gap-3 border-b-[1px] pb-2 justify-between items-center">
      <div className="w-[300px]">
        <div>{icon}</div>
        <h2 className="font-semibold py-2 text-sm">{heading}</h2>
        <p className="text-xs">{details}</p>
      </div>
      <div>
        {!soon ? (
          <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.5303 5.53033C13.8232 5.23744 13.8232 4.76256 13.5303 4.46967L9.53033 0.46967C9.23744 0.176777 8.76256 0.176777 8.46967 0.46967C8.17678 0.762563 8.17678 1.23744 8.46967 1.53033L11.1893 4.25H1C0.585787 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585787 5.75 1 5.75H11.1893L8.46967 8.46967C8.17678 8.76256 8.17678 9.23744 8.46967 9.53033C8.76256 9.82322 9.23744 9.82322 9.53033 9.53033L13.5303 5.53033Z"
              fill="#28303F"
            />
          </svg>
        ) : (
          <p className="text-xs w-[110px] text-black font-semibold rounded-lg p-3 bg-[#f5f5f5]">
            Coming Soon
          </p>
        )}
      </div>
    </div>
  );
};

export default NavProductCard;
