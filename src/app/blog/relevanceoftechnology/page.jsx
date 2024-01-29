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
            RELEVANCE OF TECHNOLOGY IN REVOLUTIONIZING LEARNING
          </h2>

          <p className="text-xs mb-6 text-black text-opacity-50 overflow-hidden h-16 ">
            With the current trend in education, learning is being
            revolutionized.
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
          With the current trend in education, learning is being revolutionized.
          All thanks to the increase in the development of technology. We will
          be exploring some benefits of technology in revolutionizing learning
          in 2024.
          <br />
          <br /> One of the benefits of technology is access to different
          learning styles. Adapting different learning styles that meet the
          needs of each learner can be overwhelming in a traditional classroom.
          However with technology, diverse adaptive learning styles have been
          introduced. From interactive simulations to AI-driven assessments,
          using technology in education ensures that each student's unique
          strengths and challenges are recognized, fostering a more inclusive
          and effective learning experience for all.
          <br />
          <br /> Another prominent advantage of technology is that different
          learners from different parts of the world can take lessons together,
          collaborate and foster good relationships as people get to meet one
          another regardless of their physical location or environment.
          Technology breaks down digital barriers by adopting communication
          tools and collaborative project platforms which gives people a sense
          of belonging to strategic communities that aid their growth. At
          Edubanc, we leverage technology in bridging the gap among stakeholders
          in education and ensuring more people have access to quality
          education.
          <br />
          <br />
          Conclusively, technology is redefining the face of learning and it is
          imperative that we embrace it with open mindedness and upskill as
          individuals to stay updated in our learning.
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
