const { default: API } = require("services");

const getQualification = () => API.Get("Qualification");

const APIQualification = {
  getQualification,
};

export default APIQualification;
