import axios from 'axios';
import { URL } from '../utils/api';

// const URL = 'https://astute-silver-production.up.railway.app/';

const api = axios.create({
  baseURL: URL,
});

export const fetchStudents = async () => {
  let res = await api.get('/students');
  return res.data;
};

export const fetchStudentsAlphabetic = async () => {
  let res = await api.get('/students/alphabetic-order');
  return res.data;
};

export const fetchStudent = async (id) => {
  let res = await api.get(`/students/${id}`);
  return res.data;
};

export const createStudent = async (student) => {
    const result = await api.post('/students', student);
    return result.data;
};

export const updateStudent = async (id, student) => {
  const result = await api.put(`/students/${id}`, student);
  return result.data;
};

export const deleteStudent = async (id) => {
  await api.delete(`/students/${id}`);
};

export const uploadImage = async (formData) => {
  const result = await api.post('/image', formData)
  return result;
}
