import React from "react";
import LinkOutsource from "./sub-comp/RenderList/RenderLinkReads";
import RenderPodcast from "./sub-comp/RenderList/RenderPodcast";
import RenderBlogpost from "./sub-comp/RenderList/RenderBlogpost";
function Post() {
  return (
    <>
      <div className="col-8 mt-3 offset-2 border-bottom border-top post-bio mb-5">
        We deliver content every Monday and Thursday through our social media
      </div>
      {/* One Row */}
      <div className=" bg-light  row">
        <div className="col-5   ml-3">
          <div>
            {/* Linked outSource */}
            <LinkOutsource />
          </div>
        </div>
        {/* Linked Podcast */}
        <div className="col-2 mt-3 offset-4">
          <RenderPodcast />
        </div>
      </div>
      {/* End Of Row */}
      <div className="row col-12">
        <RenderBlogpost deleteBlogPost={false} />
      </div>
    </>
  );
}
export default Post;
