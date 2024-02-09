"use client";
import ShareContainer from "@/components/blog/ShareContainer";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BottomBlogPost from "@/components/blog/BottomBlogPost";
import { useParams } from "next/navigation";
import Loading from "@/app/(admin)/Loading";
import OurBlog from "@/components/home/OurBlog";
import Link from "next/link";
import ButtonPrimary from "@/components/ButtonPrimary";

const page = () => {
  const params = useParams();

  const [post, setPost] = useState(null);
  useEffect(() => {
    if (params?.id) get();
  }, [params.id]);

  const get = async () => {
    const resp = await fetch(`/admin/blog/${params.id}`);
    const json = await resp.json();
    if (resp.status == 200 && json?.status == "success") {
      setPost(json.data);
    }
  };

  if (!post)
    return (
      <div className="block w-screen h-screen">
        <Loading />
      </div>
    );

  return (
    <div className="px-5 flex flex-col items-center pt-16 sm:px-32 mx-auto bg-[#F9FAFB]">
      <div className="flex flex-col mb-20 lg:flex-row lg:items-center lg:gap-20">
        <div className="w-[300px] p-2 rounded-lg  mb-5">
          <p className="text-primary font-semibold">
            {new Date(post?.createdAt).toDateString()} • {post?.readDuration}{" "}
            min read
          </p>
          <h2 className="font-bold text-2xl my-1 mb-4">{post?.title}</h2>

          {/* <p className="text-xs mb-6 text-black text-opacity-50 overflow-hidden h-16 ">
            In a rapidly evolving world, education stands as the cornerstone of
            personal and societal development, and as we embrace the digital
            age, the landscape of education is changing.
          </p> */}
          <div className="flex gap-3 items-center">
            <Image
              className="rounded-full"
              src={post?.cover}
              width={40}
              height={40}
              alt=""
            />
            <div>
              <p className="text-sm font-semibold">EduBanc</p>
              <p className="text-sm text-black text-opacity-50">Author</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={post?.cover}
            width={500}
            height={200}
            // layout="fill"
            alt=""
          />
        </div>
      </div>
      <div className="min-w-[300px] sm:max-w-[500px] mb-10 text-justify">
        <p>{post?.body}</p>
        <div className="mt-20">
          <ShareContainer />
        </div>
      </div>
      <div className="w-full mt-32">
        <div className="mb-3 px-2 flex flex-col lg:flex-row lg:pr-24 justify-between">
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
      </div>
      <div className="w-full mb-32">
        <OurBlog title="Latest blog posts" showFooter limit />
      </div>
    </div>
  );
};

export default page;
