import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://192.168.0.5:3333'
    // baseURL: 'http://172.18.46.92:3333'
    baseURL: 'http://172.20.10.2:3333'
});

export default api;