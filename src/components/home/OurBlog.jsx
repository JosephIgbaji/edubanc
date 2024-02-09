import React, { useEffect, useState } from "react";
import Link from "next/link";
import HomeBlogCard from "./HomeBlogCard";
import BlogCard from "../blog/BlogCard";

const OurBlog = (props) => {
  const { title, showFooter } = props;
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
    // <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {list
          ?.filter((j) => list.indexOf(j) < 3)
          .map((i, x) => (
            <Link href={`/blog/${i?.slug}`}>
              {/* <HomeBlogCard heading={i.title} post={i.body} image={i.cover} /> */}
              <BlogCard heading={i.title} post={i.body} image={i.cover}
              author="Edubanc"
              date={new Date(i.createdAt).toDateString()}
              avatar="/blogpostavatar.png"
              showFooter={showFooter}/>
            </Link>
          ))}
      </div>
    // </div>
  );
};

export default OurBlog;
