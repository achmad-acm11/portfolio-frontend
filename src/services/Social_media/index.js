import API from "../index";

const getSocialMedia = () => API.Get("Social_media");

const APISocialMedia = {
  getSocialMedia,
};
export default APISocialMedia;
