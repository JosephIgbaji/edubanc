"use client";
import AboutUs from "@/components/home/AboutUs";
import Carousel from "@/components/home/Carousel";
import OurBlog from "@/components/home/OurBlog";
import OurProduct from "@/components/home/OurProduct";
import OurServices from "@/components/home/OurServices";
import Partners from "@/components/home/Partners";
import Testimonials from "../../components/home/Testimonials";
import Image from "next/image";
import WhyUs from "@/components/home/WhyUs";
import Questions from "@/components/home/Questions";
// import ButtonPrimary from "@/components/ButtonPrimary";
import SubscribeToNews from "@/components/home/SubscribeToNews";

export default function Home() {
  return (
    <main className="px-5 sm:px-32 mx-auto bg-[#F9FAFB;] overflow-x-hidden">
      <Carousel />
      <div className="flex items-center justify-center">
        <Partners />
      </div>
      <AboutUs />
      <OurProduct />
      <OurServices />
      <OurBlog />
      <Testimonials />
      <WhyUs />
      <div className="w-[90%] mt-28 flex items-center justify-center">
        <Image
          src="/mobileSoon.png"
          alt="mobile app coming soon"
          width={900}
          height={100}
        />
      </div>
      <Questions />
      <SubscribeToNews />
    </main>
  );
}
