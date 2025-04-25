import axios from 'axios';

export const api = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });

export const getUsers    = () => api.get('/users');
export const createUser  = data => api.post('/users', data);
export const updateUser  = (id, data) => api.patch(`/users/${id}`, data);
export const deleteUser  = id => api.delete(`/users/${id}`);