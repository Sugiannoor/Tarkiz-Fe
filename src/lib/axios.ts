import storage from '@/utils/storage';
import Axios from 'axios';


const baseURL = import.meta.env.VITE_API_URL ?? 'https://dummyjson.com/';

export const axios = Axios.create({
  baseURL,
});

axios.interceptors.request.use((config) => {
  const token = storage.getToken();

  if (config.headers) {
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
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
    const prevRequest = error?.config;
    if (error?.response?.status === 401 && !prevRequest?.sent) {
      storage.clearToken();
      window.location.replace('/login');
      // prevRequest.sent = true
      // const newAccessToken = await refresh()
      // prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
      // return axios(prevRequest)
    }

    return Promise.reject(error);
  }
);
