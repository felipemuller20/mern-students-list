import axios from 'axios';

const PORT = 3000;

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

export const fetchStudents = async () => {
  let res = await api.get('/students');
  return res.data;
};
