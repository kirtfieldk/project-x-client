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
            <h2 className="ml-3">Readt dis</h2>
            <RenderBlogpost deleteBlogPost={false} />
          </div>
        </div>
        {/* Linked Podcast */}
        <div className="col-2 mt-3 offset-4">
          <RenderPodcast />
        </div>
      </div>
      {/* End Of Row */}
      {/* Row Two */}
      {/* Linked outSource */}
      <h2 className="col-12 text-center">Read the Ideas We Care About</h2>
      <div className="ml-3 mr-3 pb-5">
        <LinkOutsource deleteOutsource={false} />
      </div>
    </>
  );
}
export default Post;
