import projectJson from "json/project.json";

const { default: API } = require("services");

const getProject = () => API.Get("Project");
// const getDetailProject = (id) => API.Get(`Project/${id}`);
const getDetailProject = (id) => {
  let projectDetail = {}
  projectJson.forEach(item => {
    if (item.id === parseInt(id)) {
      projectDetail = item;
    }
  });
  return projectDetail;
};

const APIProject = {
  getProject,
  getDetailProject,
};

export default APIProject;
