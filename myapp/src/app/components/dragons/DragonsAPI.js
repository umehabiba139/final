import axios from 'axios';

const baseURL = 'https://api.spacexdata.com/v4/dragons';

export const fetchDragons = async () => {
  try {
    const response = await axios.get(`${baseURL}dragons`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch dragons');
  }
};