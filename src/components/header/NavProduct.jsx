import React from "react";
import NavProductCard from "./NavProductCard";
import Link from "next/link";

const NavProduct = () => {
  return (
    <div className="absolute hidden left-0 top-12 z-10 bg-white p-3 group-hover:flex flex-col gap-5">
      <Link href="/products/edpay">
        <NavProductCard
          icon={
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M10.0859 5L5.91411 5L4.51303 3.39296C3.13959 1.81763 4.74185 -0.537024 6.74707 0.109848L7.67484 0.409141C7.88607 0.477283 8.11393 0.477283 8.32516 0.409141L9.25293 0.109848C11.2582 -0.537023 12.8604 1.81763 11.487 3.39296L10.0859 5Z"
                fill="#009CBD"
              />
              <path
                opacity="0.4"
                d="M1.68453 8.21035C2.4673 5.7055 4.7871 4 7.41141 4H8.58912C11.2134 4 13.5332 5.7055 14.316 8.21035L15.566 12.2104C16.7734 16.0739 13.887 20 9.83912 20H6.16141C2.11357 20 -0.77284 16.0739 0.43453 12.2104L1.68453 8.21035Z"
                fill="#009CBD"
              />
              <path
                d="M10.5 12.5C10.5 11.1193 9.38071 10 8 10C6.61929 10 5.5 11.1193 5.5 12.5C5.5 13.8807 6.61929 15 8 15C9.38071 15 10.5 13.8807 10.5 12.5Z"
                fill="#009CBD"
              />
            </svg>
          }
          heading="EdPay"
          details="Keep your child in school by accessing quicker and cheaper school fees loan."
        />
      </Link>
      <Link href="/products/certifycollegepay">
        <NavProductCard
          icon={
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.33887 7.09409V11.8263C5.33887 12.9309 6.2343 13.8263 7.33887 13.8263H12.6604C13.765 13.8263 14.6604 12.9309 14.6604 11.8263V7.09407L11.4193 8.53456C10.5155 8.93626 9.48375 8.93626 8.57992 8.53456L5.33887 7.09409ZM17.5734 5.79942V10.9132C17.5734 11.3959 17.9646 11.7871 18.4473 11.7871C18.9299 11.7871 19.3212 11.3959 19.3212 10.9132V5.02148C19.3105 5.02696 19.2996 5.03219 19.2885 5.03715L17.5734 5.79942Z"
                fill="#009CBD"
              />
              <path
                opacity="0.4"
                d="M0.711216 3.97252L8.58039 0.475106C9.48423 0.073402 10.5159 0.073402 11.4198 0.475106L19.2889 3.97252C19.7503 4.17754 19.7503 4.83226 19.2889 5.03729L11.4198 8.5347C10.5159 8.9364 9.48423 8.9364 8.58039 8.5347L0.711216 5.03729C0.249907 4.83226 0.249907 4.17754 0.711216 3.97252Z"
                fill="#009CBD"
              />
            </svg>
          }
          heading="CertifyCollegePay"
          details="Your gateway to professional certification and tertiary tuition financing"
        />
      </Link>
      <NavProductCard
        icon={
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6841 18.3065L11.7974 15.7418C11.5351 15.3853 11.3951 14.9663 11.3951 14.5377V2.39522C11.3951 1.07237 10.3228 0 8.99992 0C7.67708 0 6.6047 1.07237 6.6047 2.39522V14.5377C6.6047 14.9663 6.46473 15.3853 6.20243 15.7418L4.31579 18.3065C3.63456 19.2326 4.74939 20.3771 5.84784 19.8794L7.92875 18.9364C8.60307 18.6309 9.39677 18.6309 10.0711 18.9364L12.152 19.8794C13.2504 20.3771 14.3653 19.2326 13.6841 18.3065Z"
              fill="#009CBD"
            />
            <g opacity="0.4">
              <path
                d="M5.47903 6.06439L0.565004 8.84779C-0.455328 9.42572 -0.00348842 10.8535 1.19974 10.8535H5.40718C6.0686 10.8535 6.60478 11.3395 6.60478 11.9389V4.22363C6.60478 4.97207 6.17935 5.66772 5.47903 6.06439Z"
                fill="#009CBD"
              />
              <path
                d="M17.435 8.84779L12.521 6.06439C11.8207 5.66772 11.3952 4.97207 11.3952 4.22363V11.9389C11.3952 11.3395 11.9314 10.8535 12.5928 10.8535H16.8003C18.0035 10.8535 18.4553 9.42572 17.435 8.84779Z"
                fill="#009CBD"
              />
            </g>
          </svg>
        }
        heading="Study Abroad With Edubanc"
        details="Explore the world of education through Edubanc's foreign tuition financing options."
      />
      <NavProductCard
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
              fill="#009CBD"
            />
            <circle cx="16" cy="4" r="4" fill="#009CBD" />
          </svg>
        }
        heading="Tuition Collection and Remittance Services"
        details="Effortlessly manage tuition collection and remittance with our comprehensive services."
      />
      <NavProductCard
        icon={
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M10.765 1.70229L10 2.52422L9.23495 1.70229C7.12233 -0.567428 3.69709 -0.56743 1.58447 1.70229C-0.528155 3.972 -0.528156 7.65194 1.58447 9.92165L8.4699 17.3191C9.31495 18.227 10.685 18.227 11.5301 17.3191L18.4155 9.92165C20.5282 7.65194 20.5282 3.972 18.4155 1.70229C16.3029 -0.567429 12.8777 -0.567429 10.765 1.70229Z"
              fill="#009CBD"
            />
          </svg>
        }
        heading="Value Distribution Services"
        details="Unlock value distribution with our trusted services"
      />
      <NavProductCard
        icon={
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9 0.25C9.41421 0.25 9.75 0.585786 9.75 1V3H8.25V1C8.25 0.585786 8.58579 0.25 9 0.25ZM13 0.25C13.4142 0.25 13.75 0.585786 13.75 1V3H12.25V1C12.25 0.585786 12.5858 0.25 13 0.25ZM0.25 9C0.25 8.58579 0.585786 8.25 1 8.25H3V9.75H1C0.585786 9.75 0.25 9.41421 0.25 9ZM19 8.25H21C21.4142 8.25 21.75 8.58579 21.75 9C21.75 9.41421 21.4142 9.75 21 9.75H19V8.25ZM0.25 13C0.25 12.5858 0.585786 12.25 1 12.25H3V13.75H1C0.585786 13.75 0.25 13.4142 0.25 13ZM19 12.25H21C21.4142 12.25 21.75 12.5858 21.75 13C21.75 13.4142 21.4142 13.75 21 13.75H19V12.25ZM9.75 19V21C9.75 21.4142 9.41421 21.75 9 21.75C8.58579 21.75 8.25 21.4142 8.25 21V19H9.75ZM13.75 19V21C13.75 21.4142 13.4142 21.75 13 21.75C12.5858 21.75 12.25 21.4142 12.25 21V19H13.75Z"
              fill="#009CBD"
            />
            <path
              opacity="0.4"
              d="M3 7C3 4.79086 4.79086 3 7 3H15C17.2091 3 19 4.79086 19 7V15C19 17.2091 17.2091 19 15 19H7C4.79086 19 3 17.2091 3 15V7Z"
              fill="#009CBD"
            />
            <rect x="8" y="8" width="6" height="6" rx="2" fill="#009CBD" />
          </svg>
        }
        soon
        heading="Lending API distribution services"
        details="Experience the power of lending APIs with our distribution services"
      />
    </div>
  );
};

export default NavProduct;
