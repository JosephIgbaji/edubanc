import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    const resp = await fetch("/admin/testimonial");
    const json = await resp.json();
    if (resp.status == 200 && json?.status == "success") {
      setList(json.data);
    }
  };

  return (
    <div className="mt-32 flex flex-col sm:block">
      <div className="mb-3 rounded-lg text-primary font-semibold bg-primary bg-opacity-40 w-[130px] px-2 flex items-center gap-2">
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="3" fill="#5277F3" />
        </svg>
        <p>Testimonials</p>
      </div>
      <h2 className="text-3xl font-bold mb-1">Our Customer&apos;s Feedback</h2>
      <p className="text-textGray mb-4 text-sm max-w-[600px] "></p>
      {/* <div className="flex gap-5 w-full overflow-x-scroll scroll-smooth"> */}
      {/* <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"> */}
      <Marquee pauseOnClick={true} pauseOnHover={true}>
        {list.map((i, x) => (
          <TestimonialCard
            key={`testimonial-${x}`}
            testmonial={i.testimonial}
            author={i.name}
            role={i.designation}
          />
        ))}
      </Marquee>
      {/* </div> */}
    </div>
  );
};

export default Testimonials;
