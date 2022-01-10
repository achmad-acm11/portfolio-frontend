const axios = require("axios");

const url = process.env.REACT_APP_API_URL;

const Get = (path) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${url}${path}`)
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const API = {
  Get,
};

export default API;
