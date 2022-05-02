import axios, { AxiosResponse } from "axios";
import { User, UserFormValues } from "../models/user";
import { store } from "../stores/Store";

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    if (token) config.headers!.Authorization = `Bearer ${token}`
    return config;
});

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const request = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody), 
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody), 
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody), 
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody), 
}

const Account = {
    current: () => request.get<User>('/user'),
    login: (user: UserFormValues) => request.post<User>('/user/login', user),
    register: (user: UserFormValues) => request.post<User>('/user/register', user)
}

const agent = {
    Account
}

export default agent;
