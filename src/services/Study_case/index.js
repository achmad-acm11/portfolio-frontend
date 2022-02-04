const { default: API } = require("services");

const getStudyCase = () => API.Get("Study_case");
const getStudyCaseDetail = (id) => API.Get(`Study_case/${id}`)

const APIStudyCase = {
  getStudyCase,
  getStudyCaseDetail
};

export default APIStudyCase;
