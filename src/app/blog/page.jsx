import BlogCard from "@/components/blog/BlogCard";
import BlogHeading from "@/components/blog/BlogHeading";
import NewsLetter from "@/components/blog/NewsLetter";
import React from "react";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="px-5 flex flex-col items-center pt-16 sm:px-32 mx-auto bg-[#F9FAFB;]">
      <BlogHeading />
      <div className="grid md:grid-cols-2 gap-10 lg:grid-cols-3 border-b-[1px] pb-5 mb-[20px]">
        <Link href="/blog/relevanceofeducation">
          <BlogCard
            heading="RELEVANCE OF EDUCATION"
            miniPost="In a rapidly evolving world, education stands as the cornerstone of personal and societal development, and as we embrace the digital age, the landscape of education is changing."
            author="Edubanc"
            date="27 Jan 2024"
            image="/blog-1.jpeg"
            avatar="/blogpostavatar.png"
          />
        </Link>
        <Link href="/blog/educationforall">
          <BlogCard
            heading="EDUCATION FOR ALL"
            miniPost="Access to quality education is the right of every Nigerian. However, several factors can challenge individuals' access to quality education"
            author="Edubanc"
            date="27 Jan 2024"
            image="/blog-2.jpeg"
            avatar="/blogpostavatar.png"
          />
        </Link>
        <Link href="/blog/relevanceoftechnology">
          <BlogCard
            heading="RELEVANCE OF TECHNOLOGY "
            miniPost="With the current trend in education, learning is being revolutionized. All thanks to the increase in the development of technology."
            author="Edubanc"
            date="27 Jan 2024"
            image="/blog-api-stack.jpeg"
            avatar="/blogpostavatar.png"
          />
        </Link>
        <NewsLetter />
        <BlogCard
          heading="LOREM IPSUM DOLOR EMET"
          miniPost="In a rapidly evolving world, education stands as the cornerstone of personal and societal development, and as we embrace the digital age, the landscape of education is changing."
          author="Edubanc"
          date="27 Jan 2024"
          image="/blog-1.jpeg"
          avatar="/blogpostavatar.png"
        />
        <BlogCard
          heading="LOREM IPSUM DOLOR EMET"
          miniPost="Access to quality education is the right of every Nigerian. However, several factors can challenge individuals' access to quality education"
          author="Edubanc"
          date="27 Jan 2024"
          image="/blog-2.jpeg"
          avatar="/blogpostavatar.png"
        />
      </div>
    </div>
  );
};

export default Blog;
