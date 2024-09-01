import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000",
});
const getAxios = () => {
  return axiosPublic;
};

export default getAxios;
