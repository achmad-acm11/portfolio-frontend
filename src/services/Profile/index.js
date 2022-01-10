import API from "../index";

const getProfile = () => API.Get("Profile");

const APIProfile = {
  getProfile,
};

export default APIProfile;
