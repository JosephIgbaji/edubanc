"use client";
import React, { useState } from "react";
import Image from "next/image";
import AboutHero from "@/components/AboutHero";
import OurStory from "@/components/OurStory";
import ReadyCard from "@/components/ReadyCard";
import OurProduct from "@/components/home/OurProduct";
import Questions from "@/components/home/Questions";
import Testimonials from "@/components/home/Testimonials";
import WhyUs from "@/components/home/WhyUs";
import ButtonPrimary from "@/components/ButtonPrimary";
import QuestionModal from "@/components/QuestionModal";

const About = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleShow = () => {
    setShowComponent(!showComponent);
  };
  return (
    <div className="px-5  pt-16 sm:px-24 lg:px-32 mx-auto bg-[#F9FAFB;]">
      <AboutHero />
      {/* <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-32">
        <ReadyCard
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.4" cx="10" cy="10" r="10" fill="#009CBD" />
              <path
                d="M15 8C15 8.55228 14.5523 9 14 9C13.4477 9 13 8.55228 13 8C13 7.44772 13.4477 7 14 7C14.5523 7 15 7.44772 15 8Z"
                fill="#009CBD"
              />
              <path
                d="M7 8C7 8.55228 6.55228 9 6 9C5.44772 9 5 8.55228 5 8C5 7.44772 5.44772 7 6 7C6.55228 7 7 7.44772 7 8Z"
                fill="#009CBD"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.49455 12.4362C7.1849 12.1645 6.71354 12.1934 6.43945 12.5017C6.16426 12.8113 6.19215 13.2854 6.50174 13.5606L7.00001 13C6.50174 13.5606 6.5015 13.5604 6.50174 13.5606L6.5027 13.5614L6.50376 13.5624L6.50622 13.5645L6.51243 13.5699L6.53 13.5849C6.54398 13.5967 6.56252 13.612 6.58552 13.6303C6.6315 13.6668 6.6955 13.7154 6.77679 13.7719C6.93912 13.8849 7.17203 14.0306 7.46968 14.1749C8.06501 14.4635 8.92676 14.75 10 14.75C11.0733 14.75 11.935 14.4635 12.5303 14.1749C12.828 14.0306 13.0609 13.8849 13.2232 13.7719C13.3045 13.7154 13.3685 13.6668 13.4145 13.6303C13.4375 13.612 13.456 13.5967 13.47 13.5849L13.4876 13.5699L13.4938 13.5645L13.4963 13.5624L13.4973 13.5614C13.4976 13.5612 13.4983 13.5606 13 13L13.4983 13.5606C13.8079 13.2854 13.8358 12.8113 13.5606 12.5017C13.2865 12.1934 12.8151 12.1645 12.5055 12.4362L12.5046 12.4369C12.5012 12.4398 12.4929 12.4466 12.4815 12.4557C12.4587 12.4739 12.4201 12.5034 12.3666 12.5406C12.2594 12.6152 12.0939 12.7195 11.8759 12.8251C11.44 13.0365 10.8018 13.25 10 13.25C9.19825 13.25 8.56 13.0365 8.12409 12.8251C7.90611 12.7195 7.74058 12.6152 7.63338 12.5406C7.57991 12.5034 7.54136 12.4739 7.5185 12.4557C7.50708 12.4466 7.49961 12.4404 7.4962 12.4376C7.49547 12.4369 7.49491 12.4365 7.49455 12.4362C7.49456 12.4362 7.49455 12.4362 7.49455 12.4362ZM12.5055 12.4362L12.5046 12.4369L12.5034 12.438L12.5026 12.4387C12.5037 12.4377 12.5044 12.4371 12.5055 12.4362Z"
                fill="#009CBD"
              />
            </svg>
          }
          heading="Education for Prosperity"
          details="Education is the cornerstone of successful nation-building. At Edubanc, we prioritize this fundamental aspect of growth."
        />
        <ReadyCard
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.25 6C3.25 5.58579 3.58579 5.25 4 5.25H16C16.4142 5.25 16.75 5.58579 16.75 6C16.75 6.41421 16.4142 6.75 16 6.75H4C3.58579 6.75 3.25 6.41421 3.25 6Z"
                fill="#009CBD"
              />
              <path
                opacity="0.4"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.25 14C3.25 13.5858 3.58579 13.25 4 13.25H16C16.4142 13.25 16.75 13.5858 16.75 14C16.75 14.4142 16.4142 14.75 16 14.75H4C3.58579 14.75 3.25 14.4142 3.25 14Z"
                fill="#009CBD"
              />
              <rect width="4" height="20" rx="2" fill="#009CBD" />
              <rect x="16" width="4" height="20" rx="2" fill="#009CBD" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13 3.75C13.4142 3.75 13.75 4.08579 13.75 4.5V7.5C13.75 7.91421 13.4142 8.25 13 8.25C12.5858 8.25 12.25 7.91421 12.25 7.5V4.5C12.25 4.08579 12.5858 3.75 13 3.75Z"
                fill="#009CBD"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 11.75C7.41421 11.75 7.75 12.0858 7.75 12.5V15.5C7.75 15.9142 7.41421 16.25 7 16.25C6.58579 16.25 6.25 15.9142 6.25 15.5V12.5C6.25 12.0858 6.58579 11.75 7 11.75Z"
                fill="#009CBD"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 11.75C10.4142 11.75 10.75 12.0858 10.75 12.5V15.5C10.75 15.9142 10.4142 16.25 10 16.25C9.58579 16.25 9.25 15.9142 9.25 15.5V12.5C9.25 12.0858 9.58579 11.75 10 11.75Z"
                fill="#009CBD"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 3.75C10.4142 3.75 10.75 4.08579 10.75 4.5V7.5C10.75 7.91421 10.4142 8.25 10 8.25C9.58579 8.25 9.25 7.91421 9.25 7.5V4.5C9.25 4.08579 9.58579 3.75 10 3.75Z"
                fill="#009CBD"
              />
            </svg>
          }
          heading="Problem Solvers"
          details="Recognizing the importance of education in socio-economic development, we're dedicated to advancing the educational landscape."
        />
        <ReadyCard
          icon={
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M17.1018 9.08651C18.2994 10.1101 18.2994 11.8899 17.1018 12.9135C15.4507 14.3246 12.8834 16 10 16C7.11664 16 4.54929 14.3246 2.89825 12.9135C1.70059 11.8899 1.70058 10.1101 2.89824 9.08651C4.54929 7.67537 7.11664 6 10 6C12.8834 6 15.4507 7.67537 17.1018 9.08651Z"
                fill="#009CBD"
              />
              <path
                d="M12 11C12 12.1046 11.1046 13 10 13C8.89543 13 8 12.1046 8 11C8 9.89543 8.89543 9 10 9C11.1046 9 12 9.89543 12 11Z"
                fill="#009CBD"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 0.25C10.4142 0.25 10.75 0.585786 10.75 1V3C10.75 3.41421 10.4142 3.75 10 3.75C9.58579 3.75 9.25 3.41421 9.25 3V1C9.25 0.585786 9.58579 0.25 10 0.25ZM0.46967 3.46967C0.762563 3.17678 1.23744 3.17678 1.53033 3.46967L3.03033 4.96967C3.32322 5.26256 3.32322 5.73744 3.03033 6.03033C2.73744 6.32322 2.26256 6.32322 1.96967 6.03033L0.46967 4.53033C0.176777 4.23744 0.176777 3.76256 0.46967 3.46967ZM19.5303 3.46967C19.8232 3.76256 19.8232 4.23744 19.5303 4.53033L18.0303 6.03033C17.7374 6.32322 17.2626 6.32322 16.9697 6.03033C16.6768 5.73744 16.6768 5.26256 16.9697 4.96967L18.4697 3.46967C18.7626 3.17678 19.2374 3.17678 19.5303 3.46967ZM3.03033 15.9697C3.32322 16.2626 3.32322 16.7374 3.03033 17.0303L1.53033 18.5303C1.23744 18.8232 0.762563 18.8232 0.46967 18.5303C0.176777 18.2374 0.176777 17.7626 0.46967 17.4697L1.96967 15.9697C2.26256 15.6768 2.73744 15.6768 3.03033 15.9697ZM16.9697 15.9697C17.2626 15.6768 17.7374 15.6768 18.0303 15.9697L19.5303 17.4697C19.8232 17.7626 19.8232 18.2374 19.5303 18.5303C19.2374 18.8232 18.7626 18.8232 18.4697 18.5303L16.9697 17.0303C16.6768 16.7374 16.6768 16.2626 16.9697 15.9697ZM10 18.25C10.4142 18.25 10.75 18.5858 10.75 19V21C10.75 21.4142 10.4142 21.75 10 21.75C9.58579 21.75 9.25 21.4142 9.25 21V19C9.25 18.5858 9.58579 18.25 10 18.25Z"
                fill="#009CBD"
              />
            </svg>
          }
          heading="Educational Visionaries"
          details="At Edubanc, we're pioneering a fresh educational approach that meets the demands of the 21st century."
        />
      </div> */}
      <div className="my-32"></div>
      <OurStory />
      {/* <div className="h-80 w-80 bg-gradient-to-br from-blue-700 to-stone-50"></div> */}
      <OurProduct />
      <WhyUs />
      <Testimonials />
      {/* <div className="flex gap-10 justify-between flex-col md:flex-row mt-32 ">
        <div className="rounded-3xl p-10 md:w-5/12 h-[240px] bg-gradient-to-br from-emerald-600 to-stone-50 relative overflow-hidden">
         
          <div>
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M17.1459 3.29727L14.8382 5.60495C13.6835 4.68125 12.2187 4.12891 10.625 4.12891C6.89708 4.12891 3.875 7.15098 3.875 10.8789C3.875 14.6068 6.89708 17.6289 10.625 17.6289C14.3529 17.6289 17.375 14.6068 17.375 10.8789C17.375 9.80454 17.124 8.7888 16.6774 7.88713L19.0597 5.50485C20.0507 7.05696 20.625 8.90087 20.625 10.8789C20.625 16.4018 16.1478 20.8789 10.625 20.8789C5.10215 20.8789 0.625 16.4018 0.625 10.8789C0.625 5.35606 5.10215 0.878906 10.625 0.878906C13.1165 0.878906 15.3951 1.79004 17.1459 3.29727Z"
                fill="white"
              />
              <path
                d="M13.7691 6.67409C12.8927 6.0177 11.8042 5.62891 10.625 5.62891C7.7255 5.62891 5.375 7.97941 5.375 10.8789C5.375 13.7784 7.7255 16.1289 10.625 16.1289C13.5245 16.1289 15.875 13.7784 15.875 10.8789C15.875 10.2266 15.756 9.60213 15.5386 9.02592L13.3554 11.2092C13.1922 12.5723 12.032 13.6289 10.625 13.6289C9.10622 13.6289 7.875 12.3977 7.875 10.8789C7.875 9.36012 9.10622 8.12891 10.625 8.12891C11.1118 8.12891 11.5692 8.25542 11.9658 8.47736L13.7691 6.67409Z"
                fill="white"
              />
              <path
                d="M21.1553 1.40924L11.8626 10.702C11.8708 10.7598 11.875 10.8189 11.875 10.8789C11.875 11.5693 11.3154 12.1289 10.625 12.1289C9.93464 12.1289 9.375 11.5693 9.375 10.8789C9.375 10.1885 9.93464 9.62891 10.625 9.62891C10.6851 9.62891 10.7441 9.63314 10.8019 9.64133L20.0947 0.348576C20.3876 0.0556829 20.8624 0.0556829 21.1553 0.348576C21.4482 0.641469 21.4482 1.11634 21.1553 1.40924Z"
                fill="white"
              />
            </svg>
            <h2 className="text-white mt-5 mb-2">Our Mission</h2>
            <p className="text-white lg:text-lg leading-6 w-[300px] h-auto">
              Leveraging technology and fostering partnerships to promote access
              to quality education
            </p>
          </div>
          <Image
            className="absolute opacity-20 rounded-lg bottom-0 right-0"
            src="/mission.jpg"
            width={350}
            height={500}
            // layout="fill"
            alt="alt"
          />
        </div>
        <div className="rounded-3xl p-10 md:w-5/12 h-[240px] bg-gradient-to-br from-cyan-600 to-stone-50 relative overflow-hidden">
          <div>
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M17.1459 3.29727L14.8382 5.60495C13.6835 4.68125 12.2187 4.12891 10.625 4.12891C6.89708 4.12891 3.875 7.15098 3.875 10.8789C3.875 14.6068 6.89708 17.6289 10.625 17.6289C14.3529 17.6289 17.375 14.6068 17.375 10.8789C17.375 9.80454 17.124 8.7888 16.6774 7.88713L19.0597 5.50485C20.0507 7.05696 20.625 8.90087 20.625 10.8789C20.625 16.4018 16.1478 20.8789 10.625 20.8789C5.10215 20.8789 0.625 16.4018 0.625 10.8789C0.625 5.35606 5.10215 0.878906 10.625 0.878906C13.1165 0.878906 15.3951 1.79004 17.1459 3.29727Z"
                fill="white"
              />
              <path
                d="M13.7691 6.67409C12.8927 6.0177 11.8042 5.62891 10.625 5.62891C7.7255 5.62891 5.375 7.97941 5.375 10.8789C5.375 13.7784 7.7255 16.1289 10.625 16.1289C13.5245 16.1289 15.875 13.7784 15.875 10.8789C15.875 10.2266 15.756 9.60213 15.5386 9.02592L13.3554 11.2092C13.1922 12.5723 12.032 13.6289 10.625 13.6289C9.10622 13.6289 7.875 12.3977 7.875 10.8789C7.875 9.36012 9.10622 8.12891 10.625 8.12891C11.1118 8.12891 11.5692 8.25542 11.9658 8.47736L13.7691 6.67409Z"
                fill="white"
              />
              <path
                d="M21.1553 1.40924L11.8626 10.702C11.8708 10.7598 11.875 10.8189 11.875 10.8789C11.875 11.5693 11.3154 12.1289 10.625 12.1289C9.93464 12.1289 9.375 11.5693 9.375 10.8789C9.375 10.1885 9.93464 9.62891 10.625 9.62891C10.6851 9.62891 10.7441 9.63314 10.8019 9.64133L20.0947 0.348576C20.3876 0.0556829 20.8624 0.0556829 21.1553 0.348576C21.4482 0.641469 21.4482 1.11634 21.1553 1.40924Z"
                fill="white"
              />
            </svg>
            <h2 className="text-white mt-5 mb-2">Our Vision</h2>
            <p className="text-white lg:text-lg leading-6 w-[300px] h-auto ">
              To create an ecosystem where quality education is affordable and
              within the reach of all.
            </p>
          </div>
          <Image
            className="absolute opacity-20 rounded-lg top-0 right-0"
            src="/vision.jpg"
            width={350}
            height={300}
            // layout="fill"
            alt="alt"
          />
        </div>
      </div> */}
      <div className="mb-32">
        <Questions />
      </div>
      {showComponent && (
        <div className="fixed top-[25%] right-0 z-10">
          <QuestionModal onclose={handleShow} />
        </div>
      )}
      {!showComponent && (
        <div
          onClick={handleShow}
          className="fixed bottom-[40%] md:bottom-[30%] right-2 z-10"
        >
          <button className="bg-primary text-xs rounded-lg text-white p-3 hidden md:block">
            Got any question?
          </button>
          <svg
            className="md:hidden cursor-pointer"
            width="60px"
            height="60px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 7.75C11.3787 7.75 10.875 8.25368 10.875 8.875C10.875 9.28921 10.5392 9.625 10.125 9.625C9.71079 9.625 9.375 9.28921 9.375 8.875C9.375 7.42525 10.5503 6.25 12 6.25C13.4497 6.25 14.625 7.42525 14.625 8.875C14.625 9.58584 14.3415 10.232 13.883 10.704C13.7907 10.7989 13.7027 10.8869 13.6187 10.9708C13.4029 11.1864 13.2138 11.3753 13.0479 11.5885C12.8289 11.8699 12.75 12.0768 12.75 12.25V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V12.25C11.25 11.5948 11.555 11.0644 11.8642 10.6672C12.0929 10.3733 12.3804 10.0863 12.6138 9.85346C12.6842 9.78321 12.7496 9.71789 12.807 9.65877C13.0046 9.45543 13.125 9.18004 13.125 8.875C13.125 8.25368 12.6213 7.75 12 7.75ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
              fill="#426AF2"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default About;
