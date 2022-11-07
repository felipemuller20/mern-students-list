import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { createStudent, updateStudent, uploadImage } from '../services/students';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Form({ type, studentId }) {
  const location = useLocation();
  const history = useNavigate();

  const data = location.state?.data;
  const [name, setName] = data ? useState(data.name) : useState('');
  const [phone, setPhone] = data ? useState(data.phone.toString()) : useState('');
  const [city, setCity] = data ? useState(data.address.city) : useState('');
  const [uf, setUf] = data ? useState(data.address.uf) : useState('');
  const [region, setRegion] = data ? useState(data.address.region) : useState('');
  const [street, setStreet] = data ? useState(data.address.street) : useState('');
  const [image, setImage] = useState('');

  const delay = (time) => new Promise(resolve => setTimeout(resolve, time));

  const apiCreateStudent = async (formStudent) => {
    await createStudent(formStudent);
    Swal.fire({
      icon: 'success',
      title: 'Aluno cadastrado com sucesso',
      showConfirmButton: false,
      timer: 1500
    })
    await delay(1500)
    history('/')
  }

  const apiUpdateStudent = async (formStudent) => {
    await updateStudent(studentId, formStudent);
    Swal.fire({
      icon: 'success',
      title: 'Cadastro atualizado com sucesso',
      showConfirmButton: false,
      timer: 1500
    })
    await delay(1500)
    history('/')
  }

  const handleCreate = async (event) => {
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
          await apiCreateStudent(formStudent);
        } catch (error) {
            if (error.response.status === 500) {
              Swal.fire(`Error: Image must be PNG or JPG`, 'File size must be less than 5MB', 'error')
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
         await apiCreateStudent(formStudent);
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
          await apiUpdateStudent(formStudent);
        } catch (error) {
            if (error.response.status === 500) {
              Swal.fire(`Error: Image must be PNG or JPG`, 'File size must be less than 5MB', 'error')
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
          await apiUpdateStudent(formStudent);
        } catch (error) {
          Swal.fire(`Erro ${error.response.status}`, error.response.data, 'error');
        }
      }
    }
  }

  return (
    <form onSubmit={handleCreate}>
      <fieldset>
        <legend>Dados pessoais</legend>
        <label htmlFor="name">
          Nome completo:
          <input
            type="text"
            name="name"
            id="name"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label htmlFor="phone">
          Telefone:
          <input
            type="text"
            name="phone"
            id="phone"
            value={ phone }
            onChange={ ({target}) => setPhone(target.value) }
          />
        </label>
        <label>
          Imagem:
          <input
            type="file"
            name="image"
            onChange={ ({ target }) => setImage(target.files[0]) }
          />
      </label>
      </fieldset>
      <fieldset>
        <legend>Endereço</legend>
        <label htmlFor="city">
          Cidade:
          <input
            type="text"
            name="city"
            id="city"
            value={ city }
            onChange={ ({ target }) => setCity(target.value) }
          />
        </label>
        <label htmlFor="uf">
          UF:
          <input
            type="text"
            name="uf"
            id="uf"
            value={ uf }
            onChange={ ({ target }) => setUf(target.value) }
          />
        </label>
        <label htmlFor="region">
          Bairro:
          <input
            type="text"
            name="region"
            id="region"
            value={ region }
            onChange={ ({ target }) => setRegion(target.value) }
          />
        </label>
        <label htmlFor="street">
          Rua:
          <input
            type="text"
            name="street"
            id="street"
            value={ street }
            onChange={ ({ target }) => setStreet(target.value) }
          />
        </label>
      </fieldset>
      {
        type === 'create' ? (
          <button
            type="submit"
          >
            Cadastrar
          </button>
        ) : (
          <button
          type="submit"
        >
          Atualizar cadastro
        </button>
        )
      }
      <Link to="/">
        <button
          type="button"
        >
          Cancelar
        </button>
      </Link>
    </form>
  );
}

export default Form;