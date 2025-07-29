import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

api.interceptors.response.use((response) => {
  return response.data;
});
