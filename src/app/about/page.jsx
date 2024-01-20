import OurProduct from "@/components/home/OurProduct";
import Questions from "@/components/home/Questions";
import Testimonials from "@/components/home/Testimonials";
import WhyUs from "@/components/home/WhyUs";
import React from "react";

const About = () => {
  return (
    <div className="px-32">
      <OurProduct />
      <WhyUs />
      <Testimonials />
      <Questions />
    </div>
  );
};

export default About;
