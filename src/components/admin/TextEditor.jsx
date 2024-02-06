import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function TextEditor() {
  const [value, setValue] = useState("");

  return (
    <div className="mt-5 w-full flex flex-col">
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  );
}
