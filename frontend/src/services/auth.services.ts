import { CreateUser, LoginResponse } from '../interfaces';
import axios from '../utils/axios'

interface LoginParams {
    email: string;
    password: string;
}

export const loginRequest = (credentials: LoginParams) => {
    return axios.post<LoginResponse>('/login/', credentials)
}

export const createUserRequest = (data: CreateUser) => {
    return axios.post('/users/', data);
}

