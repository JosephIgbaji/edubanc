import React, { useEffect, useState } from "react";
import Alert from "./Alert";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

export default function TextEditor() {
  // const [value, setValue] = useState("");
  // const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [readDuration, setReadDuration] = useState("");
  const [body, setBody] = useState("");
  const [coverPic, setCoverPic] = useState(null);
  const [preview, setPreview] = useState(null);
  const [list, setList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!coverPic) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(coverPic);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [coverPic]);

  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    const resp = await fetch("/admin/blog/category");
    const json = await resp.json();
    if (resp.status == 200 && json?.status == "success") {
      setList(json.data);
      // setItemToDelete(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (coverPic) {
      const reader = new FileReader();

      reader.readAsDataURL(coverPic);

      reader.onload = () => {
        submit(reader.result);
      };
    } else {
      submit();
    }
  };

  const submit = async (base64) => {
    const data = { title, category, readDuration, body };
    if (base64) data.cover = base64;

    const resp = await fetch("/admin/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await resp.json();
    if (resp.status == 200 && json?.status == "success") {
      setTitle("");
      setCategory("");
      setReadDuration("");
      setBody("");
      setCoverPic(null);
    } else {
      setErrorMessage(json?.message ?? "Something went wrong");
    }
  };

  const onImage = (e) => {
    if (!e.target.files || e.target.files.length == 0) {
      setSelectedFile(null);
      return;
    }

    setCoverPic(e.target.files[0]);
  };

  const closeAlert = () => {
    setErrorMessage("");
  };

  return (
    <div className="mt-5 w-full flex flex-col">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-5">
            <label className="mb-3">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="rounded-lg p-4 border h-14"
              type="text"
              required
              placeholder="Enter title"
            />
          </div>

          <div className="flex gap-5 mb-5">
            <div className="flex flex-col flex-1 mb-5">
              <label className="mb-3">Category</label>
              <select
                onChange={(e) => setCategory(e.target.value)}
                className="rounded-lg p-4 border h-14 bg-white"
              >
                <option defaultValue="" disabled="">
                  Select
                </option>
                {list.map((i, j) => (
                  <option key={j} value={i._id}>
                    {i.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col flex-1 mb-5">
              <label className="mb-3">Read Duration (minutes)</label>
              <input
                value={readDuration}
                onChange={(e) => setReadDuration(e.target.value)}
                className="rounded-lg p-4 border h-14"
                type="text"
                required
                placeholder="10 min"
              />
            </div>
          </div>
          <div className="mb-10 flex">
            <div className="flex flex-1 flex-col">
              <label className="mb-3">Body</label>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="rounded-lg p-4 border h-24"
                type="text"
                required
                placeholder="Enter blog content"
              />
              {/* <ReactQuill theme="snow" value={value} onChange={setValue} /> */}
            </div>
            <div className="flex flex-1 flex-col px-2">
              <label className="mb-3">Image</label>
              <div
                style={{
                  border: "2px solid #333",
                  minHeight: "120px",
                  borderRadius: "10px",
                  borderStyle: "dashed",
                  padding: "10px",
                }}
              >
                <input id="blog-img-input" type="file" onChange={onImage} />
                {coverPic && <img src={preview} />}
              </div>
              {/* <ReactQuill theme="snow" value={value} onChange={setValue} /> */}
            </div>
          </div>
          <div className="">
            <input
              className="rounded-xl bg-primary p-4 text-white cursor-pointer"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
        {errorMessage && (
          <div className="flex items-center justify-center absolute z-10 top-[50%] right-[50%]">
            <Alert message={errorMessage} onClick={closeAlert} />
          </div>
        )}
      </div>
    </div>

    // <div className="mt-5 w-full flex flex-col">
    //   <ReactQuill theme="snow" value={value} onChange={setValue} />
    // </div>
  );
}
