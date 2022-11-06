import axios from 'axios';
import Swal from 'sweetalert2';

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
  try {
    const result = await api.post('/student', student);
    return result.data;
  } catch(error) {
    console.log(error);
    Swal.fire(`Erro ${error.response.status}`, error.response.data, 'error')
  }
};

export const updateStudent = async (id, student) => {
  try {
    const result = await api.put(`/student/${id}`, student);
    return result.data;
  } catch(error) {
    console.log(error);
    Swal.fire(`Erro ${error.response.status}`, error.response.data, 'error')
  }
};
