"use client";
import { useState } from "react";
import ReactQuill from "react-quill";
import "../../node_modules/react-quill/dist/quill.snow.css";
import { Controller, useForm } from "react-hook-form";
import getAxios from "@/utils/getAxios";

const QuillEditor = () => {
  const axiospost = getAxios();
  const { control, handleSubmit } = useForm();
  const [submitStatus, setSubmitStatus] = useState("");

  const toolbarOptions = [
    [{ size: ["small", false, "large", "huge"] }],
    [{ font: [] }],
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "formula"],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ color: [] }, { background: [] }],

    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  const module = {
    toolbar: toolbarOptions,
  };

  const onSubmit = async (data) => {
    const res = await axiospost.post("/blogs", data);
    console.log(res.data);
    // if(res.data.insertedId)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="description"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <ReactQuill
            {...field}
            modules={module}
            theme="snow"
            onChange={field.onChange}
          />
        )}
      />
      <button type="submit">Save Blog</button>
      {submitStatus && <p>{submitStatus}</p>}
    </form>
  );
};

export default QuillEditor;
