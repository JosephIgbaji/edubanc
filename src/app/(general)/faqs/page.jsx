"use client";
import React, { useState } from "react";
import Image from "next/image";
import Testimonials from "@/components/home/Testimonials";
import FAQMain from "@/components/faq/FAQMain";
import ButtonPrimary from "@/components/ButtonPrimary";
import QuestionModal from "@/components/QuestionModal";

const FAQS = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleShow = () => {
    setShowComponent(!showComponent);
  };
  
  return (
    <div className="pt-20 pb-32 px-5 sm:px-32 mx-auto bg-[#F9FAFB;]">
      <FAQMain />
      <Testimonials />
      <div className="w-full mt-28 flex items-center justify-center">
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
        <div onClick={handleShow} className="fixed bottom-[30%] right-0 z-10">
          <ButtonPrimary name={"Got any question for us"} />
        </div>
      )}
    </div>
  );
};

export default FAQS;
