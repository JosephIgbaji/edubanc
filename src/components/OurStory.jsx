import React from "react";
import Image from "next/image";

const OurStory = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center justify-between mt-16">
      <div className="md:w-5/12">
        <Image
          className="rounded-lg"
          src="/about-story.png"
          width={500}
          height={300}
          alt="alt"
        />
        <p className="text-white">Black Image</p>
      </div>
      <div className="md:w-5/12">
        <p className="text-red-500 mb-4">Our Story</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-5">
          Empowering Education Ecosystems
        </h2>
        <p>
          Education is vital for nation-building and socio-economic development.
          Edubanc facilitates collaboration among key education stakeholders to
          solve challenges and enhance contributions. Whether you&apos;re a
          school owner, administrator, teacher, or student, Edubanc has
          something to make your impact more meaningful.
        </p>
      </div>
    </div>
  );
};

export default OurStory;
