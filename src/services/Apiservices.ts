import axios from "axios";

axios.defaults.baseURL = "https://www.themealdb.com";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const api = {
  getMenuLists: async () => {
    let response;
    try {
      response = await axios.get("/api/json/v1/1/search.php?f=b");
    } catch (error) {
      response = error;
    }
    return response;
  },
};

export default api;
