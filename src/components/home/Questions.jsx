"use client";
import React from "react";
import Link from "next/link";
import ButtonPrimary from "../ButtonPrimary";
import QuestionCard from "../QuestionCard";
import faqs from "../faqs";

const Questions = () => {
  return (
    <div className="mt-32 flex justify-between md:flex-row flex-col">
      <div className="w-[300px] md:w-[350px] sm:w-[500px] lg:w-[600px] mb-5">
        <h2 className="text-xl md:text-3xl sm:text-left font-bold mb-1">
          Do you have questions that need answers? Here are responses to
          commonly asked questions.
        </h2>
        <Link href="/faqs">
          <ButtonPrimary name="View more frequently asked questions" />
        </Link>
      </div>
      <div>
        {faqs
          .filter(
            (ques) => ques.category === "edubanc" && faqs.indexOf(ques) < 5
          )
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
  );
};

export default Questions;
