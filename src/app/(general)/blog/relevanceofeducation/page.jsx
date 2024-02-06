import ShareContainer from "@/components/blog/ShareContainer";
import React from "react";
import Image from "next/image";
import BottomBlogPost from "@/components/blog/BottomBlogPost";

const page = () => {
  return (
    <div className="px-5 flex flex-col items-center pt-16 sm:px-32 mx-auto bg-[#F9FAFB]">
      <div className="flex flex-col mb-20 lg:flex-row lg:items-center lg:gap-20">
        <div className="w-[300px] p-2 rounded-lg  mb-5">
          <p className="text-primary font-semibold">
            20 Jan 2022 • 10 min read
          </p>
          <h2 className="font-bold text-2xl my-1 mb-4">
            Relevance of Education
          </h2>

          <p className="text-xs mb-6 text-black text-opacity-50 overflow-hidden h-16 ">
            In a rapidly evolving world, education stands as the cornerstone of
            personal and societal development, and as we embrace the digital
            age, the landscape of education is changing.
          </p>
          <div className="flex gap-3 items-center">
            <Image
              className="rounded-full"
              src="/blogpostavatar.png"
              width={40}
              height={40}
              alt="alternative"
            />
            <div>
              <p className="text-sm font-semibold">EduBanc</p>
              <p className="text-sm text-black text-opacity-50">
                Lorem Imsum dolor smit
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/blog-api-stack.jpeg"
            width={500}
            height={200}
            // layout="fill"
            alt="alt"
          />
        </div>
      </div>
      <div className="min-w-[300px] sm:max-w-[500px] mb-10 text-justify">
        <p>
          In a rapidly evolving world, education stands as the cornerstone of
          personal and societal development, and as we embrace the digital age,
          the landscape of education is changing. Education is not just a means
          to an end; it&apos;s a lifelong journey that empowers individuals in
          countless ways. With the upgrade in the level of technological
          advancement, learning has become more engaging, convenient, and
          dynamic. <br />
          <br /> In this blog, we will check two prominent importance of
          education in our world. Education enables personal development and
          enhances career prospects, which eventually leads to growth in
          society. Ensuring every child gets educated affordably and within
          means is the goal of Edubanc. We are interested in improving the human
          capital challenges in the education sector through our Free
          Teacher&apos;s Training Initiative and by reducing the number of
          out-of-school students.
          <br />
          <br /> This has propelled us to financially aid and keep over 4700
          learners in school with our monthly tuition payment solution, Edpay,
          and trained over 400 educators. Additionally, education promotes
          global relevance. A good example would be Ngozi Okonjo Iweala, the
          current Director General of the World Trade Organization. <br />
          <br />
          She has received numerous recognitions and awards for her
          effectiveness. All these wouldn&apos;t have been possible without
          education. Give yourself or your child a chance to learn with
          convenience using Edpay, a tuition financing solution on
          www.edubanc.ng, and set out on a journey to global relevance.
          Subscribe to this blog site for updates and interesting contents!
        </p>
        <div className="mt-20">
          <ShareContainer />
        </div>
      </div>
      <div className="">
        <BottomBlogPost />
      </div>
    </div>
  );
};

export default page;
