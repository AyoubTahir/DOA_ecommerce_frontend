import axios from 'axios';

export const BASE_URL = 'http://localhost:8000';

const BASE_URL_API = 'http://localhost:8000/api';

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        /*'X-Requested-With': 'XMLHttpRequest'*/
    },
    withCredentials: true
});