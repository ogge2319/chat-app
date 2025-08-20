import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const getAllMessages = async (token) => {
  const response = await axios.get(`${API_BASE}/messages`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    withCredentials: true
  });
  return response.data;
};

export const createMessage = async (token, text) => {
  const response = await axios.post(
    `${API_BASE}/messages`,
    {
      text,
      conversationId: null
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    }
  );
  return response.data;
};

export const deleteMessage = async (token, msgId) => {
  const response = await axios.delete(`${API_BASE}/messages/${msgId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    withCredentials: true
  });
  return response.data;
};
