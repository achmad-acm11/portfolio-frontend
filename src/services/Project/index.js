const { default: API } = require("services");

const getProject = () => API.Get("Project");

const APIProject = {
  getProject,
};

export default APIProject;
