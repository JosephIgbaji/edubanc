"use client";
import React, { useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import BlogHeading from "@/components/blog/BlogHeading";
// import NewsLetter from "@/components/blog/NewsLetter";
import Link from "next/link";
import ButtonPrimary from "@/components/ButtonPrimary";
import QuestionModal from "@/components/QuestionModal";
import OurBlog from "@/components/home/OurBlog";

const Blog = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleShow = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div className="px-5 flex flex-col items-center pt-16 sm:px-32 mx-auto bg-[#F9FAFB;]">
      <BlogHeading />
      {/* <div className="grid md:grid-cols-2 gap-10 lg:grid-cols-3 border-b-[1px] pb-5 mb-[20px]"> */}
       <OurBlog showFooter/>
      {/* </div> */}
      {showComponent && (
        <div className="fixed top-[25%] right-0 z-10">
          <QuestionModal onclose={handleShow} />
        </div>
      )}
      {!showComponent && (
        <div onClick={handleShow} className="fixed bottom-[30%] right-0 z-10">
          <ButtonPrimary name={"Got any question for us"} />
        </div>
      )}
    </div>
  );
};

export default Blog;
