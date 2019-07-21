import React, { useState } from "react";
import axios from "axios";
import Quill from "quill";
import ReactQuill from "react-quill"; // CommonJS

const AddBlogpost = () => {
  var toolbarOptions = [
    ["bold", "italic"],
    ["link", "image"],
    [{ size: ["small", false, "large", "huge"] }],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"]
  ];
  // Needed states
  const [desc, setDesc] = useState("");
  const [author, setAuthor] = useState("");
  const [blogImg, setBlogImg] = useState("");
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
  const [touched, setTouch] = useState(false);
  // ///////////////////////////////////////////////////////////////////////////////////////////
  // CREATING QUILL THING
  const renderQuill = () => {
    var quill = new Quill("#editor", {
      theme: "snow",
      modules: {
        toolbar: toolbarOptions
      }
    });
  };
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      ["link", "image"],
      ["clean"]
    ]
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image"
  ];
  //
  const validForm = () => {
    console.log("called");
    if (
      desc.trim() === "" ||
      title.trim() === "" ||
      author.trim() === "" ||
      blogImg.trim() === "" ||
      body.trim() === ""
    )
      return false;
    return true;
  };
  const sendForm = async () => {
    setTouch(true);
    console.log(touched);
    if (validForm()) {
      const values = {
        desc,
        title,
        author,
        blogImg,
        body
      };
      const response = await axios.post("/blogpost", values);
      console.log(response);
      setMsg(response.data.msg);
      setTouch(false);
      setDesc("");
      setTitle("");
      setAuthor("");
      setBlogImg("");
      setBody("");
    }
  };
  console.log(body);
  const renderForm = () => {
    return (
      <form>
        <div className="red text-small text-center">
          {touched && !validForm() ? "All fields must be filled!" : ""}
        </div>
        <div className="green text-small text-center">{msg}</div>

        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Title"
          />
          <small className="form-text text-muted">We need a title</small>
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            value={author}
            className="form-control"
            onChange={e => setAuthor(e.target.value)}
            placeholder="Short Desc"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            value={desc}
            className="form-control"
            onChange={e => setDesc(e.target.value)}
            placeholder="Short Desc"
          />
        </div>

        <div className="form-group">
          <label>Blog Img</label>
          <input
            type="text"
            value={blogImg}
            className="form-control"
            onChange={e => setBlogImg(e.target.value)}
            placeholder="Short Desc"
          />
        </div>

        <div className="text-editor">
          <ReactQuill
            className="h-75"
            theme="snow"
            modules={modules}
            value={body}
            formats={formats}
            onChange={e => setBody(e)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={e => {
            e.preventDefault();
            sendForm();
          }}
        >
          Submit
        </button>
      </form>
    );
  };

  // quill.on("text-change", function() {
  //   console.log("Text change!");
  // });
  return <div className="ml-3 mt-3 pb-5">{renderForm()}</div>;
};

export default AddBlogpost;
