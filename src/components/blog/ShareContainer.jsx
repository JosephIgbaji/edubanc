import React, { useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

const ShareContainer = ({ url, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Get the current page URL
    // const currentPageUrl = window.location.href;

    // Use the Clipboard API to copy the URL to the clipboard
    navigator.clipboard
      .writeText(url)
      .then(() => {
        // Set copied state to true to show success message
        setCopied(true);

        // Reset copied state after 2 seconds
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
      });
  };

  return (
    <div className="flex items-center justify-between text-xs">
      <p className="">Share this post</p>
      <div className="flex items-center gap-5">
        <div
          onClick={handleCopy}
          className="p-2 rounded-lg cursor-pointer border-[1px] gap-2 flex items-center justify-between"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1554_5299)">
              <path
                d="M4.16797 12.4998H3.33464C2.89261 12.4998 2.46868 12.3242 2.15612 12.0117C1.84356 11.6991 1.66797 11.2752 1.66797 10.8332V3.33317C1.66797 2.89114 1.84356 2.46722 2.15612 2.15466C2.46868 1.8421 2.89261 1.6665 3.33464 1.6665H10.8346C11.2767 1.6665 11.7006 1.8421 12.0131 2.15466C12.3257 2.46722 12.5013 2.89114 12.5013 3.33317V4.1665M9.16797 7.49984H16.668C17.5884 7.49984 18.3346 8.24603 18.3346 9.1665V16.6665C18.3346 17.587 17.5884 18.3332 16.668 18.3332H9.16797C8.24749 18.3332 7.5013 17.587 7.5013 16.6665V9.1665C7.5013 8.24603 8.24749 7.49984 9.16797 7.49984Z"
                stroke="#344054"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1554_5299">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>{copied ? "copied" : "Copy link"}</p>
        </div>
        <div>
          {/* Facebook Share Button */}

          {/* Twitter Share Button */}

          {/* LinkedIn Share Button */}
        </div>
        <div className="p-2 rounded-lg border-[1px] items-center justify-between">
          <TwitterShareButton url={url} title={title}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.2918 18.1251C13.8371 18.1251 17.9652 11.8724 17.9652 6.45167C17.9652 6.27589 17.9613 6.0962 17.9535 5.92042C18.7566 5.33967 19.4496 4.62033 20 3.7962C19.2521 4.12896 18.458 4.34627 17.6449 4.44074C18.5011 3.92755 19.1421 3.12135 19.4492 2.17159C18.6438 2.64892 17.763 2.98563 16.8445 3.1673C16.2257 2.50976 15.4075 2.07439 14.5164 1.9285C13.6253 1.78261 12.711 1.93433 11.9148 2.3602C11.1186 2.78607 10.4848 3.46238 10.1115 4.28455C9.73825 5.10672 9.64619 6.02897 9.84961 6.9087C8.21874 6.82686 6.62328 6.40321 5.16665 5.6652C3.71002 4.9272 2.42474 3.89132 1.39414 2.62472C0.870333 3.52782 0.710047 4.59649 0.945859 5.61353C1.18167 6.63057 1.79589 7.51966 2.66367 8.10011C2.01219 8.07943 1.37498 7.90402 0.804688 7.58839V7.63917C0.804104 8.58691 1.13175 9.50561 1.73192 10.2391C2.3321 10.9726 3.16777 11.4756 4.09687 11.6626C3.49338 11.8277 2.85999 11.8518 2.2457 11.7329C2.50788 12.548 3.01798 13.2609 3.70481 13.7721C4.39164 14.2833 5.22093 14.5673 6.07695 14.5845C4.62369 15.726 2.82848 16.3452 0.980469 16.3423C0.652739 16.3418 0.325333 16.3217 0 16.2821C1.87738 17.4866 4.06128 18.1263 6.2918 18.1251Z"
                fill="#98A2B3"
              />
            </svg>
          </TwitterShareButton>
        </div>
        <div className="p-2 rounded-lg border-[1px] items-center justify-between">
          <FacebookShareButton url={url} quote={title}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1554_116)">
                <path
                  d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                  fill="#98A2B3"
                />
              </g>
              <defs>
                <clipPath id="clip0_1554_116">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </FacebookShareButton>
        </div>
        <div className="p-2 rounded-lg border-[1px] items-center justify-between">
          <LinkedinShareButton url={url} title={title}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                fill="#98A2B3"
              />
            </svg>
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
};

export default ShareContainer;
