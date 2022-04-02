import axios from "axios";
// import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "http://nestjs-boilerplate-test.herokuapp.com/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("auth-token");

    if (authToken) {
      config.headers.authorization = `Bearer` + localStorage.getItem('auth-token');
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
