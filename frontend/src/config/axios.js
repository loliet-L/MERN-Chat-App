import axios from "axios";

const axiosinstance = axios.create({
    baseURL: import.meta.env.VITE_URL,
});

export default axiosinstance;