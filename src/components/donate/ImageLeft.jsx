import React from "react";
import Image from "next/image";

const ImageLeft = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-24 items-center justify-between mt-16">
      <div className="w-[300px] sm:min-w-[400px] lg:max-w-[500px]">
        <Image
          className="rounded-xl"
          src="/donate-imageLeft.jpeg"
          width={500}
          height={100}
          // layout="fill"
          alt="altoverlay"
        />
      </div>
      <div className="w-[300px] sm:min-w-[350px] lg:max-w-[500px]">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-5">
          When you fund education, you ignite a bright future
        </h2>
        <p className="text-sm">
          We believe teachers are the Heroes of the Education system and by the
          very nature of heroism, they serve as the beacon of light and hope in
          the system. Teachers help to guide students on the right path so they
          can achieve their dreams and aspirations. <br /> <br /> Unfortunately,
          we are at a dire time in Nigeria when our Heroes are the ones who need
          be saved! When the Hero cannot perform optimally, the system will not
          produce the desired result. <br />
          <br />
          To salvage this situation, Edubanc is partnering with 1Million
          Teachers Initiative Inc to train teachers to be better professionals.
          These intensive training sessions are focused on capacity building and
          soft-skill improvement. Great Teachers make Great Students.
        </p>
      </div>
    </div>
  );
};

export default ImageLeft;
