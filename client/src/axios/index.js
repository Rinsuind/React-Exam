import axios from 'axios';

const customAxios = axios.create({
    baseURL: 'http://localhost:4200/',
    withCredentials: true,
});

export default customAxios;
