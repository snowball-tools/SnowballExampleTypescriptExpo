import axios from "axios";

// Use your own API URL
const API_URL = "http://your-api-url.com";

export const authenticate = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/authenticate`, {
    email,
    password,
  });
  return response.data;
};

export const register = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/register`, { email, password });
  return response.data;
};

export const recover = async (email: string) => {
  const response = await axios.post(`${API_URL}/recover`, { email });
  return response.data;
};

export const getUser = async (id: string) => {
  const response = await axios.get(`${API_URL}/users/${id}`);
  return response.data;
};
