import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../../../Actions";

const RenderNewsletter = ({ deleteNewsletter, newsletter, getNewsletter }) => {
  const [post, setPost] = useState(false);

  const deletePost = async value => {
    setPost(value);
    await axios.delete(`/newsletter/${value}`);
    getNewsletter();
    setPost(false);
  };
  const renderList = () => {
    if (newsletter === null) {
      return <div>Loading</div>;
    } else {
      return newsletter.map(doc => {
        if (deleteNewsletter) {
          return (
            <div
              className={
                post === doc.id
                  ? "border-bottom text-danger hover-change mt-3"
                  : "border-bottom  hover-change mt-3"
              }
              key={doc.id}
            >
              <button
                onClick={() => deletePost(doc.id)}
                type="button"
                className="close float-right"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h5>{doc.values.email}</h5>
            </div>
          );
        }
        return (
          <div className="border-bottom hover-change mt-3" key={doc.id}>
            <h5>{doc.value.email}</h5>
          </div>
        );
      });
    }
  };
  return <div className="ml-3">{renderList()}</div>;
};

const mapStateToProps = ({ newsletter }) => {
  return { newsletter };
};
export default connect(
  mapStateToProps,
  actions
)(RenderNewsletter);
