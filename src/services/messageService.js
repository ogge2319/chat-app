import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const getAllMessages = async (token) => {
    const response = await axios.post(
        `${API_BASE}/messages/all`,
        {token},
        {withCredentials: true}
    );
    return response.data;
    
}