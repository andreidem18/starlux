import axiosOriginal from 'axios';
import store from '../redux/store';
import { setNotification } from '../redux/slices/app.slice';
import { logout } from '../redux/slices/auth.slice';

const axios = axiosOriginal.create({
    baseURL: import.meta.env.VITE_API_URL,
});

axios.interceptors.request.use(config => {
    const token = store.getState().auth.token;
    if (token)
        config.headers.Authorization = `Bearer ${token}`;
    return config;
})

axios.interceptors.response.use((res) => {
    return res;
}, error => {
    const isLoginEndpoint = error.request?.responseURL.includes("login");
    const status = error.response?.status
    const isAuthError = !isLoginEndpoint && (status === 401 || status === 403);
    const otherErrorInLogin = isLoginEndpoint && !(status === 401 || status === 403)
    console.log(error);
    if (isAuthError) {
        store.dispatch(logout());
        return Promise.reject(error);
    }
    if (otherErrorInLogin) {
        store.dispatch(setNotification('There was an error'));
        return Promise.reject(error);
    }
    if (!isLoginEndpoint) {
        store.dispatch(setNotification('There was an error'));
        return Promise.reject(error);
    }
    return Promise.reject(error);
})


export default axios;
