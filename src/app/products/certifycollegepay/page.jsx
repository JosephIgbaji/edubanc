import React from "react";
import EdServices from "../edpay/EdServices";
import Image from "next/image";
import ReadyCard from "@/components/ReadyCard";
import CertifyCareer from "@/components/products/CertifyCareer";
import ProductHero from "@/components/products/ProductHero";

const CertifyCollegePay = () => {
  return (
    <div className="pt-20 pb-32 px-5 sm:px-32 mx-auto bg-[#F9FAFB]">
      <ProductHero
        color="#297373"
        linkTo="#"
        showtitle
        image="/collegehero.png"
        herotitle="CertifyCollegePay"
        heading="Empower your education with professional certification and tertiary tuition financing"
        details="CertifyCollegePay is your gateway to professional certification and tertiary tuition financing. Whether you're pursuing education at institutions like Decagon or others, we provide the financial solutions you need to reach your academic and career goals."
      />
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-32">
        <ReadyCard
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
                d="M1.68355 8.21035C2.46632 5.7055 4.78612 4 7.41043 4H8.58814C11.2125 4 13.5323 5.7055 14.315 8.21035L15.565 12.2104C16.7724 16.0739 13.886 20 9.83814 20H6.16043C2.11259 20 -0.773816 16.0739 0.433553 12.2104L1.68355 8.21035Z"
                fill="#009CBD"
              />
              <path
                d="M10.5 12.5C10.5 11.1193 9.38071 10 8 10C6.61929 10 5.5 11.1193 5.5 12.5C5.5 13.8807 6.61929 15 8 15C9.38071 15 10.5 13.8807 10.5 12.5Z"
                fill="#009CBD"
              />
            </svg>
          }
          heading="Seamless Financing"
          details="Gain access to hassle-free financing for professional certification and tertiary education"
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
                d="M9.17375 19.6237L1.00417 15.9102C0.222569 15.555 0.22257 14.4448 1.00417 14.0895L9.17375 10.376C9.6996 10.137 10.3031 10.137 10.829 10.376L18.9986 14.0895C19.7801 14.4448 19.7801 15.555 18.9986 15.9102L10.829 19.6237C10.3031 19.8627 9.6996 19.8627 9.17375 19.6237Z"
                fill="#009CBD"
              />
              <path
                d="M9.17375 14.6237L1.00417 10.9102C0.222569 10.555 0.22257 9.44476 1.00417 9.08949L9.17375 5.37604C9.6996 5.13702 10.3031 5.13702 10.829 5.37604L18.9986 9.08949C19.7801 9.44476 19.7801 10.555 18.9986 10.9102L10.829 14.6237C10.3031 14.8627 9.6996 14.8627 9.17375 14.6237Z"
                fill="#009CBD"
              />
              <path
                opacity="0.4"
                d="M9.17375 9.62368L1.00417 5.91023C0.222569 5.55496 0.22257 4.44476 1.00417 4.08949L9.17375 0.376044C9.6996 0.137021 10.3031 0.137022 10.829 0.376045L18.9986 4.08949C19.7801 4.44476 19.7801 5.55496 18.9986 5.91023L10.829 9.62368C10.3031 9.8627 9.6996 9.8627 9.17375 9.62368Z"
                fill="#009CBD"
              />
            </svg>
          }
          heading="Customized solutions"
          details="Tailored financial solutions designed to meet your specific academic and career goals"
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
              <circle opacity="0.4" cx="10" cy="10" r="10" fill="#009CBD" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.55663 6.07157C7.71846 5.14207 7.93514 4.30662 8.19267 3.5984C8.48592 2.79196 8.82002 2.18426 9.1589 1.7901C9.49955 1.39387 9.78597 1.27659 9.99997 1.27659C10.214 1.27659 10.5004 1.39387 10.841 1.7901C11.1799 2.18426 11.514 2.79196 11.8073 3.5984C12.0648 4.30662 12.2815 5.14207 12.4433 6.07157C11.6604 5.99686 10.8415 5.95743 9.99997 5.95743C9.15849 5.95743 8.33955 5.99686 7.55663 6.07157ZM6.23593 6.23593C6.41375 5.08809 6.67134 4.04654 6.99294 3.16213C7.31574 2.27444 7.71519 1.51116 8.19088 0.957863C8.66478 0.406642 9.27392 0 9.99997 0C10.726 0 11.3352 0.406642 11.8091 0.957863C12.2848 1.51116 12.6842 2.27444 13.007 3.16213C13.3286 4.04654 13.5862 5.08809 13.764 6.23593C14.9119 6.41375 15.9534 6.67134 16.8378 6.99294C17.7255 7.31574 18.4888 7.71519 19.0421 8.19088C19.5933 8.66478 19.9999 9.27392 19.9999 9.99997C19.9999 10.726 19.5933 11.3352 19.0421 11.8091C18.4888 12.2848 17.7255 12.6842 16.8378 13.007C15.9534 13.3286 14.9119 13.5862 13.764 13.764C13.5862 14.9119 13.3286 15.9534 13.007 16.8378C12.6842 17.7255 12.2848 18.4888 11.8091 19.0421C11.3352 19.5933 10.726 19.9999 9.99997 19.9999C9.27392 19.9999 8.66478 19.5933 8.19088 19.0421C7.71519 18.4888 7.31574 17.7255 6.99294 16.8378C6.67134 15.9534 6.41375 14.9119 6.23593 13.764C5.08809 13.5862 4.04654 13.3286 3.16213 13.007C2.27444 12.6842 1.51115 12.2848 0.957863 11.8091C0.406642 11.3352 0 10.726 0 9.99997C0 9.27392 0.406642 8.66478 0.957863 8.19087C1.51115 7.71519 2.27444 7.31574 3.16213 6.99294C4.04654 6.67134 5.08809 6.41375 6.23593 6.23593ZM6.07157 12.4433C5.14206 12.2815 4.30662 12.0648 3.5984 11.8073C2.79196 11.514 2.18426 11.1799 1.7901 10.841C1.39387 10.5004 1.27659 10.214 1.27659 9.99997C1.27659 9.78596 1.39387 9.49955 1.7901 9.1589C2.18426 8.82002 2.79196 8.48592 3.5984 8.19267C4.30662 7.93514 5.14207 7.71846 6.07157 7.55663C5.99686 8.33955 5.95743 9.15849 5.95743 9.99997C5.95743 10.8415 5.99686 11.6604 6.07157 12.4433ZM7.3735 12.6264C7.28311 11.7984 7.23402 10.9167 7.23402 9.99997C7.23402 9.08323 7.28311 8.20159 7.3735 7.3735C8.20159 7.28311 9.08323 7.23402 9.99997 7.23402C10.9167 7.23402 11.7984 7.28311 12.6264 7.3735C12.7168 8.20159 12.7659 9.08323 12.7659 9.99997C12.7659 10.9167 12.7168 11.7984 12.6264 12.6264C11.7984 12.7168 10.9167 12.7659 9.99997 12.7659C9.08323 12.7659 8.20159 12.7168 7.3735 12.6264ZM7.55663 13.9284C7.71846 14.8579 7.93514 15.6933 8.19267 16.4015C8.48592 17.208 8.82002 17.8157 9.1589 18.2098C9.49955 18.6061 9.78597 18.7234 9.99997 18.7234C10.214 18.7234 10.5004 18.6061 10.841 18.2098C11.1799 17.8157 11.514 17.208 11.8073 16.4015C12.0648 15.6933 12.2815 14.8579 12.4433 13.9284C11.6604 14.0031 10.8415 14.0425 9.99997 14.0425C9.15849 14.0425 8.33955 14.0031 7.55663 13.9284ZM13.9284 12.4433C14.8579 12.2815 15.6933 12.0648 16.4015 11.8073C17.208 11.514 17.8157 11.1799 18.2098 10.841C18.6061 10.5004 18.7234 10.214 18.7234 9.99997C18.7234 9.78597 18.6061 9.49955 18.2098 9.1589C17.8157 8.82002 17.208 8.48592 16.4015 8.19267C15.6933 7.93514 14.8579 7.71846 13.9284 7.55663C14.0031 8.33955 14.0425 9.15849 14.0425 9.99997C14.0425 10.8415 14.0031 11.6604 13.9284 12.4433Z"
                fill="#009CBD"
              />
            </svg>
          }
          heading="Diverse Educational Partnerships"
          details="Connect with a network of educational institutions, including Decagon, to enrich your learning journey"
        />
      </div>
      <CertifyCareer />
      <ProductHero
        color="#297373"
        linkTo="#"
        image="/collegerightimage.png"
        herotitle=""
        heading="Take the First Step Toward Your Future"
        details="Ready to transform your educational and career journey? Join CertifyCollegePay today and unlock a world of possibilities. Don't let financial barriers hold you back. Start your application now and embrace a future filled with opportunities."
      />
      <EdServices />
      <div className="w-full mt-28 flex items-center justify-center">
        <Image
          src="/mobileSoon.png"
          alt="mobile app coming soon"
          width={900}
          height={100}
        />
      </div>
    </div>
  );
};

export default CertifyCollegePay;
