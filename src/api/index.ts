import axios from 'axios';

const api = axios.create({
    baseURL: process.env.OAUTH_URL
})

export default api;