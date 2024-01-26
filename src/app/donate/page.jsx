import React from "react";
import Image from "next/image";
import Elevate from "@/components/donate/Elevate";
import ImageLeft from "@/components/donate/ImageLeft";
import Payment from "@/components/donate/Payment";
import DonateHero from "@/components/donate/DonateHero";

const Donate = () => {
  return (
    <div className="flex flex-col items-center lg:block pt-20 pb-32 px-5 sm:px-32 mx-auto bg-[#F9FAFB]">
      <DonateHero />
      <Payment />
      <ImageLeft />
      <Elevate />
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

export default Donate;
