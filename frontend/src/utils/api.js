//This file is to set the configuration for axios
import axios from "axios";

const axiosInstance = axios.create();
//This intercepts the request instance of axios, this in my case I put the Backend url to avoid long url during fetching.
//Example:
//instead of axios.get("http://localhost:5000/expenses") -> axios.get("/expenses")
axiosInstance.interceptors.request.use(
	async (config) => {
		config.baseURL = process.env.REACT_APP_BACKEND_URL;
		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);

export default axiosInstance;
