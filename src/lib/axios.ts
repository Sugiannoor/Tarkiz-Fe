import storage from '@/utils/storage';
import Axios from 'axios';


const baseURL = import.meta.env.VITE_API_BASE_URL;

export const axios = Axios.create({
  baseURL
});

axios.interceptors.request.use((config) => {
  const token = storage.getToken();

  if (config.headers) {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers.Accept = 'application/json';
  }

  return config;
});


axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error?.response?.status || 0;
    if (status === 401) {
      if (localStorage.getItem("token")) {
        localStorage.clear();
        window.location.assign("/");
        return Promise.reject(error);
      } else {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
