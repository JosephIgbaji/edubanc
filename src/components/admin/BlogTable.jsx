import React from "react";

const BlogTable = () => {

  

  return (
    <div className="">
      <table className="w-full mt-10 border">
        <thead className=" ">
          <tr className="text-left">
            <th className="w-20 h-16 flex justify-center items-center">
              {/* <input type="checkbox" className="rounded-full w-5 h-5" /> */}
            </th>
            <th>Title</th>
            <th>Category</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border rounded-lg ">
            <td className="w-20 h-16 flex justify-center items-center">
              <input type="checkbox" className="rounded-full w-5 h-5" />
            </td>
            <td>lorem ipsum dolor emet</td>
            <td>Education</td>
            <td>wed. 1:00pm</td>
            <td className="flex gap-2">
              <button className="text-red-700">Delete</button>
              <button>Edit</button>
            </td>
          </tr>
          <tr className="border rounded-lg ">
            <td className="w-20 h-16 flex justify-center items-center">
              <input type="checkbox" className="rounded-full w-5 h-5" />
            </td>
            <td>lorem ipsum dolor emet</td>
            <td>Education</td>
            <td>wed. 1:00pm</td>
            <td className="flex gap-2">
              <button className="text-red-700">Delete</button>
              <button>Edit</button>
            </td>
          </tr>
          <tr className="border rounded-lg ">
            <td className="w-20 h-16 flex justify-center items-center">
              <input type="checkbox" className="rounded-full w-5 h-5" />
            </td>
            <td>lorem ipsum dolor emet</td>
            <td>Education</td>
            <td>wed. 1:00pm</td>
            <td className="flex gap-2">
              <button className="text-red-700">Delete</button>
              <button>Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BlogTable;
