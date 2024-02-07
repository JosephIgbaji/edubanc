"use client";
import React, { useState } from "react";
import Login from "@/components/admin/Login";

import BlogTable from "@/components/admin/BlogTable";
import ComponentsHeader from "@/components/admin/ComponentsHeader";

import TextEditor from "@/components/admin/TextEditor";
import TestimonialTable from "@/components/admin/TestimonialTable";
// import TestimonialEditor from "@/components/admin/TestomonialEditor";

// export default function Home() {
//   const [signIn, setSignIn] = useState(true);

//   const style = "rounded-lg w-full border p-3 block mb-5";
//   const activeStyle = style + " bg-gray-300 font-bold";
//   return (
//     <div>
//       {!signIn ? (
//         <Login />
//       ) : (
//         <div className="lg:h-screen lg:grid lg:grid-cols-[250px_auto]">
//           <div className="bg-blue-100 bg-opacity-50 px-4 lg:pt-20">
//             <button
//               onClick={() => {
//                 setCategory("blog");
//                 setShowBlogEditor(false);
//                 setShowTestimonialEditor(false);
//               }}
//               className={category === "blog" ? activeStyle : style}
//             >
//               Blog
//             </button>
//             <button
//               onClick={() => {
//                 setCategory("testimonials");
//                 setShowBlogEditor(false);
//                 setShowTestimonialEditor(false);
//               }}
//               className={category !== "blog" ? activeStyle : style}
//             >
//               Testimonials
//             </button>
//           </div>
//           <div className="relative px-10 pt-10">
//             <ComponentsHeader
//               headers={
//                 category === "blog" ? componentsObject[0] : componentsObject[1]
//               }
//             />
//             {!showBlogEditor && category === "blog" && <BlogTable />}
//             {!showTestimonialEditor && category !== "blog" && (
//               <TestimonialTable />
//             )}
//             {showBlogEditor && (
//               <div className="absolute lg:w-[90%]">
//                 <TextEditor />
//               </div>
//             )}
//             {showTestimonialEditor && (
//               <div className="absolute lg:w-[90%]">
//                 <TestimonialEditor />
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

const Page = () => {
  const [signIn, setSignIn] = useState(true);
  const [category, setCategory] = useState("blog");
  const [showBlogEditor, setShowBlogEditor] = useState(false);
  const [showTestimonialEditor, setShowTestimonialEditor] = useState(false);

  const style = "rounded-lg w-full border p-3 block mb-5";
  const activeStyle = style + " bg-gray-300 font-bold";

  const handleShowBlogEditor = () => {
    setShowBlogEditor(!showBlogEditor);
  };
  const handleShowTestimonialEditor = () => {
    setShowTestimonialEditor(!showTestimonialEditor);
  };

  const componentsObject = [
    {
      title: "Blog",
      add: "Add New Blog",
      general: "All Post",
      category: "Select Category",
      handleshow: handleShowBlogEditor,
      show: showBlogEditor,
    },
    {
      title: "Testimonials",
      add: "Add New Testimonial",
      general: "All Testimonials",
      handleshow: handleShowTestimonialEditor,
      show: showTestimonialEditor,
    },
  ];
  return (
    <div>
      {!signIn ? (
        <Login />
      ) : (
        <div className="lg:h-screen lg:grid lg:grid-cols-[250px_auto]">
          <div className="bg-blue-100 bg-opacity-50 px-4 lg:pt-20">
            <button
              onClick={() => {
                setCategory("blog");
                setShowBlogEditor(false);
                setShowTestimonialEditor(false);
              }}
              className={category === "blog" ? activeStyle : style}
            >
              Blog
            </button>
            <button
              onClick={() => {
                setCategory("testimonials");
                setShowBlogEditor(false);
                setShowTestimonialEditor(false);
              }}
              className={category !== "blog" ? activeStyle : style}
            >
              Testimonials
            </button>
          </div>
          <div className="relative px-10 pt-10">
            <ComponentsHeader
              headers={
                category === "blog" ? componentsObject[0] : componentsObject[1]
              }
            />
            {!showBlogEditor && category === "blog" && <BlogTable />}
            {!showTestimonialEditor && category !== "blog" && (
              <TestimonialTable />
            )}
            {showBlogEditor && (
              <div className="absolute lg:w-[90%]">
                <TextEditor />
              </div>
            )}
            {/* {showTestimonialEditor && (
              <div className="absolute lg:w-[90%]">
                <TestimonialEditor />
              </div>
            )} */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
