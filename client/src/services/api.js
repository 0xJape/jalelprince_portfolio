import axios from 'axios';

// Data API (Render backend - always use Render for data)
const DATA_API_URL = process.env.REACT_APP_DATA_API_URL || 'https://jalelprince-portfolio.onrender.com/api';

// Chatbot API (Vercel serverless - same domain)
const CHATBOT_API_URL = '/api';

export const getProfile = async () => {
  try {
    const response = await axios.get(`${DATA_API_URL}/profile`);
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
};

export const getProjects = async () => {
  try {
    const response = await axios.get(`${DATA_API_URL}/projects`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

export const getExperience = async () => {
  try {
    const response = await axios.get(`${DATA_API_URL}/experience`);
    return response.data;
  } catch (error) {
    console.error('Error fetching experience:', error);
    return [];
  }
};

export const getEducation = async () => {
  try {
    const response = await axios.get(`${DATA_API_URL}/education`);
    return response.data;
  } catch (error) {
    console.error('Error fetching education:', error);
    return [];
  }
};

export const sendChatMessage = async (message) => {
  try {
    const response = await axios.post(`${CHATBOT_API_URL}/chatbot`, { message });
    return response.data;
  } catch (error) {
    console.error('Error sending chat message:', error);
    throw error;
  }
};
