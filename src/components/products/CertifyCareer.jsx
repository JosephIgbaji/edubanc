import React from "react";
import Image from "next/image";

const CertifyCareer = () => {
  return (
    <div className="flex justify-between md:flex-row flex-col items-center mt-28 mb-28 gap-10 ">
      <div className="w-[300px] md:w-[500px] h-[300px] md:h-[400px]">
        <Image
          className="rounded-lg"
          src="/collegeleftimage.png"
          width={600}
          height={466}
          alt="logo-icon-overlay"
        />
      </div>
      <div className="w-[320px] sm:w-[400px] md:w-[500px] mb-10 md:mb-0">
        <h2 className="text-3xl md:text-xl lg:text-3xl  font-bold mb-2">
          Your key to educational and career excellence
        </h2>
        <p className="text-sm mb-5 text-textGray">
          Explore the exceptional features of CertifyCollegePay, your partner in
          educational and career success. Our platform unlocks access to
          professional certification and tertiary tuition financing, ensuring
          that your path to academic and career achievement is clear and
          supported
        </p>
        <div className="">
          <div className="mb-3">
            <PayOption heading="Affordable Financing" />
            <PayOption heading="Seamless Application" />
            <PayOption heading="Empowering Dreams" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertifyCareer;

const PayOption = ({ heading }) => {
  return (
    <div className="flex gap-4 mb-4">
      <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#F5F5F5] border-[1px]">
        <svg
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.4">
            <path
              d="M13 2V7.5H3V2C3 0.895431 3.89543 0 5 0H11C12.1046 0 13 0.89543 13 2Z"
              fill="#4B9560"
            />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 20C12.4183 20 16 16.4183 16 12C16 7.58172 12.4183 4 8 4C3.58172 4 0 7.58172 0 12C0 16.4183 3.58172 20 8 20ZM9.34316 9.68047L8.78687 8.50856C8.465 7.83048 7.535 7.83048 7.21312 8.50856L6.65684 9.68047C6.52903 9.94974 6.28196 10.1364 5.99615 10.1796L4.75226 10.3675C4.03253 10.4762 3.74515 11.3958 4.26595 11.9236L5.16603 12.8358C5.37284 13.0454 5.46722 13.3474 5.4184 13.6434L5.20591 14.9314C5.08297 15.6767 5.83536 16.2451 6.47911 15.8932L7.59167 15.285C7.8473 15.1453 8.1527 15.1453 8.40833 15.285L9.5209 15.8932C10.1646 16.2451 10.917 15.6767 10.7941 14.9314L10.5816 13.6434C10.5328 13.3474 10.6272 13.0454 10.834 12.8358L11.7341 11.9236C12.2549 11.3958 11.9675 10.4762 11.2477 10.3675L10.0038 10.1796C9.71804 10.1364 9.47097 9.94974 9.34316 9.68047Z"
            fill="#009CBD"
          />
        </svg>
      </div>
      <div>
        <h2 className="text-lg md:text-smlg:text-lg font-semibold mb-3">
          {heading}
        </h2>
      </div>
    </div>
  );
};
