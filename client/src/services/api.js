import axios from 'axios';
import { supabase } from '../config/supabase';

// Chatbot API (Vercel serverless - same domain)
const CHATBOT_API_URL = '/api';

export const getProfile = async () => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .limit(1)
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
};

export const getProjects = async () => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('order', { ascending: true });
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

export const getExperience = async () => {
  try {
    const { data, error } = await supabase
      .from('experiences')
      .select('*')
      .order('order', { ascending: true });
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching experience:', error);
    return [];
  }
};

export const getEducation = async () => {
  try {
    const { data, error } = await supabase
      .from('education')
      .select('*')
      .order('order', { ascending: true });
    
    if (error) throw error;
    return data || [];
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
