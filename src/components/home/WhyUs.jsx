import React from "react";
import Link from "next/link";
import ButtonPrimary from "../ButtonPrimary";

const WhyUs = () => {
  return (
    <div className="mt-32 flex justify-between gap-5 flex-col md:flex-row">
      <div className="max-w-[350px] mb-5">
        <h2 className="text-3xl sm:text-left font-bold mb-1">Why Edubanc?</h2>
        <p className="text-textGray mb-4 text-sm max-w-[600px] sm:text-left">
          We&apos;re not just about words, we take action. Edubanc tackles the
          genuine obstacles in Nigerian education, from learning barriers to
          teaching roadblocks, aiming to create tangible change.
        </p>
        <Link href="/">
          <ButtonPrimary name="Get Started" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <ReasonsCard
          icon={
            <svg
              width="14"
              height="20"
              viewBox="0 0 14 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M0 11.5L9 0V8.5H14L5 20V11.5H0Z"
                fill="#426AF2"
              />
            </svg>
          }
          heading="Empowering Stakeholders"
          details="We offer a range of services  to empower stakeholders. "
        />
        <ReasonsCard
          icon={
            <svg
              width="21"
              height="19"
              viewBox="0 0 21 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M7 2V10C7 11.1046 7.89543 12 9 12H19C20.1046 12 21 11.1046 21 10V2C21 0.895431 20.1046 0 19 0H9C7.89543 0 7 0.895431 7 2Z"
                fill="#426AF2"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.5 10.5C4.5 9.11929 5.61929 8 7 8C8.38071 8 9.5 9.11929 9.5 10.5C9.5 11.8807 8.38071 13 7 13C5.61929 13 4.5 11.8807 4.5 10.5Z"
                fill="#426AF2"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.3126 11.3184C13.6892 11.491 13.8545 11.9361 13.6819 12.3127C13.0769 13.6327 10.9325 16.0229 7.00014 16.0229C3.65974 16.0229 2.01891 17.7041 1.6573 18.3616C1.45768 18.7246 1.00164 18.857 0.6387 18.6573C0.27576 18.4577 0.14336 18.0017 0.342978 17.6387C0.981365 16.478 3.14054 14.5229 7.00014 14.5229C10.2678 14.5229 11.9234 12.5494 12.3183 11.6877C12.4909 11.3111 12.9361 11.1458 13.3126 11.3184Z"
                fill="#426AF2"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.25 4C10.25 3.58579 10.5858 3.25 11 3.25L17 3.25C17.4142 3.25 17.75 3.58579 17.75 4C17.75 4.41421 17.4142 4.75 17 4.75L11 4.75C10.5858 4.75 10.25 4.41421 10.25 4Z"
                fill="#426AF2"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.25 8C13.25 7.58579 13.5858 7.25 14 7.25L17 7.25C17.4142 7.25 17.75 7.58579 17.75 8C17.75 8.41421 17.4142 8.75 17 8.75H14C13.5858 8.75 13.25 8.41421 13.25 8Z"
                fill="#426AF2"
              />
            </svg>
          }
          heading="Elevating Teaching Standards"
          details="We offer free digitized teachers training focused on capacity building."
        />
        <ReasonsCard
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
              <path
                d="M10.6083 4.51043L13.4383 8.04783C14.2389 9.04864 15.7611 9.04864 16.5617 8.04783L19.3917 4.51043C19.7855 4.01818 20 3.40656 20 2.77617V2.65165C20 1.18718 18.8128 0 17.3484 0H17.0509C16.5381 0 16.0463 0.203723 15.6836 0.566353C15.3061 0.943921 14.6939 0.94392 14.3164 0.566352C13.9537 0.203723 13.4619 0 12.9491 0H12.6517C11.1872 0 10 1.18718 10 2.65165V2.77617C10 3.40656 10.2145 4.01818 10.6083 4.51043Z"
                fill="#426AF2"
              />
            </svg>
          }
          heading="Prioritizing Welfare"
          details="We provide services that recognize and appreciate the contributions in the education sector"
        />
        <ReasonsCard
          icon={
            <svg
              width="22"
              height="17"
              viewBox="0 0 22 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.2383 7.61627V8.60297C19.2383 9.82924 18.2442 10.8233 17.0179 10.8233C15.7917 10.8233 14.7976 9.82924 14.7976 8.60297V7.61627L16.3416 8.3025C16.7722 8.49387 17.2637 8.49387 17.6943 8.3025L19.2383 7.61627ZM13.4099 6.99951V9.4357C13.4099 9.66562 13.2235 9.85201 12.9935 9.85201C12.7636 9.85201 12.5772 9.66562 12.5772 9.4357V6.62891C12.5823 6.63151 12.5875 6.634 12.5928 6.63637L13.4099 6.99951Z"
                fill="#426AF2"
              />
              <path
                opacity="0.4"
                d="M21.4426 6.129L17.6938 4.46286C17.2632 4.27149 16.7717 4.27149 16.3411 4.46286L12.5923 6.129C12.3726 6.22667 12.3726 6.53857 12.5923 6.63625L16.3411 8.30238C16.7717 8.49375 17.2632 8.49375 17.6938 8.30238L21.4426 6.63625C21.6624 6.53857 21.6624 6.22667 21.4426 6.129Z"
                fill="#426AF2"
              />
              <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.3175 15.2644H20.3488C20.9619 15.2644 21.459 14.7673 21.459 14.1542C21.459 12.9512 20.3728 11.9166 18.8157 11.4587C18.6298 11.4041 18.431 11.4628 18.2947 11.6005L17.413 12.4922C17.1957 12.7119 16.8409 12.7119 16.6236 12.4922L15.7418 11.6005C15.6056 11.4628 15.4068 11.4041 15.2209 11.4587C14.6754 11.6192 14.1877 11.8503 13.7843 12.1347C14.7454 13.0143 15.3135 14.0954 15.3175 15.2644Z"
                fill="#426AF2"
              />
              <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.7812 5.30899V6.81442C10.7812 8.68513 9.26474 10.2016 7.39403 10.2016C5.52332 10.2016 4.00681 8.68513 4.00681 6.81442V5.30899L6.36227 6.35586C7.01913 6.6478 7.76893 6.6478 8.42579 6.35586L10.7812 5.30899ZM1.8898 4.3681V8.08463C1.8898 8.43538 1.60545 8.71973 1.25469 8.71973C0.903934 8.71973 0.619589 8.43538 0.619589 8.08463V3.80273C0.627307 3.80671 0.635221 3.81051 0.643332 3.81411L1.8898 4.3681Z"
                fill="#426AF2"
              />
              <path
                d="M14.145 3.04L8.42611 0.498251C7.76924 0.206312 7.01945 0.206312 6.36258 0.498251L0.643647 3.04C0.30839 3.189 0.30839 3.66482 0.643647 3.81382L6.36258 6.35557C7.01945 6.64751 7.76924 6.64751 8.42611 6.35557L14.145 3.81382C14.4803 3.66482 14.4803 3.189 14.145 3.04Z"
                fill="#426AF2"
              />
              <path
                d="M5.44821 11.3869L6.79338 12.7471C7.12482 13.0822 7.66614 13.0822 7.99758 12.7471L9.34275 11.3869C9.55056 11.1768 9.85392 11.0872 10.1374 11.1706C12.5128 11.8691 14.1699 13.4474 14.1699 15.2825C14.1699 16.2179 13.4117 16.9762 12.4763 16.9762H2.31465C1.37929 16.9762 0.621039 16.2179 0.621039 15.2825C0.621039 13.4474 2.27812 11.8691 4.65352 11.1706C4.93704 11.0872 5.24041 11.1768 5.44821 11.3869Z"
                fill="#426AF2"
              />
            </svg>
          }
          heading="Encouraging Lifelong Learning"
          details="Elevate skills, nurture personal development, and thrive professionally through Edubanc's offerings"
        />
      </div>
    </div>
  );
};

export default WhyUs;

const ReasonsCard = ({ icon, heading, details }) => {
  return (
    <div className="max-w-[300px]">
      <div className="flex mb-1 items-center justify-center rounded-full w-[40px] h-[40px] border-2 border-[#E3E3E3] bg-[#F5F5F5]">
        {icon}
      </div>
      <h2 className="font-semibold">{heading}</h2>
      <p className="text-textGray my-3">{details}</p>
    </div>
  );
};
