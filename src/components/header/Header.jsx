"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ButtonPrimary from "../ButtonPrimary";
import NavProductMobile from "./NavProductMobile";
import NavProduct from "./NavProduct";
import NavServices from "./NavServices";
import NavServicesMobile from "./NavServicesMobile";

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const currentRoute = usePathname();
  const linkStyle =
    "p-3 hover:text-primary hover:bg-primary cursor-pointer rounded-lg hover:bg-opacity-20 ";
  const activeStyle = linkStyle + "bg-primary bg-opacity-20 text-primary";
  return (
    <header className="md:px-32 px-5 py-5 relative">
      <nav className="flex items-center justify-between">
        <div>
          <Link onClick={() => setShowMobileNav(false)} href="/">
            <Image src="/logo.png" width={117} height={49} alt="logo" />
          </Link>
        </div>
        <div className="hidden md:flex gap-5 text-black text-opacity-50">
          <Link
            href="/"
            className={currentRoute === "/" ? activeStyle : linkStyle}
          >
            Home
          </Link>
          <Link
            className={currentRoute === "/about" ? activeStyle : linkStyle}
            href="/about"
          >
            About Us
          </Link>
          <div className="relative group">
            <NavProduct />
            <div
              className={
                currentRoute === "/products/edpay" ||
                currentRoute === "/products/certifycollegepay" ||
                currentRoute === "/products/tuitionfinance"
                  ? activeStyle + " flex items-center gap-2"
                  : linkStyle + " flex items-center  gap-2"
              }
              href=""
            >
              Products {""}
              <svg
                width="12"
                height="6"
                viewBox="0 0 12 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.414376 0.531506C0.673133 0.20806 1.1451 0.155619 1.46855 0.414376L6.00003 4.03956L10.5315 0.414376C10.855 0.155619 11.3269 0.20806 11.5857 0.531506C11.8444 0.854953 11.792 1.32692 11.4685 1.58568L6.46855 5.58568C6.19464 5.80481 5.80542 5.80481 5.53151 5.58568L0.531506 1.58568C0.20806 1.32692 0.155619 0.854953 0.414376 0.531506Z"
                  fill="black"
                  fillOpacity="0.5"
                />
              </svg>
            </div>
          </div>
          <div className="relative group">
            <NavServices />
            <div
              className={
                currentRoute === "/services/" ||
                currentRoute === "/services/" ||
                currentRoute === "/services/"
                  ? activeStyle + " flex items-center gap-2"
                  : linkStyle + " flex items-center  gap-2"
              }
              href=""
            >
              Services {""}
              <svg
                width="12"
                height="6"
                viewBox="0 0 12 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.414376 0.531506C0.673133 0.20806 1.1451 0.155619 1.46855 0.414376L6.00003 4.03956L10.5315 0.414376C10.855 0.155619 11.3269 0.20806 11.5857 0.531506C11.8444 0.854953 11.792 1.32692 11.4685 1.58568L6.46855 5.58568C6.19464 5.80481 5.80542 5.80481 5.53151 5.58568L0.531506 1.58568C0.20806 1.32692 0.155619 0.854953 0.414376 0.531506Z"
                  fill="black"
                  fillOpacity="0.5"
                />
              </svg>
            </div>
          </div>
          <Link
            className={currentRoute === "/blog" ? activeStyle : linkStyle}
            href="/blog"
          >
            Blog
          </Link>
        </div>
        <div className="hidden md:block">
          <Link href="/donate">
            <ButtonPrimary name="Donate" />
          </Link>
        </div>
        <div className="md:hidden">
          <svg
            onClick={() => setShowMobileNav(!showMobileNav)}
            className="cursor-pointer"
            width="32"
            height="30"
            viewBox="0 0 32 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.3334 24.1668C29.9754 24.1671 30.5927 24.4145 31.0574 24.8575C31.522 25.3006 31.7984 25.9054 31.8293 26.5467C31.8601 27.188 31.6431 27.8165 31.2231 28.3022C30.8032 28.7878 30.2124 29.0932 29.5734 29.1552L29.3334 29.1668H2.66675C2.02472 29.1665 1.40742 28.9192 0.94277 28.4761C0.478117 28.0331 0.201728 27.4283 0.170874 26.787C0.140021 26.1457 0.357068 25.5171 0.77704 25.0315C1.19701 24.5459 1.78772 24.2404 2.42675 24.1785L2.66675 24.1668H29.3334ZM29.3334 12.5002C29.9965 12.5002 30.6323 12.7636 31.1012 13.2324C31.57 13.7012 31.8334 14.3371 31.8334 15.0002C31.8334 15.6632 31.57 16.2991 31.1012 16.7679C30.6323 17.2368 29.9965 17.5002 29.3334 17.5002H2.66675C2.00371 17.5002 1.36782 17.2368 0.898981 16.7679C0.43014 16.2991 0.166748 15.6632 0.166748 15.0002C0.166748 14.3371 0.43014 13.7012 0.898981 13.2324C1.36782 12.7636 2.00371 12.5002 2.66675 12.5002H29.3334ZM29.3334 0.833496C29.9965 0.833496 30.6323 1.09689 31.1012 1.56573C31.57 2.03457 31.8334 2.67045 31.8334 3.3335C31.8334 3.99654 31.57 4.63242 31.1012 5.10126C30.6323 5.5701 29.9965 5.8335 29.3334 5.8335H2.66675C2.00371 5.8335 1.36782 5.5701 0.898981 5.10126C0.43014 4.63242 0.166748 3.99654 0.166748 3.3335C0.166748 2.67045 0.43014 2.03457 0.898981 1.56573C1.36782 1.09689 2.00371 0.833496 2.66675 0.833496H29.3334Z"
              fill="#426AF2"
            />
          </svg>
        </div>
      </nav>
      {showMobileNav && (
        <div className="flex flex-col top-20 left-0 absolute px-8 md:hidden bg-white z-10 w-full">
          {/* <div className="md:flex gap-5 text-black text-opacity-50"> */}
          <Link
            onClick={() => setShowMobileNav(false)}
            href="/"
            className="p-3 hover:text-primary active:text-primary focus:text-primary hover:bg-primary rounded-lg hover:bg-opacity-20 active:bg-opacity-20 focus:bg-opacity-20 active:bg-primary focus:bg-primary"
          >
            Home
          </Link>
          <Link
            onClick={() => setShowMobileNav(false)}
            className="p-3 hover:text-primary active:text-primary focus:text-primary hover:bg-primary rounded-lg hover:bg-opacity-20 active:bg-opacity-20 focus:bg-opacity-20 active:bg-primary focus:bg-primary"
            href="/about"
          >
            About Us
          </Link>
          <div className=" group">
            <div className="absolute right-0 top-0">
              <NavProductMobile onclick={() => setShowMobileNav(false)} />
            </div>
            <div
              className="p-3 cursor-pointer flex items-center gap-2 hover:text-primary active:text-primary focus:text-primary hover:bg-primary rounded-lg hover:bg-opacity-20 active:bg-opacity-20 focus:bg-opacity-20 active:bg-primary focus:bg-primary"
              href=""
            >
              Products {""}
              <svg
                width="12"
                height="6"
                viewBox="0 0 12 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.414376 0.531506C0.673133 0.20806 1.1451 0.155619 1.46855 0.414376L6.00003 4.03956L10.5315 0.414376C10.855 0.155619 11.3269 0.20806 11.5857 0.531506C11.8444 0.854953 11.792 1.32692 11.4685 1.58568L6.46855 5.58568C6.19464 5.80481 5.80542 5.80481 5.53151 5.58568L0.531506 1.58568C0.20806 1.32692 0.155619 0.854953 0.414376 0.531506Z"
                  fill="black"
                  fillOpacity="0.5"
                />
              </svg>
            </div>
          </div>
          <div className="group">
            <div className="absolute top-0 right-0">
              <NavServicesMobile onclick={() => setShowMobileNav(false)} />
            </div>
            <div
              className="p-3 cursor-pointer flex items-center gap-2 hover:text-primary active:text-primary focus:text-primary hover:bg-primary rounded-lg hover:bg-opacity-20 active:bg-opacity-20 focus:bg-opacity-20 active:bg-primary focus:bg-primary"
              href=""
            >
              Services {""}
              <svg
                width="12"
                height="6"
                viewBox="0 0 12 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.414376 0.531506C0.673133 0.20806 1.1451 0.155619 1.46855 0.414376L6.00003 4.03956L10.5315 0.414376C10.855 0.155619 11.3269 0.20806 11.5857 0.531506C11.8444 0.854953 11.792 1.32692 11.4685 1.58568L6.46855 5.58568C6.19464 5.80481 5.80542 5.80481 5.53151 5.58568L0.531506 1.58568C0.20806 1.32692 0.155619 0.854953 0.414376 0.531506Z"
                  fill="black"
                  fillOpacity="0.5"
                />
              </svg>
            </div>
          </div>
          <Link
            onClick={() => setShowMobileNav(false)}
            className="p-3 hover:text-primary active:text-primary focus:text-primary hover:bg-primary rounded-lg hover:bg-opacity-20 active:bg-opacity-20 focus:bg-opacity-20 active:bg-primary focus:bg-primary"
            href="/blog"
          >
            Blog
          </Link>
          {/* </div> */}
          <div className="">
            <Link href="/donate" onClick={() => setShowMobileNav(false)}>
              <button className="bg-primary p-3 rounded-lg mx-3 text-white w-full">
                Donate
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
