import axios from 'axios';

const URL = 'http://localhost:3001';

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
  let res = await api.get(`/student/${id}`);
  return res.data;
};

export const createStudent = async (student, token) => {
    const result = await api.post('/student', student, { headers: { authorization: token }});
    return result.data;
};

export const updateStudent = async (id, student, token) => {
  const result = await api.put(`/student/${id}`, student, { headers: { authorization: token }});
  return result.data;
};

export const deleteStudent = async (id) => {
  await api.delete(`/student/${id}`);
};

export const uploadImage = async (formData) => {
  const result = await api.post('/image', formData)
  return result;
}

export const setLogin = async (username) => {
  const result = await api.post('/login', { username });
  return result.data;
};
