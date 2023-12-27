import axios from 'axios';

const baseURL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = async () => {
  try {
    const response = await axios.get(`${baseURL}missions`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch missions');
  }
};