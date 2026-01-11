import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/profile`);
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
};

export const getProjects = async () => {
  try {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

export const getExperience = async () => {
  try {
    const response = await axios.get(`${API_URL}/experience`);
    return response.data;
  } catch (error) {
    console.error('Error fetching experience:', error);
    return [];
  }
};

export const getEducation = async () => {
  try {
    const response = await axios.get(`${API_URL}/education`);
    return response.data;
  } catch (error) {
    console.error('Error fetching education:', error);
    return [];
  }
};
