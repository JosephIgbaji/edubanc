import React from "react";
import BlogCard from "./BlogCard";
import ButtonPrimary from "../ButtonPrimary";
import Link from "next/link";

const BottomBlogPost = () => {
  return (
    <div className="mb-32">
      <div className="mt-32">
        <div className="mb-3 px-2 flex flex-col lg:flex-row lg:pr-16 justify-between">
          <div>
            <p className="text-primary font-semibold">Our Blog</p>

            <h2 className="text-3xl font-bold mb-1">Latest blog posts</h2>
            <p className="text-textGray mb-4 text-sm max-w-[600px]">
              Tool and strategies modern teams need to help their companies
              grow.
            </p>
          </div>
          <Link href="/blog">
            <ButtonPrimary name="View all post" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-10 lg:grid-cols-3">
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
        </div>
      </div>
    </div>
  );
};

export default BottomBlogPost;
