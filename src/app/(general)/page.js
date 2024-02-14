"use client";
import React, { useState } from "react";
import AboutUs from "@/components/home/AboutUs";
import Carousel from "@/components/home/Carousel";
import OurBlog from "@/components/home/OurBlog";
import OurProduct from "@/components/home/OurProduct";
import OurServices from "@/components/home/OurServices";
import Partners from "@/components/home/Partners";
import Testimonials from "../../components/home/Testimonials";
import Image from "next/image";
import WhyUs from "@/components/home/WhyUs";
import Questions from "@/components/home/Questions";
// import ButtonPrimary from "@/components/ButtonPrimary";
import SubscribeToNews from "@/components/home/SubscribeToNews";
import QuestionModal from "@/components/QuestionModal";
import ButtonPrimary from "./../../components/ButtonPrimary";

export default function Home() {
  const [showComponent, setShowComponent] = useState(false);

  const handleShow = () => {
    setShowComponent(!showComponent);
  };

  // const handleClose = () => {
  //   setShowComponent(false);
  // };

  return (
    <main className="relative px-5 sm:px-24 lg:px-32 mx-auto bg-[#F9FAFB;] overflow-x-hidden">
      <Carousel />
      <div className="flex items-center justify-center">
        <Partners />
      </div>
      <AboutUs />
      <OurProduct />
      <OurServices />
      <div className="mt-32">
        <div className="mb-3 rounded-lg text-primary font-semibold bg-primary bg-opacity-40 w-[110px] px-2 flex items-center gap-2">
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="3" fill="#5277F3" />
          </svg>
          <p>Our Blog</p>
        </div>
        <h2 className="text-3xl font-bold mb-1">
          Latest, Educative Capivating
        </h2>
        <p className="text-textGray mb-4 text-sm max-w-[600px]">
          Keep up to date with our informative and educational blog
        </p>
      </div>
      <OurBlog limit />
      <Testimonials />
      <WhyUs />
      <div className="w-[90%] mt-28 flex items-center justify-center">
        <Image
          src="/mobileSoon.png"
          alt="mobile app coming soon"
          width={900}
          height={100}
        />
      </div>
      <Questions />
      <SubscribeToNews />
      {showComponent && (
        <div className="fixed top-[10%] md:top-[12%] right-0 z-10">
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
    </main>
  );
}
