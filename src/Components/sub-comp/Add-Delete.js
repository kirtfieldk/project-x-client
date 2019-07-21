import React from "react";

const AddDelete = ({ addEdit, addPost, edit }) => {
  console.log(edit);
  return (
    <div className="mb-3 ml-2">
      <button
        className={
          edit === true
            ? " btn btn-danger border-rightless"
            : "btn btn-outline-danger border-rightless"
        }
        onClick={addEdit}
      >
        DeletePost
      </button>
      <button
        className={
          edit === true
            ? "btn btn-outline-success border-leftless"
            : "btn btn-success border-leftless"
        }
        onClick={addPost}
      >
        AddPost
      </button>
    </div>
  );
};

export default AddDelete;
