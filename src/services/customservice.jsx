import axios from "axios";

const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

console.log("API_URL:", process.env.EXPO_PUBLIC_API_URL);

const customService = () => {
    const getApi = async (url) => {
        const response = await api.get(url);
        return response.data;
    };

    const postApi = async (url, data) => {
        const response = await api.post(url, data);
        return response.data;
    };

    const putApi = async (url, data) => {
        const response = await api.put(url, data);
        return response.data;
    };

    const deleteApi = async (url) => {
        const response = await api.delete(url);
        return response.data;
    };

    return {
        getApi,
        postApi,
        putApi,
        deleteApi,
    };
};

export default customService;
