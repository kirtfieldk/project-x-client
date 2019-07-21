import React, { useState } from "react";
import RenderBlogpost from "../../sub-comp/RenderList/RenderBlogpost";
import AddDelete from "../../sub-comp/Add-Delete";
import AddBlogpost from "../../sub-comp/AppPost/AddBlogpost";
const AdminBlogpost = () => {
  const [edit, setEdit] = useState(true);
  const [add, setAdd] = useState(false);
  console.log(edit);
  const addEdit = () => {
    setAdd(false);
    setEdit(true);
  };
  const addPost = () => {
    setEdit(false);
    setAdd(true);
  };
  const renderPage = () => {
    if (edit) {
      return (
        <div className="col-12">
          <RenderBlogpost deleteBlogPost={true} />
        </div>
      );
    } else
      return (
        <div>
          <AddBlogpost />
        </div>
      );
  };
  return (
    <div className="mt-3 bg-light col-8 ml-3">
      <div className="title mt-3">BlogPost</div>
      <div className="col-12">
        <AddDelete addEdit={addEdit} addPost={addPost} edit={edit} />
      </div>
      {renderPage()}
    </div>
  );
};

export default AdminBlogpost;
