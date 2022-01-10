const { default: API } = require("services");

const getSkills = () => API.Get("Skills");

const APISkills = {
  getSkills,
};

export default APISkills;
