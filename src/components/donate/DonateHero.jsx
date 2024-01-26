import React from "react";
import Link from "next/link";
import Image from "next/image";

const DonateHero = () => {
  return (
    <div className="relative w-3/4 mb-32 flex items-center justify-center md:block">
      <div className="flex flex-col h-[800px] sm:h-[820px] md:h-[850px] lg:h-[auto] items-center lg:items-start p-8 bg-green-700 rounded-2xl">
        <div className="flex flex-col gap-5 mb-4">
          <h2 className="text-2xl lg:text-5xl font-bold text-white">
            Rebuilding the future, <br /> one teacher at a time
          </h2>
          <p className="text-xs text-gray-300">
            We want teachers to get more support. We want them to be trained
            like the <br /> professionals they are.Our goal is to train 1
            million teachers by 2030.
          </p>

          <Link className="bg-white p-3 rounded-lg w-[150px]" href="/donate">
            I want to donate
          </Link>
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.459 0.945716L14 1.40235L13.541 0.945716C12.2734 -0.315238 10.2183 -0.315239 8.95068 0.945715C7.68311 2.20667 7.68311 4.25108 8.95068 5.51203L13.0819 9.62171C13.589 10.1261 14.411 10.1261 14.9181 9.62171L19.0493 5.51203C20.3169 4.25108 20.3169 2.20667 19.0493 0.945715C17.7817 -0.315238 15.7266 -0.315238 14.459 0.945716Z"
                fill="white"
              />
              <path
                opacity="0.4"
                d="M2 8H0V17L4.31083 19.1554C5.42168 19.7108 6.64658 20 7.88854 20H16C17.1046 20 18 19.1046 18 18C18 16.8954 17.1046 16 16 16H14.4164C13.4849 16 12.5663 15.7831 11.7331 15.3666L9.01907 13.646C9.11115 13.5245 9.19005 13.3899 9.25282 13.2434C9.66638 12.2784 9.22409 11.1605 8.26225 10.7397L2 8Z"
                fill="white"
              />
            </svg>
          </div>
          <p className="text-xs text-white font-bold">
            Be a Hero: Support the Teacher Training Initiative
          </p>
          <p className="text-xs text-gray-300">
            Every hero needs a helping hand, even our teachers. They light up
            the <br />
            education system with hope and guidance, but they too deserve
            support.
          </p>
        </div>
        <div className="w-[300px] sm:w-[320px] md:w-[350px]">
          <Image
            className="lg:hidden rounded-lg"
            src="/donate-hero.png"
            width={400}
            height={100}
            // layout="fill"
            alt="alt"
          />
        </div>
      </div>
      <div className="hidden lg:block md:absolute w-[300px] h-[300px] top-10 -right-40">
        <Image
          className="rounded-full md:rounded-3xl"
          src="/donate-hero.png"
          //   width={500}
          //   height={100}
          layout="fill"
          alt="alt"
        />
      </div>
    </div>
  );
};

export default DonateHero;
