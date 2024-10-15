import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Replace with your actual API URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const signUp = async (email: string, password: string) => {
  const response = await api.post('/signup', { email, password });
  return response.data;
};

export const connectYNAB = async (code: string) => {
  const response = await api.post('/connect-ynab', { code });
  return response.data;
};

export const connectExist = async (code: string) => {
  const response = await api.post('/connect-exist', { code });
  return response.data;
};

export const saveSelectedAccounts = async (accountIds: number[]) => {
  const response = await api.post('/save-accounts', { accountIds });
  return response.data;
};

export const getSyncStatus = async () => {
  const response = await api.get('/sync-status');
  return response.data;
};

export default api;