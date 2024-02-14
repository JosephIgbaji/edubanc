import React, { useState } from "react";

const QuestionModal = ({ onclose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    onclose();
    const response = await fetch("https://formspree.io/f/xqkrergr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, message }),
    });

    if (response.ok) {
      alert("Form Submitted");
    } else {
      alert("Failed to submit form");
    }
  };

  return (
    <div className="w-auto flex items-center justify-center">
      <div className="bg-white relative mx-auto rounded-3xl border p-3 md:p-5 pt-10 max-w-screen-sm">
        <p
          className="bg-gray-700 h-5 w-5 absolute top-5 right-5 rounded-full text-white text-lg flex items-center justify-center cursor-pointer"
          onClick={onclose}
        >
          <span>x</span>
        </p>
        <div className="text-center mb-3 md:mb-10">
          <h2 className="md:text-2xl font-semibold mb-2">
            Got any questions for us?
          </h2>
          <p className="text-sm md:text-lg">
            We&apos;d love to hear from you. please fill out the form.
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex md:justify-between flex-col md:flex-row gap-5 mb-5">
              <div className="flex flex-col mb-2 md:mb-0">
                <label className="mb-3">FirstName</label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="rounded-lg p-2 md:p-4 border max-w-[280px] h-8 md:h-14"
                  type="text"
                  placeholder="First name"
                />
              </div>
              <div className="flex flex-col mb-2 md:mb-0">
                <label className="mb-3">LastName</label>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="rounded-lg p-2 md:p-4 border max-w-[280px] h-8 md:h-14"
                  type="text"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <label className="mb-3">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg p-2 md:p-4 border w-[280px] h-8 md:h-14"
                type="email"
                placeholder="Enter email address"
              />
            </div>
            <div className="md:mb-10">
              <div className="flex flex-col">
                <label className="mb-3">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-lg p-2 md:p-4 border md:h-24"
                  type="text"
                  placeholder="Enter Your message here"
                />
              </div>
            </div>
            <div className="test-center">
              <input
                className="w-full rounded-xl cursor-pointer bg-primary p-4 text-white"
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

export default QuestionModal;
