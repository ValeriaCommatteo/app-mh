import axios from 'axios';

const API_BASE_URL = 'https://tu-api.com/api';

export const getCities = async () => {
  const response = await axios.get(`${API_BASE_URL}/cities`);
  return response.data;
};