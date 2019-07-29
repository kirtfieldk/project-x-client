import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../Actions";
var HtmlToReactParser = require("html-to-react").Parser;
const Article = ({ mainPost, selectBlogpost, match: { params } }) => {
  useEffect(() => {
    mainPost(params.id);
  }, []);

  if (selectBlogpost !== null) {
    const imageStyle = {
      backgroundImage: "url(" + selectBlogpost.data.blogImg + ")",
      height: "63vh",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };
    // STUFF NEEDED TO RENDER HTML TAGS INTO REACT
    const htmlInput = selectBlogpost.data.body;
    var htmlToReactParser = new HtmlToReactParser();
    var reactElement = htmlToReactParser.parse(htmlInput);
    // //////////////////////////////////////////////////////////////////
    return (
      <div className="article-begin">
        <div className="article-title mt-5 offset-2">
          <h1>{selectBlogpost.data.title}</h1>
          <p className="mt-3 border-bottom col-8 article-author">
            {selectBlogpost.data.author}
          </p>
          <p className=" article-date">{selectBlogpost.data.dateAdded}</p>
        </div>
        <div style={imageStyle} className="article-img" />
        <div className="col-12 border-bottom">
          <div className="offset-3  mt-5 article-desc">
            <h2 className="text-muted">{selectBlogpost.data.desc} </h2>
          </div>
          <div
            className=" offset-2 col-8 mb-3 article-body mt-3"
            id="render-body"
          >
            {reactElement}
          </div>
        </div>
        <div className="row offset-2">
          <p className="mt-3 article-author ">{selectBlogpost.data.author}</p>
          <p className=" mt-3 article-date offset-6">
            {selectBlogpost.data.dateAdded}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="loading">
        <div className="loading-article shadow-lg">
          <div className="ball" />
        </div>
      </div>
    );
  }
};
const mapStateToProps = ({ selectBlogpost }) => {
  return {
    selectBlogpost
  };
};
export default connect(
  mapStateToProps,
  actions
)(Article);
