import React from "react";

const BlogHeading = () => {
  return (
    <div className="flex items-center flex-col gap-5 mb-20">
      <p className="text-lg">Our Blog</p>
      <h2 className="text-primary text-4xl font-bold text-center">
        Stories and interviews
      </h2>
      <p className="text-center max-w-[600px]">
        The blog is the best source of information for interviews, tips, guides,
        industry best practices, and news. Subscribe for updates in your inbox
        every week.
      </p>
    </div>
  );
};

export default BlogHeading;
