import axios from 'axios';

const PORT = 3001;

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

export const fetchStudents = async () => {
  let res = await api.get('/students');
  return res.data;
};

export const fetchStudent = async (id) => {
  let res = await api.get(`/student/${id}`);
  return res.data;
};

export const createStudent = async (student) => {
    const result = await api.post('/student', student);
    return result.data;
};

export const updateStudent = async (id, student) => {
  const result = await api.put(`/student/${id}`, student);
  return result.data;
};

export const deleteStudent = async (id) => {
  await api.delete(`/student/${id}`);
};
