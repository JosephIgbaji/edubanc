"use client";
import React, { useEffect, useState } from "react";
import Login from "@/components/admin/Login";

import BlogTable from "@/components/admin/BlogTable";
import ComponentsHeader from "@/components/admin/ComponentsHeader";

// import TextEditor from "@/components/admin/TextEditor";
import TestimonialTable from "@/components/admin/TestimonialTable";
import TestimonialEditor from "@/components/admin/TestomonialEditor";
import Loading from "../loading";

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
  const [user, setUser] = useState(null);
  const [isResolving, setIsResolving] = useState(true);
  const [category, setCategory] = useState("blog");
  const [showBlogEditor, setShowBlogEditor] = useState(false);
  const [showTestimonialEditor, setShowTestimonialEditor] = useState(false);

  const signedIn = !isResolving && user;

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

  useEffect(() => {
    resolve();
  }, []);

  const resolve = async () => {
    const resp = await fetch("/admin/user");
    const json = await resp.json();
    if (resp.status == 200 && json?.status == "success") {
      setUser(json.data);
      setIsResolving(false);
    } else {
      setIsResolving(false);
    }
  };

  if (isResolving)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <div>
      {!signedIn ? (
        <>
          <Login />
        </>
      ) : (
        <div className="lg:h-screen lg:grid lg:grid-cols-[250px_auto]">
          <div className="bg-blue-100 bg-opacity-50 px-4 lg:pt-20 lg:flex flex-col justify-between pb-10">
            <div>
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
            <button className="text-sm p-2 rounded-lg hover:bg-gray-300 hover:font-bold">
              Log Out
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
            {/* {showBlogEditor && (
              <div className="absolute lg:w-[90%]">
                <TextEditor />
              </div>
            )} */}
            {showTestimonialEditor && (
              <div className="absolute lg:w-[90%]">
                <TestimonialEditor />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
