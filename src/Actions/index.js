import axios from "axios";
// ALL ACTIONS NEEDED
export const fetchImgs = () => async dispatch => {
  const response = await axios.get("/fetchimg");
  dispatch({ type: "FETCH_IMG", payload: response.data });
};
// Blogpost types
export const fetchBlogpost = () => async dispatch => {
  const response = await axios.get("/blogpost");
  dispatch({ type: "FETCH_BLOGPOST", payload: response.data });
};

export const mainPost = value => async dispatch => {
  const response = await axios.get(`/blogpost/${value}`);
  console.log(response.data);
  dispatch({ type: "SELECTED_BLOGPOST", payload: response.data });
};
export const addBlogpost = value => async dispatch => {
  const response = await axios.post("/blogpost", value);
  dispatch({ type: "ADD_BLOGPOST", payload: response.data });
};

// Outsource types
export const fetchOutsource = () => async dispatch => {
  const response = await axios.get("/outsourcelinks");
  dispatch({ type: "FETCH_OUTSOURCE", payload: response.data });
};

export const addOutsource = value => async dispatch => {
  const response = await axios.post("/outsourcelinks", value);
  dispatch({ type: "ADD_OUTSOURCE", payload: response.data });
};

// PodcastLink

export const fetchPodcast = () => async dispatch => {
  const response = await axios.get("/podcast");

  dispatch({ type: "FETCH_PODCAST", payload: response.data });
};

export const addPodcast = value => async dispatch => {
  const response = await axios.post("/podcast", value);
  console.log(response);
  dispatch({ type: "ADD_PODCAST", payload: response.data });
};

export const selectPodcast = value => async dispatch => {
  const response = await axios.get(`podcast/${value}`);
  dispatch({ type: "SELECT_PODCAST", payload: response.data });
};

// SIGN IN
export const logIn = value => async dispatch => {
  const response = await axios.post("/login", value);
  console.log(response.data.token);
  const adminToken = `Bearer ${response.data.token}`;
  localStorage.setItem(`adminToken`, adminToken);
  axios.defaults.headers.common[`Autherization`] = adminToken;

  dispatch({ type: "LOGIN", payload: response.data });
};
// Newsletter
export const SubmitNewsletter = value => async dispatch => {
  const response = await axios.post("/newsletter", value);
  dispatch({ type: "SUBMIT_NEWSLETTER", payload: response.data });
};
export const getNewsletter = () => async dispatch => {
  const response = await axios.get("/newsletter");
  dispatch({ type: "NEWSLETTER", payload: response.data });
};
