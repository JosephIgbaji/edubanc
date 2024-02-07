import React from "react";

const ComponentsHeader = ({ headers }) => {
  return (
    <div>
      <div className="flex justify-between mb-5 items-center">
        <h1 className="text-3xl font-black">{headers.title}</h1>
        <button
          style={{ color: headers.show ? "red" : "" }}
          className="p-2 border rounded-lg font-semibold"
          onClick={headers?.handleshow}
        >
          {headers.show ? "close" : headers.add}
        </button>
      </div>
      <p className="mb-5">{headers.general}</p>
      <div className="flex justify-between items-center">
        <div className="text-xs flex gap-3">
          <button className="p-2 border rounded-lg">Bulk Actions</button>
          <button className="p-2 border rounded-lg">Select dates</button>
          {headers.category && (
            <button className="p-2 border rounded-lg">Select Category</button>
          )}
        </div>
        <input
          className="p-2 text-xs border w-[200px] rounded-lg"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default ComponentsHeader;
