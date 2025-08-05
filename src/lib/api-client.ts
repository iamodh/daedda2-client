import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiaGFuX3VzZXIiLCJpYXQiOjE3NTQ0MDA0OTksImV4cCI6MTc1NDQ0MzY5OX0._4oYDKVtOJJhEPo6kqHzOu1W0ePKQLIGGdggCfmDjl8`;

  return config;
});

api.interceptors.response.use((response) => {
  //   return response.data;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response.data);
    }, 1000);
  });
});
