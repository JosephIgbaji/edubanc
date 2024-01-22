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
          Education remains the cornerstone for every meaningful and sustainable
          nation-building, and should be top-priority for any society that aims
          to prosper and secure a future for its younger generations. In the
          world of today, education is recognized as an important ingredient in
          achieving scientific, technological and socio-economic development for
          any nation. We have created an education hub that helps foster
          close-knit relationships amongst key stakeholders in the education
          sector. We recognise the benefit that collaboration brings in solving
          tough problems, so Edubanc is here to facilitate connections that
          strengthen collaboration. Whether you are a school owner,
          administrator, teacher or student there is something on Edubanc to
          make your contributions more meaningful. Together, we can!
        </p>
      </div>
    </div>
  );
};

export default OurStory;
