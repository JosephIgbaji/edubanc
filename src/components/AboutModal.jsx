"use client";
import React, { useState } from "react";
import Alert from "./admin/Alert";

const AboutModal = ({ onclick }) => {
  const [channel, setChannel] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    onclick();
    const response = await fetch("https://formspree.io/f/xqkrergr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ channel }),
    });

    if (response.ok) {
      setMessage("Form Submitted");
    } else {
      setMessage("Submission failed");
    }
  };

  const closeAlert = () => {
    setMessage("");
  };

  return (
    <div className="sticky bg-gray-700 bg-opacity-30 w-[100%] h-screen flex items-center justify-center">
      <div className="bg-white relative mx-auto rounded-3xl border p-3 md:p-5 pt-16 max-w-screen-sm">
        <p
          className="bg-gray-700 h-5 w-5 absolute top-1 right-5 rounded-full text-white text-lg flex items-center justify-center cursor-pointer"
          onClick={onclick}
        >
          <span>x</span>
        </p>
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold mb-2">
            How did you hear about Edubanc?
          </h2>
          <p>Tell us how you heard about us</p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex md:justify-between flex-col md:flex-row gap-5 mb-5">
              <div className="  mb-5 md:mb-0">
                <fieldset className="flex flex-col gap-5">
                  <div className="flex gap-3">
                    <input
                      type="radio"
                      name="hear-about-us"
                      onClick={() => setChannel("Search Engine")}
                    />
                    <label>Search Engine</label>
                  </div>
                  <div className="flex gap-3">
                    <input
                      type="radio"
                      name="hear-about-us"
                      onClick={() => setChannel("Twitter")}
                    />
                    <label>Twitter</label>
                  </div>
                  <div className="flex gap-3">
                    <input
                      type="radio"
                      name="hear-about-us"
                      onClick={() => setChannel("Instagram")}
                    />
                    <label>Instagram</label>
                  </div>
                  <div className="flex gap-3">
                    <input
                      type="radio"
                      name="hear-about-us"
                      onClick={() => setChannel("LinkedIn")}
                    />
                    <label>LinkedIn</label>
                  </div>
                  <div className="flex gap-3">
                    <input
                      type="radio"
                      name="hear-about-us"
                      onClick={() => setChannel("Facebook")}
                    />
                    <label>Facebook</label>
                  </div>
                  <div className="flex gap-3">
                    <input
                      type="radio"
                      name="hear-about-us"
                      onClick={() => setChannel("Referral")}
                    />
                    <label>Referral</label>
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="text-center">
              <input
                className="w-full rounded-xl bg-primary p-4 text-white cursor-pointer"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
          {message && (
            <div className="flex items-center justify-center absolute z-50 top-[50%] right-[50%]">
              <Alert message={message} onClick={closeAlert} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
