// import caseStudyJson from "json/case_study.json";

const { default: API } = require("services");

const getStudyCase = () => API.Get("Study_case");
const getStudyCaseDetail = (id) => API.Get(`Study_case/${id}`);
// const getStudyCaseDetail = (id) => {
//   const caseStudyDetail = caseStudyJson.filter((item, index) => {
//     if (item.id === parseInt(id)) {
//       return item;
//     } else {
//       return null;
//     }
//   });
//   return caseStudyDetail[0];
// };

const APIStudyCase = {
  getStudyCase,
  getStudyCaseDetail,
};

export default APIStudyCase;
