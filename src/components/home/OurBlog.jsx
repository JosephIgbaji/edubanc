import React from "react";
import Link from "next/link";
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
      <h2 className="text-3xl font-bold mb-1">Latest, Educative Capivating</h2>
      <p className="text-textGray mb-4 text-sm max-w-[600px]">
        Keep up to date with our informative and educational blog
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="/blog/relevanceofeducation">
          <HomeBlogCard
            heading="RELEVANCE OF EDUCATION"
            post="In a rapidly evolving world, education stands as the cornerstone of personal and societal development, and as we embrace the digital age, the landscape of education is changing."
            image="/blog-1.jpeg"
          />
        </Link>
        <Link href="/blog/educationforall">
          <HomeBlogCard
            heading="EDUCATION FOR ALL"
            post="Access to quality education is the right of every Nigerian. However, several factors can challenge individuals' access to quality education"
            image="/blog-2.jpeg"
          />
        </Link>
        <Link href="/blog/relevanceoftechnology">
          <HomeBlogCard
            heading="RELEVANCE OF TECHNOLOGY "
            post="With the current trend in education, learning is being revolutionized. All thanks to the increase in the development of technology."
            image="/blog-api-stack.jpeg"
          />
        </Link>
      </div>
    </div>
  );
};

export default OurBlog;
