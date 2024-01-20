"use client";
import React, { useState } from "react";
import Link from "next/link";
import ButtonPrimary from "../ButtonPrimary";
import QuestionCard from "../QuestionCard";

const Questions = () => {
  const faqs = [
    {
      question: "What is Edubanc?",
      answer:
        "Edubanc is an Edtech startup focused on solving basic human capital problems as regards access to quality and affordable education.",
    },
    {
      question: "What are the objectives of Edubance?",
      answer:
        "Edubanc is an Edtech startup focused on solving basic human capital problems as regards access to quality and affordable education.",
    },
    {
      question: "What is Edubanc offering?",
      answer:
        "Edubanc is an Edtech startup focused on solving basic human capital problems as regards access to quality and affordable education.",
    },
    {
      question: "What is Edubanc?",
      answer:
        "Edubanc is an Edtech startup focused on solving basic human capital problems as regards access to quality and affordable education.",
    },
    {
      question: "What is Edubanc?",
      answer:
        "Edubanc is an Edtech startup focused on solving basic human capital problems as regards access to quality and affordable education.",
    },
  ];

  return (
    <div className="mt-32 flex justify-between md:flex-row flex-col">
      <div className="w-[350px] sm:w-[500px] lg:w-[600px] mb-5">
        <h2 className="text-3xl sm:text-left font-bold mb-1">
          Have some questions you&apos;d like answered? Here are the answers to
          some frequently asked
        </h2>
        <Link href="/faqs">
          <ButtonPrimary name="View more frequently asked questions" />
        </Link>
      </div>
      <div>
        {faqs.map((ques, index) => (
          <QuestionCard key={index} que={ques.question} ans={ques.answer} />
        ))}
      </div>
    </div>
  );
};

export default Questions;
