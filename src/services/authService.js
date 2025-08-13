import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const getCSRFToken = async () => {
    try {
        const response = await axios.patch(`${API_BASE}/csrf`, {}, { withCredentials: true });
        return response.data.csrfToken;
    } catch (error) {
        console.log("Fel vid hämtning av CSRF token", error);
        throw error;
    }
}

export const registerUser = async (userData, csrfToken) => {
    try {
        const payload = { ...userData, csrfToken };
        const response = await axios.post(
            `${API_BASE}/auth/register`,
            payload
        );
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

export const loginUser = async (credentials, csrfToken) => {
    try {
        console.log("CSRF-token:", csrfToken);
        console.log("Credentials:", credentials);
        const payload = { ...credentials, csrfToken };
        const response = await axios.post(
            `${API_BASE}/auth/token`,
            payload,
            { withCredentials: true }
        );
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};