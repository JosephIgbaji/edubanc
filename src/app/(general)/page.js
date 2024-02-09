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
    <main className="relative px-5 sm:px-32 mx-auto bg-[#F9FAFB;] overflow-x-hidden">
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
        <h2 className="text-3xl font-bold mb-1">Latest, Educative Capivating</h2>
        <p className="text-textGray mb-4 text-sm max-w-[600px]">
          Keep up to date with our informative and educational blog
        </p>
      </div>
      <OurBlog />
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
        <div className="fixed top-[25%] right-0 z-10">
          <QuestionModal onclose={handleShow} />
        </div>
      )}
      {!showComponent && (
        <div onClick={handleShow} className="fixed bottom-[30%] right-0 z-10">
          <ButtonPrimary name={"Got any question for us"} />
        </div>
      )}
    </main>
  );
}
