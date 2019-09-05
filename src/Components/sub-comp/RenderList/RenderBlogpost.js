import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../../Actions";
import Axios from "axios";
import { Link } from "react-router-dom";
function RenderBlogpost({ blogpostList, deleteBlogPost, fetchBlogpost }) {
  const [post, setPost] = useState(false);
  const deletePost = async id => {
    setPost(id);
    await Axios.delete(`/blogpost/delete/${id}`);
    fetchBlogpost();
    setPost(false);
  };
  const renderList = () => {
    if (blogpostList.length === 0)
      return <div className="mt-5 text-center col-8">Loading</div>;

    return blogpostList.map(doc => {
      if (deleteBlogPost) {
        return (
          <div
            className={
              post === doc.id
                ? "border-bottom hover-change text-danger ml-3 mt-3"
                : "border-bottom hover-change ml-3 mt-3"
            }
            key={doc.id}
          >
            <button
              onClick={() => {
                deletePost(doc.id);
              }}
              type="button"
              className="close float-right"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h5>{doc.body.title}</h5>
            <p className="font-weight-lighter light mt-neg-5">
              {doc.body.desc}
            </p>
          </div>
        );
      } else {
        return (
          <div
            className="border-bottom hover-change shadow-lg ml-3 mt-3"
            key={doc.id}
          >
            <Link to={`/article/${doc.id}`}>
              <img
                src={doc.body.blogImg}
                className="w-100 mx-auto h-75"
                alt="Blog Img"
              />
              <h5 clasName="mb-2 font-weight-bolder text-center">
                {doc.body.title}
              </h5>
              <p className="font-weight-lighter light mt-neg-5">
                {doc.body.desc}
              </p>
            </Link>
          </div>
        );
      }
    });
  };

  return <div>{renderList()}</div>;
}

const mapStateToProps = ({ blogpostList }) => {
  return {
    blogpostList
  };
};

export default connect(
  mapStateToProps,
  actions
)(RenderBlogpost);
