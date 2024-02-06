import React, { useState } from "react";

const AboutModal = () => {
  const [channel, setChannel] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/xqkrergr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    if (response.ok) {
      alert("Form Submitted");
    } else {
      alert("Failed to submit form");
    }
  };

  return (
    <div className="bg-gray-700 bg-opacity-30 w-screen h-screen flex items-center justify-center">
      <div className="bg-white relative mx-auto rounded-3xl border p-3 md:p-5 max-w-screen-sm">
        <p
          className="bg-gray-700 h-5 w-5 absolute top-1 right-5 rounded-full text-white text-lg flex items-center justify-center cursor-pointer"
          onClick={() => {}}
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
                className="w-full rounded-xl bg-primary p-4 text-white"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
