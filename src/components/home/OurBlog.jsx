import React from "react";
import HomeBlogCard from "./HomeBlogCard";

const OurBlog = () => {
  return (
    <div className="mt-32">
      <div className="mb-3 rounded-lg text-primary font-semibold bg-primary bg-opacity-40 w-[110px] px-2 flex items-center gap-2">
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="3" fill="#5277F3" />
        </svg>
        <p>Our Blog</p>
      </div>
      <h2 className="text-3xl text-center sm:text-left font-bold mb-1">
        Latest, Educative Capivating
      </h2>
      <p className="text-textGray mb-4 text-sm max-w-[600px] text-center sm:text-left">
        Keep up to date with our informative and educational log
      </p>
      <div className="flex gap-5 w-full overflow-x-scroll">
        {/* <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"> */}
        <HomeBlogCard
          image="/blog-api-stack.jpeg"
          heading="Building your API Stack"
          post="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
        />
        <HomeBlogCard
          image="/blog-api-stack.jpeg"
          heading="Building your API Stack"
          post="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
        />
        <HomeBlogCard
          image="/blog-api-stack.jpeg"
          heading="Building your API Stack"
          post="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
        />
        <HomeBlogCard
          image="/blog-api-stack.jpeg"
          heading="Building your API Stack"
          post="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
        />
        <HomeBlogCard
          image="/blog-api-stack.jpeg"
          heading="Building your API Stack"
          post="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
        />
        <HomeBlogCard
          image="/blog-api-stack.jpeg"
          heading="Building your API Stack"
          post="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
        />
        <HomeBlogCard
          image="/blog-api-stack.jpeg"
          heading="Building your API Stack"
          post="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
        />
      </div>
    </div>
  );
};

export default OurBlog;
