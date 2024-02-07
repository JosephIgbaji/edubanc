import React, { useState } from "react";

export default function TestimonialEditor() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [testimonial, setTestimonial] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/xqkrergr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, designation, testimonial }),
    });

    if (response.ok) {
      alert("Form Submitted");
      setShowTestimonialEditor(false);
    } else {
      alert("Failed to submit form");
    }
  };

  return (
    <div className="mt-5 max-w-[400px]">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-5">
            <label className="mb-3">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-lg p-4 border h-14"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label className="mb-3">Designation</label>
            <input
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="rounded-lg p-4 border h-14"
              type="text"
              placeholder="Enter designation"
            />
          </div>
          <div className="mb-10">
            <div className="flex flex-col">
              <label className="mb-3">Testimonial</label>
              <textarea
                value={testimonial}
                onChange={(e) => setTestimonial(e.target.value)}
                className="rounded-lg p-4 border h-24"
                type="text"
                placeholder="Enter Your testimonial here"
              />
            </div>
          </div>
          <div className="test-center">
            <input
              className="w-full rounded-xl bg-primary p-4 text-white cursor-pointer"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
