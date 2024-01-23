import React from "react";
import Link from "next/link";
import Image from "next/image";
import ButtonPrimary from "../ButtonPrimary";

const ProductHero = ({
  showtitle,
  image,
  herotitle,
  linkTo,
  heading,
  details,
}) => {
  return (
    <div className="flex justify-between md:flex-row flex-col items-center mb-10 md:gap-[80px]">
      <div className="w-[320px] sm:w-[400px] md:w-[500px] mb-10 md:mb-0">
        {showtitle && (
          <span className="p-2 rounded-lg mb-5 text-secondaryGreen bg-secondaryGreen bg-opacity-10">
            {herotitle}
          </span>
        )}

        <h2 className="text-3xl md:text-xl lg:text-3xl  font-bold mb-3 mt-5">
          {heading}
        </h2>

        <p className="text-sm md:text-lg mb-5 text-textGray">{details}</p>
        <Link href={linkTo}>
          <ButtonPrimary name="Get Started" />
        </Link>
      </div>
      <div className="w-[300px] rounded-lg md:w-[500px] h-[300px] md:h-[400px] overflow-hidden">
        <Image
          className="rounded-lg"
          src={image}
          width={600}
          height={500}
          alt="icon-overlay"
        />
      </div>
    </div>
  );
};

export default ProductHero;
