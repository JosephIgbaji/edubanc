import React, { useEffect, useState } from "react";
import Alert from "./Alert";

export default function TestimonialEditor() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [list, setList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    const resp = await fetch("/admin/testimonial/designation");
    const json = await resp.json();
    if (resp.status == 200 && json?.status == "success") {
      setList(json.data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resp = await fetch("/admin/testimonial", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, designation, testimonial }),
    });
    const json = await resp.json();
    if (resp.status == 200 && json?.status == "success") {
      setName("");
      setDesignation("");
      setTestimonial("");
    } else {
      setErrorMessage(json?.message ?? "Something went wrong");
      // alert(json?.message ?? "Something went wrong");
    }
  };

  const closeAlert = () => {
    setErrorMessage("");
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
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label className="mb-3">Designation</label>
            <select
              onChange={(e) => setDesignation(e.target.value)}
              className="rounded-lg p-4 border h-14 bg-white"
            >
              <option defaultValue="" disabled="">
                Select
              </option>
              {list.map((i, j) => (
                <option key={j} value={i._id}>
                  {i.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-10">
            <div className="flex flex-col">
              <label className="mb-3">Testimonial</label>
              <textarea
                value={testimonial}
                onChange={(e) => setTestimonial(e.target.value)}
                className="rounded-lg p-4 border h-24"
                type="text"
                required
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
        {errorMessage && (
          <div className="flex items-center justify-center absolute z-10 top-[50%] right-[50%]">
            <Alert message={errorMessage} onClick={closeAlert} />
          </div>
        )}
      </div>
    </div>
  );
}
