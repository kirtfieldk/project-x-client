import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import NotFound from "../NotFound";
const AdminScreen = ({ loginToken }) => {
  if (loginToken)
    return (
      <div className="col-2 h-50 ml-5 bg-light rounded shadow mt-3">
        <h3 className="text-center">Admin Page</h3>
        <div className="row">
          <div className="col-12 pt-3 border-bottom select">
            <Link to="/admin/blogpost">Blog Post</Link>
          </div>
          <div className="col-12 pt-3 border-bottom select">
            <Link to="/admin/podcast">Podcasts</Link>
          </div>
          <div className="col-12 pt-3 border-bottom select">
            <Link to="/admin/podcast">Favorite Podcast</Link>
          </div>
          <div className="col-12 pt-3 border-bottom select">
            <Link to="/admin/outsource">Link Reads</Link>
          </div>
          <div className="col-12 pt-3 border-bottom select">
            <Link to="/admin/images">Images</Link>
          </div>
          <div className="col-12 pt-3 border-bottom select">
            <Link to="/admin/newsletter">Newsletter</Link>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div>
        <NotFound />
      </div>
    );
};
const mapStateToProps = ({ loginToken }) => {
  return {
    loginToken
  };
};
export default connect(mapStateToProps)(AdminScreen);
