import axios from 'axios';

// Change this URL to the correct path and port of your API
const API_BASE_URL = 'https://sparkly-toffee-0c4f08.netlify.app/';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5173,
  headers: {'Content-Type': 'application/json'}
});

export default api;