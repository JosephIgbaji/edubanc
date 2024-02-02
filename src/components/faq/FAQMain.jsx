"use client";
import React, { useState } from "react";
import Link from "next/link";
import ButtonPrimary from "../ButtonPrimary";
import QuestionCard from "../QuestionCard";
import faqs from "../faqs";

const FAQMain = () => {
  const [category, setCategory] = useState("edubanc");

  return (
    <div className="mt-0 flex flex-col items-center">
      <div>
        <h2 className="text-primary text-4xl font-semibold mb-10 md:text-center">
          Have some questions you&apos;d like answered?
          <br />
          Here are the answers to some frequently asked
        </h2>
      </div>
      <div className="flex lg:gap-10 md:flex-row flex-col ">
        <div className="w-[300px] sm:max-w-[400px] text-xs md:text-lg lg:w-80 list-none flex sm:flex-col gap-2 sm:gap-6 mb-5 md:mb-0">
          <li
            className="cursor-pointer p-2 rounded-lg"
            onClick={() => setCategory("edubanc")}
            style={category === "edubanc" ? CategoryStyle : {}}
          >
            Edubanc
          </li>
          <li
            className="cursor-pointer p-2 rounded-lg"
            onClick={() => setCategory("edpay")}
            style={category === "edpay" ? CategoryStyle : {}}
          >
            Edpay
          </li>
          <li
            className="cursor-pointer p-2 rounded-lg"
            onClick={() => setCategory("nexford")}
            style={category === "nexford" ? CategoryStyle : {}}
          >
            Nexford
          </li>
          <li
            className="cursor-pointer p-2 rounded-lg"
            onClick={() => setCategory("tti")}
            style={category === "tti" ? CategoryStyle : {}}
          >
            TTI
          </li>
          <li
            className="cursor-pointer p-2 rounded-lg"
            onClick={() => setCategory("schoolable")}
            style={category === "schoolable" ? CategoryStyle : {}}
          >
            Schoolable
          </li>
          {/* <li
            className="cursor-pointer p-2 rounded-lg"
            onClick={() => setCategory("lbs")}
            style={category === "lbs" ? CategoryStyle : {}}
          >
            LBS
          </li> */}
        </div>
        <div>
          <div>
            {faqs
              .filter((faq) => faq.category === category)
              .map((ques, index) => (
                <QuestionCard
                  key={index}
                  que={ques.question}
                  ans={ques.answer}
                  lists={ques.lists}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQMain;

const CategoryStyle = {
  backgroundColor: "#a0b3ed",
  // padding: "5px 14px",
  color: "#426AF2",
  // borderRadius: "5px",
};
