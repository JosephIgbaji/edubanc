import React from "react";
import QuestionCard from "@/components/QuestionCard";
import faqs from "@/components/faqs";

const EdpayFAQ = () => {
  return (
    <div className="mt-0 flex flex-col items-center">
      <div>
        <h2 className="text-primary text-4xl font-semibold mb-10 text-center">
          Have some questions you&apos;d like answered?
          <br />
          Here are the answers to some frequently asked
        </h2>
      </div>
      <div className="flex lg:gap-10 sm:flex-row flex-col ">
        <div>
          <div>
            {faqs
              .filter((faq) => faq.category === "edpay")
              .map((ques, index) => (
                <QuestionCard
                  key={index}
                  que={ques.question}
                  ans={ques.answer}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdpayFAQ;
