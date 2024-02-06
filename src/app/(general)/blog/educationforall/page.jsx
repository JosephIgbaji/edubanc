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
          <h2 className="font-bold text-2xl my-1 mb-4">EDUCATION FOR ALL</h2>

          <p className="text-xs mb-6 text-black text-opacity-50 overflow-hidden h-16 ">
            Access to quality education is the right of every Nigerian
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
          Access to quality education is the right of every Nigerian. However,
          several factors can challenge individuals access to quality education.
          A major menace in our community is the high number of out-of-school
          children in Nigeria, resulting from factors such as finance,
          socio-economic reasons, geographical barriers, and diverse learning
          needs, among others. In this post, we will provide two solutions to
          tackling the challenges of access to quality education.
          <br />
          <br /> The challenge of finance in accessing quality education is a
          significant concern affecting many individuals in the country.
          However, Edubanc&apos;s solution, called Edpay, seeks to address this
          issue. Edpay enables children to stay in school with a monthly tuition
          payment option and a convenient repayment plan, ensuring that
          education is affordable for all, irrespective of their background,
          status, or abilities, thereby reducing the number of out-of-school
          children.
          <br />
          <br /> Another prominent factor challenging access to education is the
          diverse or special learning needs of some learners. Individuals with
          special learning needs may encounter obstacles in mainstream
          educational settings, but creating an inclusive educational
          environment and engaging in tailored programs to ensure that no one is
          left behind will greatly aid their learning. All of these topics are
          covered in our carefully curated free digital teacher&apos;s training
          course because we believe that a trained educator can positively
          impact the minds of learners.
          <br />
          <br />
          Join hands with us to ensure that education is accessible and
          affordable for all by sending an email to growth@edubanc.ng today!
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
