// src/services/apiService.js
import axios from 'axios';

const apiService = axios.create({
    baseURL: 'http://seu-backend.com/api/',
});

export const fetchData = async (endpoint) => {
    try {
        const response = await apiService.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Erro ao chamar a API:', error);
        throw error;
    }
};
