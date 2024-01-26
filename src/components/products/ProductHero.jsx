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
  color,
  details,
}) => {
  return (
    <div className="flex justify-between lg:flex-row flex-col items-center mb-10 md:gap-[80px]">
      <div className="min-w-[300px  md:max-w-[500px] mb-10 lg:mb-0">
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
          <ButtonPrimary name="Get Started" color={color} />
        </Link>
      </div>
      <div className="min-w-[300px] rounded-lg md:w-[500px] h-[300px] md:h-[400px] overflow-hidden">
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
