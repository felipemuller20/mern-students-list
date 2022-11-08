import { uploadImage, createStudent, updateStudent } from '../services/students';
import Swal from 'sweetalert2';

const delay = (time) => new Promise(resolve => setTimeout(resolve, time));

const apiCreateStudent = async (formStudent, createStudent, Swal, history) => {
  await createStudent(formStudent);
  Swal.fire({
    icon: 'success',
    title: 'Aluno cadastrado com sucesso',
    showConfirmButton: false,
    timer: 1500
  })
  await delay(1500)
  history('/home')
}

const apiUpdateStudent = async (formStudent, updateStudent, studentId, history, Swal) => {
  await updateStudent(studentId, formStudent);
  Swal.fire({
    icon: 'success',
    title: 'Cadastro atualizado com sucesso',
    showConfirmButton: false,
    timer: 1500
  })
  await delay(1500)
  history('/home')
}

export const handleSubmit = async (event, image, history, name, phone, city, uf, region, street, studentId, type) => {
  event.preventDefault();
  if (type) { // CREATE
    const formData = new FormData();
    formData.append('image', image);

    let formStudent;

    if (image) {
      try {
        const result = await uploadImage(formData);
        formStudent = {
          name,
          phone,
          image: result.data.filename,
          address: {
            city,
            uf,
            region,
            street,
          }
        }
        await apiCreateStudent(formStudent, createStudent, Swal, history);
      } catch (error) {
          if (error.response.status === 500) {
            Swal.fire(`Arquivos suportados: PNG ou JPG`, 'Tamanho máximo do arquivo: 3MB', 'error')
          } else {
            Swal.fire(`Erro ${error.response.status}`, error.response.data, 'error')
          }
      }
    } else {
      formStudent = {
        name,
        phone,
        image: '',
        address: {
          city,
          uf,
          region,
          street,
        }
      }
      try {
       await apiCreateStudent(formStudent, createStudent, Swal, history);
      } catch (error) {
        Swal.fire(`Erro ${error.response.status}`, error.response.data, 'error');
      }
    }
  } else { // UPDATE ------------
    const formData = new FormData();
    formData.append('image', image);

    let formStudent;

    if (image) {
      try {
        const result = await uploadImage(formData);
        formStudent = {
          name,
          phone,
          image: result.data.filename,
          address: {
            city,
            uf,
            region,
            street,
          }
        }
        await apiUpdateStudent(formStudent, updateStudent, studentId, history, Swal);
      } catch (error) {
          if (error.response.status === 500) {
            Swal.fire(`Error: Image must be PNG or JPG`, 'File size must be less than 3MB', 'error')
          } else {
            Swal.fire(`Erro ${error.response.status}`, error.response.data, 'error')
          }
      }
    } else {
      formStudent = {
        name,
        phone,
        address: {
          city,
          uf,
          region,
          street,
        }
      }
      try {
        await apiUpdateStudent(formStudent, updateStudent, studentId, history, Swal);
      } catch (error) {
        Swal.fire(`Erro ${error.response.status}`, error.response.data, 'error');
      }
    }
  }
}