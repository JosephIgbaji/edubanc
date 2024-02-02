"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Josefin_Sans } from "next/font/google";

const Payment = () => {
  const [paymentOption, setPaymentOption] = useState("card");

  return (
    // <div className="flex gap-10 flex-col items-center lg:flex-row justify-between">
    <div className="flex flex-col items-center gap-10 lg:gap-32 lg:grid grid-cols-2 lg:items-center lg:justify-between">
      <div className="min-w-[300px] sm:w-[330px] md:w-[440px] lg:max-w-[500px] bg-primary rounded-xl p-4">
        <section className="text-gray-200 text-xs flex items-center justify-around">
          <div
            style={paymentOption === "card" ? style : {}}
            className="cursor-pointer flex gap-2 items-center"
          >
            <svg
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M16.25 -1.74846e-07C18.4591 -7.8281e-08 20.25 1.79086 20.25 4L20.25 14C20.25 16.2091 18.4591 18 16.25 18L4.25 18C2.04086 18 0.249999 16.2091 0.249999 14L0.25 4C0.25 1.79086 2.04086 -7.95947e-07 4.25 -6.99382e-07L16.25 -1.74846e-07Z"
                fill="white"
              />
              <circle cx="4.25" cy="14" r="1" fill="white" />
              <path d="M0.25 4L20.25 4L20.25 8L0.25 8L0.25 4Z" fill="white" />
            </svg>
            <p onClick={() => setPaymentOption("card")}>Donate with card</p>
          </div>
          <div
            className="cursor-pointer"
            style={paymentOption === "bank" ? style : {}}
          >
            <p onClick={() => setPaymentOption("bank")}>
              Donate via bank transfer
            </p>
          </div>
        </section>
        <div>
          {paymentOption === "card" ? <CardPayment /> : <BankTransfer />}
        </div>
      </div>
      <div className="self-auto">
        <Image
          className="rounded-xl"
          src="/donate-payment.png"
          width={500}
          height={100}
          // layout="fill"
          alt="alt"
        />
      </div>
    </div>
  );
};

export default Payment;

const CardPayment = () => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();

    if (fullName && email && amount) {
      // console.log(process.env.SECRET_KEY);
      fetch("https://api.paystack.co/transaction/initialize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer sk_test_8594bc0cbb049e449d98a5cc83bee668c95c8a4e",
        },
        body: JSON.stringify({
          email,
          amount: amount * 100,
          callback_url: "https://edubanc-malenxe.vercel.app",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          window.location.href = data.data.authorization_url;
        });

      // console.log(fullName, email, amount);
      setFullname("");
      setEmail("");
      setAmount("");
    }
  };

  return (
    <div className="mt-5">
      <form onSubmit={handlePayment}>
        <div className="mb-5 flex flex-col text-gray-200 text-sm">
          <label>Full Name</label>
          <input
            className="rounded-lg p-3 bg-blue-600"
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div className="mb-5 flex flex-col text-gray-200 text-sm">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg p-3 bg-blue-600"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-5 flex flex-col text-gray-200 text-sm">
          <label>Amount</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="rounded-lg p-3 bg-blue-600"
            type="text"
            placeholder="Enter amount you want to donate"
          />
        </div>
        <button className="bg-black hover:cursor-pointer rounded-lg p-4 text-white text-center w-full">
          Donate with card
        </button>
      </form>
    </div>
  );
};

const BankTransfer = () => {
  return (
    <div className="mt-5 text-gray-200 pb-5">
      <p className="text-sm rounded-lg p-4 mb-3 bg-blue-600">
        To initiate a donation via transfer, kindly use the information below.
        Thank you!
      </p>
      <div className="rounded-lg p-3 bg-blue-600">
        <div className="flex gap-16 items-center mb-5">
          <p className="w-[150px] text-sm">Account Name</p>
          <h3 className="font-semibold text-sm">Edubanc Donations</h3>
        </div>
        <div className="flex gap-16 items-center mb-5">
          <p className="w-[150px] text-sm">Account Number</p>
          <h3 className="font-semibold text-sm">0076389941</h3>
        </div>
        <div className="flex gap-16 items-center">
          <p className="w-[150px] text-sm">Bank Name</p>
          <h3 className="font-semibold text-sm">Sterlink Bank</h3>
        </div>
      </div>
    </div>
  );
};

//  px-4 py-2 bg-blue-600 rounded lg
const style = {
  backgroundColor: "#0000000d",
  borderRadius: "6px",
  padding: "10px 14px",
};
