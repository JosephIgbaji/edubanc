import React, { useEffect, useState } from "react";
import ConfirmModal from "../ConfirmModal";

const TestimonialTable = () => {
  const [list, setList] = useState([]);
  const [itemToDelete, setItemToDelete] = useState(null);
  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    const resp = await fetch("/admin/testimonial");
    const json = await resp.json();
    if (resp.status == 200 && json?.status == 'success') {
      setList(json.data);
      setItemToDelete(null);
    }
  }

  const deleteItem = async () => {
    const resp = await fetch(`/admin/testimonial/${itemToDelete}`, {
      method:'DELETE',
    });
    const json = await resp.json();
    if (resp.status == 200 && json?.status == 'success') {
      get();
    }
  }
  
  return (
    <>
    <div className="">
      <table className="w-full mt-10 border">
        <thead className=" ">
          <tr className="text-left">
            <th className="w-20 h-16 flex justify-center items-center">
              {/* <input type="checkbox" className="rounded-full w-5 h-5" /> */}
            </th>
            <th>Name</th>
            <th>Testimonial</th>
            <th>Designation</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list.map((i, x) => {
            return <tr className="border rounded-lg" key={`testimonial-${x}`}>
            <td className="w-20 h-16 flex justify-center items-center" >
              <input type="checkbox" className="rounded-full w-5 h-5" />
            </td>
            <td>{i.name}</td>
            <td>{i.testimonial}</td>
            <td>{i.designation}</td>
            <td>{new Date(i.createdAt).toDateString()}</td>
            <td className="flex gap-2">
              <button className="text-red-700" onClick={() => setItemToDelete(i.id)}>Delete</button>
              {/* <button>Edit</button> */}
            </td>
            </tr>
          })}        
        </tbody>
      </table>
      </div>
      {itemToDelete && <ConfirmModal onNo={() => setItemToDelete(null)} onYes={deleteItem}/>}
      </>
  );
};

export default TestimonialTable;
