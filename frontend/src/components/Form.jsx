import React, { useState } from 'react';
import { createStudent, updateStudent } from '../services/students';
import { useLocation } from "react-router-dom";

function Form({ type, studentId }) {
  const location = useLocation();
  const data = location.state?.data;
  const [name, setName] = data ? useState(data.name) : useState('');
  const [phone, setPhone] = data ? useState(data.phone.toString()) : useState('');
  const [city, setCity] = data ? useState(data.address.city) : useState('');
  const [uf, setUf] = data ? useState(data.address.uf) : useState('');
  const [region, setRegion] = data ? useState(data.address.region) : useState('');
  const [street, setStreet] = data ? useState(data.address.street) : useState('');

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
    await createStudent(formStudent);
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
    await updateStudent(studentId, formStudent);
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
    </form>
  );
}

export default Form;