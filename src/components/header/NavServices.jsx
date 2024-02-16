import React, { useState } from "react";
import NavProductCard from "./NavProductCard";

const NavServices = () => {
  const style1 =
    "absolute hidden left-0 top-12 z-10 bg-white p-3 group-hover:flex flex-col gap-5";
  const style2 = "absolute hidden left-0 top-12 z-10 bg-white p-3";

  const [style, setStyle] = useState(style1);

  const reverseStyle = () => {
    setStyle(style1);
  };

  const handleSetClass = () => {
    setStyle(style2);
    const timeout = setTimeout(() => {
      reverseStyle();
    }, 1 * 1 * 1000); // 1 second in milliseconds

    return () => clearTimeout(timeout);
  };

  return (
    <div className={style}>
      <div onClick={handleSetClass}>
        <NavProductCard
          icon={
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M2 4H0V13L4.31083 15.1554C5.42168 15.7108 6.64658 16 7.88854 16H16C17.1046 16 18 15.1046 18 14C18 12.8954 17.1046 12 16 12H14.4164C13.4849 12 12.5663 11.7831 11.7331 11.3666L8.792 9.896C8.9843 9.7189 9.14317 9.49927 9.25282 9.24342C9.66638 8.27844 9.22409 7.16054 8.26225 6.73973L2 4Z"
                fill="#009CBD"
              />
              <circle cx="16" cy="4" r="4" fill="#009CBD" />
            </svg>
          }
          heading="Tuition Collection and Remittance Services"
          details="Effortlessly manage tuition collection and remittance with our comprehensive services."
        />
      </div>
      <div onClick={handleSetClass}>
        <NavProductCard
          icon={
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M10.765 1.70229L10 2.52422L9.23495 1.70229C7.12233 -0.567428 3.69709 -0.56743 1.58447 1.70229C-0.528155 3.972 -0.528156 7.65194 1.58447 9.92165L8.4699 17.3191C9.31495 18.227 10.685 18.227 11.5301 17.3191L18.4155 9.92165C20.5282 7.65194 20.5282 3.972 18.4155 1.70229C16.3029 -0.567429 12.8777 -0.567429 10.765 1.70229Z"
                fill="#009CBD"
              />
            </svg>
          }
          heading="Value Distribution Services"
          details="Unlock value distribution with our trusted services"
        />
      </div>
      <div onClick={handleSetClass}>
        <NavProductCard
          icon={
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 0.25C9.41421 0.25 9.75 0.585786 9.75 1V3H8.25V1C8.25 0.585786 8.58579 0.25 9 0.25ZM13 0.25C13.4142 0.25 13.75 0.585786 13.75 1V3H12.25V1C12.25 0.585786 12.5858 0.25 13 0.25ZM0.25 9C0.25 8.58579 0.585786 8.25 1 8.25H3V9.75H1C0.585786 9.75 0.25 9.41421 0.25 9ZM19 8.25H21C21.4142 8.25 21.75 8.58579 21.75 9C21.75 9.41421 21.4142 9.75 21 9.75H19V8.25ZM0.25 13C0.25 12.5858 0.585786 12.25 1 12.25H3V13.75H1C0.585786 13.75 0.25 13.4142 0.25 13ZM19 12.25H21C21.4142 12.25 21.75 12.5858 21.75 13C21.75 13.4142 21.4142 13.75 21 13.75H19V12.25ZM9.75 19V21C9.75 21.4142 9.41421 21.75 9 21.75C8.58579 21.75 8.25 21.4142 8.25 21V19H9.75ZM13.75 19V21C13.75 21.4142 13.4142 21.75 13 21.75C12.5858 21.75 12.25 21.4142 12.25 21V19H13.75Z"
                fill="#009CBD"
              />
              <path
                opacity="0.4"
                d="M3 7C3 4.79086 4.79086 3 7 3H15C17.2091 3 19 4.79086 19 7V15C19 17.2091 17.2091 19 15 19H7C4.79086 19 3 17.2091 3 15V7Z"
                fill="#009CBD"
              />
              <rect x="8" y="8" width="6" height="6" rx="2" fill="#009CBD" />
            </svg>
          }
          soon
          heading="Lending API distribution services"
          details="Experience the power of lending APIs with our distribution services"
        />
      </div>
    </div>
  );
};

export default NavServices;
