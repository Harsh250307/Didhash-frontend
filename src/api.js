
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://didhash.onrender.com', // Replace with your Render backend URL
});

export default instance;
