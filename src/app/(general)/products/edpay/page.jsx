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
        <div onClick={handleShow} className="fixed bottom-[30%] right-0 z-10">
          <ButtonPrimary name={"Got any question for us"} />
        </div>
      )}
    </div>
  );
};

export default EdpayHome;
