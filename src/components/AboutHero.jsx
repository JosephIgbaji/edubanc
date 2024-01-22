import React from "react";
import Image from "next/image";

const AboutHero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-10 items-center justify-between mt-16">
      <div className="sm:w-[450px] md:w-[500px] lg:w-[600px] ">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-5">
          Committed to <br /> quality education
        </h2>
        <p>
          The global education demands of the 21st century require a new
          approach to education, one that fully prepares students for the
          fast-paced and innovative world we are in today. At Edubanc, we are on
          a mission to holistically address the challenges of the Nigerian
          Education System by solving real problems impeding learning, teaching
          and innovation. Join our BIG PICTURE EDUCATION mission.
        </p>
      </div>
      <div className="w-[400px] ">
        <Image
          className="rounded-lg"
          src="/about-hero.png"
          width={600}
          height={400}
          alt="alt"
        />
      </div>
    </div>
  );
};

export default AboutHero;
