import React, { useEffect, useState } from "react";
import Link from "next/link";
import HomeBlogCard from "./HomeBlogCard";

const OurBlog = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    const resp = await fetch("/admin/blog?limit=3");
    const json = await resp.json();
    if (resp.status == 200 && json?.status == "success") {
      setList(json.data);
    }
  };

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
        {list
          ?.filter((j) => list.indexOf(j) < 3)
          .map((i, x) => (
            <Link href="/blog/relevanceofeducation">
              <HomeBlogCard heading={i.title} post={i.body} image={i.cover} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default OurBlog;
