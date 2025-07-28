import axios from "axios";
import { getLocalStorageHook } from "../../hooks";

// const baseUrl = import.meta.env.VITE_BASE_URL;
const baseUrl = "https://api.radingold.top";

const token = getLocalStorageHook("token")

export const http = axios.create({
  baseURL: baseUrl,
});

const onSucces = (response) => {
  return response;
};

const onError = () => {};

axios.interceptors.response.use(onSucces, onError);


http.interceptors.request.use((opt) => {
  if (token) {
    opt.headers.Authorization = "Bearer " + token;
  }
  return opt;
});