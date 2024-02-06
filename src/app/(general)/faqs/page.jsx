import React from "react";
import Image from "next/image";
import Testimonials from "@/components/home/Testimonials";
import FAQMain from "@/components/faq/FAQMain";

const FAQS = () => {
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
    </div>
  );
};

export default FAQS;
