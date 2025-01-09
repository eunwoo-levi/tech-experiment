import axios from 'axios';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5174',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});
