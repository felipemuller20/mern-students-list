import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { createStudent, updateStudent } from '../services/students';
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

  const delay = (time) => new Promise(resolve => setTimeout(resolve, time));

  const handleCreate = async () => {
    const formStudent = {
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
      await createStudent(formStudent);
      Swal.fire({
        icon: 'success',
        title: 'Aluno cadastrado com sucesso',
        showConfirmButton: false,
        timer: 1500
      })
      await delay(1500)
      history('/')
    } catch(error) {
      console.log(error);
      Swal.fire(`Erro ${error.response.status}`, error.response.data, 'error')
    }
  }

  const handleUpdate = async () => {
    const formStudent = {
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
      await updateStudent(studentId, formStudent);
      Swal.fire({
        icon: 'success',
        title: 'Cadastro atualizado com sucesso',
        showConfirmButton: false,
        timer: 1500
      })
      await delay(1500)
      history('/')
    } catch(error) {
      console.log(error);
      Swal.fire(`Erro ${error.response.status}`, error.response.data, 'error')
    }
  }

  return (
    <form>
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
            type="button"
            onClick={handleCreate}
          >
            Cadastrar
          </button>
        ) : (
          <button
          type="button"
          onClick={handleUpdate}
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