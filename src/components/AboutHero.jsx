import React from "react";
import Image from "next/image";

const AboutHero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
      <div className="sm:w-[450px] md:w-[500px] lg:w-[600px] ">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-5">
          Committed to <br /> quality education
        </h2>
        <p>
          With continuous development in the education sector, Edubanc is
          committed to addressing challenges within the Nigerian Education
          System, overcoming obstacles to learning, teaching, tuition financing
          and innovation. Join our mission for holistic education - the BIG
          PICTURE. Together we can!
        </p>
      </div>
      <div className="w-[300px] ">
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
