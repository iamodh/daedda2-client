import { getDelayState } from '@/store/delay';
import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use((response) => {
  const { enabled } = getDelayState();

  if (enabled)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response.data);
      }, 500);
    });

  return response.data;
});
