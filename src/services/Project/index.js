const { default: API } = require("services");

const getProject = () => API.Get("Project");
const getDetailProject = (id) => API.Get(`Project/${id}`);

const APIProject = {
  getProject,
  getDetailProject,
};

export default APIProject;
