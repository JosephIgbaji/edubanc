"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HeroCarousel = () => {
  return (
    <div>
      <Carousel
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={6000}
      >
        <Link href="/products/edpay">
          <div>
            <Image
              src="/carousel1.png"
              layout="responsive"
              width={700}
              height={300}
              alt="carousels"
            />
            {/* <p className="legend">Legend 1</p> */}
          </div>
        </Link>
        <Link href="/products/certifycollegepay">
          <div>
            <Image
              src="/carousel2.png"
              layout="responsive"
              width={700}
              height={300}
              alt="carousels"
            />
            {/* <p className="legend">Legend 2</p> */}
          </div>
        </Link>
        <Link href="/products/tuitionfinance">
          <div>
            <Image
              src="/carousel3.png"
              layout="responsive"
              width={700}
              height={300}
              alt="carousels"
            />
            {/* <p className="legend">Legend 3</p> */}
          </div>
        </Link>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
