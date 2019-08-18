import { combineReducers } from "redux";
// import actions
import podcastList from "./podcastList";
import blogpostList from "./blogPostList";
import selectBlogpost from "./selectBlogpost";
import loginToken from "./LoginToken";
import imageList from "./imageList";
import selectedImg from "./selectedImg";
import listLinkRead from "./listLinkRead";
import newsletter from "./newsletter";
import selectedPodcast from "./selectedPodcast";
import submitNewsletter from "./submitNewsletter";
import loading from "./loading";
import newsletterLoading from "./newsletterLoading";

export default combineReducers({
  podcastList,
  blogpostList,
  selectBlogpost,
  loginToken,
  imageList,
  selectedImg,
  listLinkRead,
  newsletter,
  submitNewsletter,
  selectedPodcast,
  loading,
  newsletterLoading
});
