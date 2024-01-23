import React from "react";
import ServicesCard from "@/components/ServicesCard";

const EdServices = () => {
  return (
    <div className="mt-32 flex flex-col items-center sm:block">
      <h2 className="text-3xl text-center sm:text-left font-bold mb-3">
        Explore our services
      </h2>
      <p className="text-textGray mb-4 text-sm md:text-lg max-w-[600px] text-center sm:text-left">
        Unveil a new era of education with Edubanc&apos;s transformative
        products. From cutting-edge financial services to impactful training
        programs, our offerings empower educators, students, and administrators.
        Join us in reshaping learning for a brighter future.
      </p>
      <div className="flex flex-wrap">
        <ServicesCard
          icon={
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M2 4H0V13L4.31083 15.1554C5.42168 15.7108 6.64658 16 7.88854 16H16C17.1046 16 18 15.1046 18 14C18 12.8954 17.1046 12 16 12H14.4164C13.4849 12 12.5663 11.7831 11.7331 11.3666L8.792 9.896C8.9843 9.7189 9.14317 9.49927 9.25282 9.24342C9.66638 8.27844 9.22409 7.16054 8.26225 6.73973L2 4Z"
                fill="#426AF2"
              />
              <circle cx="16" cy="4" r="4" fill="white" />
            </svg>
          }
          heading="Tuition Collection and Remittance Services"
          details="Effortlessly manage tuition collection and remittance with our comprehensive services."
        />
        <ServicesCard
          icon={
            <svg
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M11.099 1.70229L10.334 2.52422L9.56894 1.70229C7.45631 -0.567428 4.03108 -0.56743 1.91845 1.70229C-0.194171 3.972 -0.194172 7.65194 1.91845 9.92165L8.80389 17.3191C9.64893 18.227 11.019 18.227 11.8641 17.3191L18.7495 9.92165C20.8621 7.65194 20.8621 3.972 18.7495 1.70229C16.6369 -0.567429 13.2117 -0.567429 11.099 1.70229Z"
                fill="#426AF2"
              />
            </svg>
          }
          heading="Value Distribution Services"
          details="Unlock value distribution with our trusted services"
        />
        <ServicesCard
          icon={
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.66602 0.25C10.0802 0.25 10.416 0.585786 10.416 1V3H8.91602V1C8.91602 0.585786 9.2518 0.25 9.66602 0.25ZM13.666 0.25C14.0802 0.25 14.416 0.585786 14.416 1V3H12.916V1C12.916 0.585786 13.2518 0.25 13.666 0.25ZM0.916016 9C0.916016 8.58579 1.2518 8.25 1.66602 8.25H3.66602V9.75H1.66602C1.2518 9.75 0.916016 9.41421 0.916016 9ZM19.666 8.25H21.666C22.0802 8.25 22.416 8.58579 22.416 9C22.416 9.41421 22.0802 9.75 21.666 9.75H19.666V8.25ZM0.916016 13C0.916016 12.5858 1.2518 12.25 1.66602 12.25H3.66602V13.75H1.66602C1.2518 13.75 0.916016 13.4142 0.916016 13ZM19.666 12.25H21.666C22.0802 12.25 22.416 12.5858 22.416 13C22.416 13.4142 22.0802 13.75 21.666 13.75H19.666V12.25ZM10.416 19V21C10.416 21.4142 10.0802 21.75 9.66602 21.75C9.2518 21.75 8.91602 21.4142 8.91602 21V19H10.416ZM14.416 19V21C14.416 21.4142 14.0802 21.75 13.666 21.75C13.2518 21.75 12.916 21.4142 12.916 21V19H14.416Z"
                fill="#426AF2"
              />
              <path
                opacity="0.4"
                d="M3.66602 7C3.66602 4.79086 5.45688 3 7.66602 3H15.666C17.8752 3 19.666 4.79086 19.666 7V15C19.666 17.2091 17.8752 19 15.666 19H7.66602C5.45688 19 3.66602 17.2091 3.66602 15V7Z"
                fill="#426AF2"
              />
              <rect
                x="8.66602"
                y="8"
                width="6"
                height="6"
                rx="2"
                fill="#426AF2"
              />
            </svg>
          }
          heading="Lending API distribution services"
          details="Experience the power of lending APIs with our distribution services"
        />
      </div>
    </div>
  );
};

export default EdServices;
