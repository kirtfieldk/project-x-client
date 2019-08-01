import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../../Actions";
import Axios from "axios";

const RenderPodcast = ({ podcastList, deletePod, fetchPodcast }) => {
  const [post, setPost] = useState(false);
  const deletePost = async id => {
    setPost(id);
    await Axios.delete(`/podcast/delete/${id}`);
    fetchPodcast();
    setPost(false);
  };
  console.log(podcastList);
  const renderPodList = () => {
    return podcastList.map(doc => {
      return (
        <div
          className={
            post === doc.id
              ? "border-bottom text-danger hover-change"
              : "border-bottom  hover-change"
          }
          key={doc.id}
        >
          {deletePod ? (
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
          ) : (
            <div />
          )}
          <h5>{doc.values.title}</h5>
          <p className="font-weight-lighter light mt-neg-5">
            {doc.values.desc}
          </p>
        </div>
      );
    });
  };
  return <div>{renderPodList()}</div>;
};
const mapStateToProps = ({ podcastList }) => {
  return {
    podcastList
  };
};
export default connect(
  mapStateToProps,
  actions
)(RenderPodcast);
