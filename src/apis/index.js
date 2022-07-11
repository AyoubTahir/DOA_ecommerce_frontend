import axios from 'axios';

export const BASE_URL = 'http://localhost:8000';

const BASE_URL_API = 'http://localhost:8000/api';

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        /*'X-Requested-With': 'XMLHttpRequest'*/
    },
    withCredentials: true
});

instance.interceptors.request.use((req) => {
    if (localStorage.getItem('auth_token')) {
        req.headers.Authorization = `Bearer ${localStorage.getItem('auth_token')}`;
    }
    return req;
})

export const csrfCookie = () => instance.get('/sanctum/csrf-cookie')
export const login = (inputs) => instance.post('api/login', inputs)
export const logout = () => instance.post('api/logout')
export const checkToken = () => instance.post('api/checktoken')
export default instance