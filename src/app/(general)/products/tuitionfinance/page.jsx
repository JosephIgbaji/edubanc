"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import ReadyCard from "@/components/ReadyCard";
import EdServices from "../edpay/EdServices";
import ProductHero from "@/components/products/ProductHero";
import TuitionServices from "./TuitionServices";
import ButtonPrimary from "@/components/ButtonPrimary";
import QuestionModal from "@/components/QuestionModal";

const TuitionFinance = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleShow = () => {
    setShowComponent(!showComponent);
  };
  return (
    <div className="pt-20 pb-32 px-5 sm:px-32 mx-auto bg-[#F9FAFB]">
      <ProductHero
        color="#F99247"
        showtitle
        herotitle="Foreign Tuition Financing"
        image="/foreignfinancehero.png"
        linkTo="#"
        headi
        ng="Global learning made possible, study abroad with Edubanc"
        details="Explore the world of education through Edubanc's foreign tuition financing options. We're here to make your international education dreams a reality."
      />
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-32">
        <ReadyCard
          icon={
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.4" cx="11" cy="7" r="7" fill="#009CBD" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 6.25C1.41421 6.25 1.75 6.58579 1.75 7C1.75 12.1086 5.89137 16.25 11 16.25C16.1086 16.25 20.25 12.1086 20.25 7C20.25 6.58579 20.5858 6.25 21 6.25C21.4142 6.25 21.75 6.58579 21.75 7C21.75 12.6849 17.3372 17.3392 11.75 17.7242V19.25H14C14.4142 19.25 14.75 19.5858 14.75 20C14.75 20.4142 14.4142 20.75 14 20.75H8C7.58579 20.75 7.25 20.4142 7.25 20C7.25 19.5858 7.58579 19.25 8 19.25H10.25V17.7242C4.66285 17.3392 0.25 12.6849 0.25 7C0.25 6.58579 0.585786 6.25 1 6.25Z"
                fill="#009CBD"
              />
            </svg>
          }
          heading="Access Global Education"
          details="Edubanc opens doors to prestigious international institutions and enriching educational experiences"
        />
        <ReadyCard
          icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M12 22C17.5228 22 22 17.5228 22 12C22 8.44283 20.1427 5.31946 17.3449 3.54675C15.7989 2.56715 13.9657 2 12 2C6.85272 2 2.61375 5.88894 2.06103 10.8889C2.0207 11.2537 2 11.6244 2 12C2 15.1414 3.44852 17.9445 5.71407 19.7778C7.43155 21.1676 9.61856 22 12 22Z"
                fill="#009CBD"
              />
              <path
                d="M18.6667 16.4446C17.4394 16.4446 16.4444 15.4497 16.4444 14.2224C16.4444 12.9951 15.4495 12.0001 14.2222 12.0001C12.9949 12.0001 12 11.0052 12 9.77791C12 8.55061 12.9949 7.55568 14.2222 7.55568C15.4495 7.55568 16.4444 6.56076 16.4444 5.33346C16.4444 4.60124 16.7986 3.95173 17.3449 3.54688C20.1427 5.31959 22 8.44296 22 12.0001C22 13.5966 21.6259 15.1057 20.9605 16.4446H18.6667Z"
                fill="#009CBD"
              />
              <path
                d="M4.22222 10.889C5.44952 10.889 6.44445 11.8839 6.44445 13.1112C6.44445 14.3385 7.43937 15.3335 8.66667 15.3335C9.89397 15.3335 10.8889 16.3284 10.8889 17.5557C10.8889 18.783 9.89397 19.7779 8.66667 19.7779L5.71407 19.7779C3.44852 17.9446 2 15.1415 2 12.0001C2 11.6246 2.0207 11.2538 2.06103 10.889H4.22222Z"
                fill="#009CBD"
              />
            </svg>
          }
          heading="Diverse Destinations"
          details="Tailored financial solutions designed to meet your specific academic and career goals"
        />
        <ReadyCard
          icon={
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M0 9.57819V3.57043C0 2.73462 0.428004 1.97054 1.10557 1.59675L3.15542 0.465924C3.71084 0.159519 4.32329 0 4.94427 0H6.62547C7.86642 0 9.02336 0.63403 9.77392 1.69096L7.83452 4.36569C7.35943 5.02092 7.40684 5.9655 7.94461 6.55884C8.52749 7.20194 9.47251 7.20194 10.0554 6.55884L11.4706 4.99741L13.7615 9.63128C14.3882 10.8991 13.7606 12.4784 12.4907 12.8287L8.9609 13.8023C7.68876 14.1532 6.34745 14.0347 5.14217 13.4647L1.21216 11.6064C0.476794 11.2587 0 10.4609 0 9.57819Z"
                fill="#009CBD"
              />
              <path
                d="M20.0004 9.8266V3.57043C20.0004 2.73462 19.5724 1.97054 18.8948 1.59675L16.8449 0.465924C16.2895 0.159519 15.6771 0 15.0561 0H12.9229C11.7077 0 10.5585 0.609432 9.79939 1.65633L7.83489 4.36569C7.35979 5.02092 7.40721 5.9655 7.94498 6.55884C8.52785 7.20194 9.47288 7.20194 10.0557 6.55884L11.471 4.99741L13.7618 9.63128C14.1607 10.4381 14.0515 11.3711 13.5921 12.0332H18.0004C19.1049 12.0332 20.0004 11.0453 20.0004 9.8266Z"
                fill="#009CBD"
              />
            </svg>
          }
          heading="Cultural Enrichment"
          details="Immerse yourself in diverse cultures and experiences while pursuing your education abroad"
        />
      </div>

      <div className="flex justify-between md:flex-row flex-col items-center mb-20 mt-32 md:gap-[80px]">
        <div className="min-w-[300px] rounded-lg lg:max-w-[500px] h-[300px] md:h-[400px] overflow-hidden">
          <Image
            className="rounded-lg"
            src="/foreignfinanceleft.png"
            width={600}
            height={500}
            alt="icon-overlay"
          />
        </div>
        <div className="min-w-[320px] lg:max-w-[500px] lg:mb-10 md:mb-0">
          <h2 className="text-3xl md:text-xl lg:text-3xl  font-bold mb-3 mt-5">
            Discover the unique features of Edubanc&apos;s tertiary seamless
            tuition payment
          </h2>

          <p className="text-sm md:text-lg mb-5 text-textGray">
            Edubanc stands out in the world of foreign tuition financing, thanks
            to our remarkable features. We&apos;re committed to transforming
            your international education dreams into reality. Learn about the
            outstanding features that make us your ideal partner.
          </p>
          <Link href="#">
            <ButtonPrimary name="Get Started" color="#F99247" />
          </Link>
        </div>
      </div>

      <ProductHero
        color="#F99247"
        image="/foreignfinanceright.png"
        linkTo="#"
        heading="Start your global learning journey"
        details="Don't wait any longer to explore the world of education. Edubanc is here to help you make your international education dreams a reality. Take the first step toward a global learning adventure. Apply now and embrace a world of opportunities."
      />
      {/* <EdServices /> */}
      <TuitionServices />

      <div className="w-full mt-28 mb-20 flex items-center justify-center">
        <Image
          src="/mobileSoon.png"
          alt="mobile app coming soon"
          width={900}
          height={100}
        />
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

export default TuitionFinance;
