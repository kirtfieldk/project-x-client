import React from "react";
import HomePageHero from "./sub-comp/HomepageHero";
import FavPodcast from "./sub-comp/FavPodcast";
import ImgBlock from "../Components/sub-comp/img-block";
function Home() {
  return (
    <div>
      <div className="text-center open-title pt-5 pb-5">EARTHSIS</div>
      <HomePageHero />
      <div className="row">
        <div className="col-sm-7 ml-5 body-box shadow text-light h-50">
          <div className="title col-12 border-bottom">Project-x</div>
          <div className="body mt-3 ml-3">
            <div className="row">
              Live through the stories and journeys we write about. Project-x
              foucuses on the need to preserve, protect, and explore our natural
              world through the power of media. Our team curates vivid stories
              of our Earth, so that all readers can experiance the joys of
              exploration through their computer. In addition, we tackle and
              advocate for cleaner praticies and sustainable resources.
            </div>
          </div>
        </div>
        <div className="col-4 mt-3 border-bottom">
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
