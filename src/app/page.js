import AboutUs from "@/components/home/AboutUs";
import Carousel from "@/components/home/Carousel";
import OurBlog from "@/components/home/OurBlog";
import OurProduct from "@/components/home/OurProduct";
import OurServices from "@/components/home/OurServices";
import Partners from "@/components/home/Partners";
import Testimonials from "./../components/home/Testimonials";
import Image from "next/image";
import WhyUs from "@/components/home/WhyUs";
import Questions from "@/components/home/Questions";
import ButtonPrimary from "@/components/ButtonPrimary";

export default function Home() {
  return (
    <main className="px-5 sm:px-32 mx-auto bg-[#F9FAFB;]">
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
      <div className="w-full mt-28 flex items-center justify-center">
        <Image
          src="/mobileSoon.png"
          alt="mobile app coming soon"
          width={900}
          height={100}
        />
      </div>
      <Questions />
      <div className="w-full mt-32 mb-32 text-center flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold">
          Want to know when anything drops?
        </h2>
        <p className="text-sm text-textGray my-4">
          Sign up for our newsletter and get news on the latest on Edubanc
        </p>
        <div className="mb-4">
          <input
            className="border-[1px] p-3 rounded-lg mr-3"
            placeholder="Enter your email"
          />
          <ButtonPrimary name="Subscribe" />
        </div>
        <p className="text-xs text-textGray">
          We care about your data in our privacy policy
        </p>
      </div>
    </main>
  );
}
