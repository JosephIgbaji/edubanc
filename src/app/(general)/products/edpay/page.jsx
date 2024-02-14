"use client";
import React, { useState } from "react";
import Image from "next/image";
import EdpayFAQ from "./EdpayFAQ";
import EdServices from "./EdServices";
import ReadyCard from "@/components/ReadyCard";
import EdpayPaving from "@/components/products/EdpayPaving";
import ProductHero from "@/components/products/ProductHero";
import ButtonPrimary from "@/components/ButtonPrimary";
import QuestionModal from "@/components/QuestionModal";

const EdpayHome = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleShow = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div className="pt-20 pb-32 px-5 sm:px-32 mx-auto bg-[#F9FAFB]">
      <ProductHero
        showtitle
        linkTo="#"
        image="/edpayhero.png"
        herotitle="Edpay"
        heading="Unlocking financial ease with EdPay"
        details="EdPay revolutionizes education financing. Offering swift, affordable access to funds for fees, it ensures uninterrupted learning for students. Schools also benefit from revenue assurance, guaranteeing seamless program execution. Experience hassle-free education finance with EdPay."
      />
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-32">
        <ReadyCard
          icon={
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.4" cx="12" cy="5" r="3" fill="#009CBD" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.1136 15.9483C13.6773 15.3718 13.9986 14.7073 13.9986 14C13.9986 12.2987 12.1399 10.8455 9.51953 10.2672C10.2752 10.0956 11.1146 10 11.9986 10C15.3123 10 17.9986 11.3431 17.9986 13C17.9986 14.4664 15.8945 15.687 13.1136 15.9483Z"
                fill="#009CBD"
              />
              <ellipse
                opacity="0.4"
                cx="7"
                cy="14"
                rx="7"
                ry="4"
                fill="#009CBD"
              />
              <circle cx="7" cy="4" r="4" fill="#009CBD" />
            </svg>
          }
          heading="For Parents"
          details="With our financing options, parents gain access to the support they need to ensure their children's education continues without interruption"
        />
        <ReadyCard
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M0 6.00027C0 4.8957 0.895431 4.00027 2 4.00027H4.29844C4.75258 4.00027 5.1932 3.84571 5.54783 3.56201L8.75061 0.999786C9.48105 0.415436 10.519 0.415436 11.2494 0.999786L14.4522 3.56201C14.8068 3.84571 15.2474 4.00027 15.7016 4.00027H18C19.1046 4.00027 20 4.8957 20 6.00027V18.0003C20 19.1048 19.1046 20.0003 18 20.0003H2C0.895431 20.0003 0 19.1048 0 18.0003V6.00027Z"
                fill="#009CBD"
              />
              <path
                d="M7 16C7 14.3431 8.34315 13 10 13C11.6569 13 13 14.3431 13 16V20H7V16Z"
                fill="#009CBD"
              />
              <path
                d="M12 8C12 6.89543 11.1046 6 10 6C8.89543 6 8 6.89543 8 8C8 9.10457 8.89543 10 10 10C11.1046 10 12 9.10457 12 8Z"
                fill="#009CBD"
              />
            </svg>
          }
          heading="For Schools"
          details=" With EdPay, schools can enjoy revenue assurance, improved cash flows, and financial stability as parents meet their obligations promptly."
        />
        <ReadyCard
          icon={
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 6.2226V8.00037C5 10.2095 6.79086 12.0004 9 12.0004C11.2091 12.0004 13 10.2095 13 8.00037V6.2226L10.2184 7.45886C9.44272 7.80361 8.55728 7.80361 7.78159 7.45886L5 6.2226ZM15.5 5.11149V9.50037C15.5 9.91459 15.8358 10.2504 16.25 10.2504C16.6642 10.2504 17 9.91459 17 9.50037V4.44385C16.9909 4.44855 16.9815 4.45303 16.972 4.45728L15.5 5.11149Z"
                fill="#009CBD"
              />
              <path
                opacity="0.4"
                d="M1.0274 3.54334L7.78094 0.541768C8.55664 0.197015 9.44208 0.197015 10.2178 0.541768L16.9713 3.54334C17.3672 3.7193 17.3672 4.2812 16.9713 4.45716L10.2178 7.45873C9.44208 7.80349 8.55664 7.80349 7.78094 7.45873L1.0274 4.45716C0.631492 4.2812 0.631492 3.7193 1.0274 3.54334Z"
                fill="#009CBD"
              />
              <path
                opacity="0.4"
                d="M11.2996 13.3999L9.71103 15.0062C9.31962 15.4019 8.68038 15.4019 8.28897 15.0062L6.70045 13.3999C6.45505 13.1517 6.09681 13.046 5.762 13.1444C2.95686 13.9693 1 15.8332 1 18.0003C1 19.1049 1.89543 20.0003 3 20.0003H15C16.1046 20.0003 17 19.1049 17 18.0003C17 15.8332 15.0431 13.9693 12.238 13.1444C11.9032 13.046 11.5449 13.1517 11.2996 13.3999Z"
                fill="#009CBD"
              />
            </svg>
          }
          heading="For Students"
          details="EdPay ensures an undistorted learning cycle, allowing you to focus on your studies without the worry of fee-related interruptions."
        />
      </div>
      <EdpayPaving />
      <ProductHero
        linkTo="#"
        image="/edpayrightimage.png"
        herotitle=""
        heading="Tailored interest rates for your financial ease"
        details="EdPay customizes interest rates to fit your financial comfort. Benefit from rates as low as 9%, tailored to your agreement terms with our partnered schools. Embrace financial flexibility with EdPay."
      />
      <EdServices />
      <div className="w-full mt-28 mb-20 flex items-center justify-center">
        <Image
          src="/mobileSoon.png"
          alt="mobile app coming soon"
          width={900}
          height={100}
        />
      </div>
      <div className="hidden md:block">
        <EdpayFAQ />
      </div>
      {showComponent && (
        <div className="fixed top-[25%] right-0 z-10">
          <QuestionModal onclose={handleShow} />
        </div>
      )}
      {!showComponent && (
        <div
          onClick={handleShow}
          className="fixed bottom-[40%] md:bottom-[30%] right-2 z-10"
        >
          <button className="bg-primary text-xs rounded-lg text-white p-3 hidden md:block">
            Got any question?
          </button>
          <svg
            className="md:hidden cursor-pointer"
            width="60px"
            height="60px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 7.75C11.3787 7.75 10.875 8.25368 10.875 8.875C10.875 9.28921 10.5392 9.625 10.125 9.625C9.71079 9.625 9.375 9.28921 9.375 8.875C9.375 7.42525 10.5503 6.25 12 6.25C13.4497 6.25 14.625 7.42525 14.625 8.875C14.625 9.58584 14.3415 10.232 13.883 10.704C13.7907 10.7989 13.7027 10.8869 13.6187 10.9708C13.4029 11.1864 13.2138 11.3753 13.0479 11.5885C12.8289 11.8699 12.75 12.0768 12.75 12.25V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V12.25C11.25 11.5948 11.555 11.0644 11.8642 10.6672C12.0929 10.3733 12.3804 10.0863 12.6138 9.85346C12.6842 9.78321 12.7496 9.71789 12.807 9.65877C13.0046 9.45543 13.125 9.18004 13.125 8.875C13.125 8.25368 12.6213 7.75 12 7.75ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
              fill="#426AF2"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default EdpayHome;
