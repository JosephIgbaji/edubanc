import React from "react";
import TestimonialCard from "./TestimonialCard";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  return (
    <div className="mt-32 flex flex-col sm:block">
      <div className="mb-3 rounded-lg text-primary font-semibold bg-primary bg-opacity-40 w-[130px] px-2 flex items-center gap-2">
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="3" fill="#5277F3" />
        </svg>
        <p>Testimonials</p>
      </div>
      <h2 className="text-3xl font-bold mb-1">Our Customer&apos;s Feedback</h2>
      <p className="text-textGray mb-4 text-sm max-w-[600px] "></p>
      {/* <div className="flex gap-5 w-full overflow-x-scroll scroll-smooth"> */}
      {/* <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"> */}
      <Marquee>
        <TestimonialCard
          testmonial="I am immensely grateful to Edubanc for their financial support, which allowed me to fully immerse myself in the bootcamp without worrying about the financial burden."
          author="Boluwatife Adesina"
          role="Software Enginner"
        />
        <TestimonialCard
          testmonial="I'm grateful for the training and funding provided by Decagon and Edubanc respectively as this has helped me achieve my dream of not only becoming a software engineer but advancing to the level of senior fullstack engineer."
          author="Raji Oluwafunbi"
          role="Senior Fullstack Engineer."
        />
        <TestimonialCard
          testmonial="Our symbiotic relationship with Edubanc had been a rewarding one, for us, as a corporate organization, our clients, who are the parents and the students, and our financial partners, which is Sterling Bank."
          author="anonymous"
          role="Proprietor of Platform Schools"
        />
        <TestimonialCard
          testmonial="I am immensely grateful to Edubanc for their financial support, which allowed me to fully immerse myself in the bootcamp without worrying about the financial burden."
          author="Boluwatife Adesina"
          role="Software Enginner"
        />
        <TestimonialCard
          testmonial="I'm grateful for the training and funding provided by Decagon and Edubanc respectively as this has helped me achieve my dream of not only becoming a software engineer but advancing to the level of senior fullstack engineer."
          author="Raji Oluwafunbi"
          role="Senior Fullstack Engineer."
        />
        <TestimonialCard
          testmonial="Our symbiotic relationship with Edubanc had been a rewarding one, for us, as a corporate organization, our clients, who are the parents and the students, and our financial partners, which is Sterling Bank."
          author="anonymous"
          role="Proprietor of Platform Schools"
        />
        <TestimonialCard
          testmonial="I am immensely grateful to Edubanc for their financial support, which allowed me to fully immerse myself in the bootcamp without worrying about the financial burden."
          author="Boluwatife Adesina"
          role="Software Enginner"
        />
        <TestimonialCard
          testmonial="I'm grateful for the training and funding provided by Decagon and Edubanc respectively as this has helped me achieve my dream of not only becoming a software engineer but advancing to the level of senior fullstack engineer."
          author="Raji Oluwafunbi"
          role="Senior Fullstack Engineer."
        />
        <TestimonialCard
          testmonial="Our symbiotic relationship with Edubanc had been a rewarding one, for us, as a corporate organization, our clients, who are the parents and the students, and our financial partners, which is Sterling Bank."
          author="anonymous"
          role="Proprietor of Platform Schools"
        />
      </Marquee>
      {/* </div> */}
    </div>
  );
};

export default Testimonials;
