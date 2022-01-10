const { default: API } = require("services");

const getStudyCase = () => API.Get("Study_case");

const APIStudyCase = {
  getStudyCase,
};

export default APIStudyCase;
