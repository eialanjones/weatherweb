import axios from 'axios';

export const weatherAPI = process.env.REACT_APP_API_URL;
export const weatherIconsAPI = process.env.REACT_APP_API_GEO;

export const api = axios.create({
  baseURL: weatherAPI,
});

export const apiIcons = axios.create({
  baseURL: weatherIconsAPI,
});

// lat={lat}&lon={lon}&exclude={part}&appid=APP_API_ID
