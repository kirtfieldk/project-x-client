import React from "react";
import RenderBlogpost from "./sub-comp/RenderList/RenderBlogpost";
import HomePageHero from "./sub-comp/HomepageHero";
import FavPodcast from "./sub-comp/FavPodcast";
import ImgBlock from "../Components/sub-comp/img-block";
function Home() {
  return (
    <div>
      <div className="text-center open-title smaller-size">EARTHSIS</div>
      <HomePageHero />
      <div className="row">
        <div className="col-sm-7 ml-5 body-box shadow text-light h-50">
          <div className="title col-12 border-bottom">Project-x</div>
          <div className="body mt-3 ml-3">
            <div className="row h6 small ">
              Project X exists to create a community that offers outdoor
              enthusiasts a chance to share their own stories and adventures.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 row">
        <div className="col-5 offset-1">
          <RenderBlogpost />
        </div>
        <div className="col-4 mt-3 offset-1 border-bottom">
          <FavPodcast />
        </div>

        <div className=" mt-5 mb-5  col-12">
          <ImgBlock />
        </div>
      </div>
    </div>
  );
}

export default Home;
