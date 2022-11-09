import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { estados } from 'estados-br';
import { handleSubmit } from '../utils/crudUtils';
import './form.css';

function Form({ type, studentId }) {
  const location = useLocation();
  const history = useNavigate();

  const data = location.state?.data;
  const [name, setName] = data ? useState(data.name) : useState('');
  const [phone, setPhone] = data ? useState(data.phone.toString()) : useState('');
  const [city, setCity] = data ? useState(data.address.city) : useState('');
  const [uf, setUf] = data ? useState(data.address.uf) : useState('AC');
  const [region, setRegion] = data ? useState(data.address.region) : useState('');
  const [street, setStreet] = data ? useState(data.address.street) : useState('');
  const [image, setImage] = useState('');

  return (
    <form 
      onSubmit={(event) => handleSubmit(event, image, history, name, phone, city, uf, region, street, studentId, type)}
      className='infos-form'
    >
      <fieldset>
        <legend>Dados pessoais</legend>
        <label htmlFor="name">
          Nome completo:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />
        <label htmlFor="phone">
          Telefone:
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={ phone }
          onChange={ ({target}) => setPhone(target.value) }
        />
        <label>
          Imagem:
        </label>
        <input
          type="file"
          name="image"
          onChange={ ({ target }) => setImage(target.files[0]) }
        />
      </fieldset>

      <fieldset>
        <legend>Endereço</legend>
        <label htmlFor="city">
          Cidade:
        </label>          
          <input
            type="text"
            name="city"
            id="city"
            value={ city }
            onChange={ ({ target }) => setCity(target.value) }
          />
        <label htmlFor="uf">
          UF:
        </label>
          <select name="uf" value={ uf } onChange={({target}) => setUf(target.value)}>
            {
              estados.map((estado) => (
                <option key={estado.sigla} value={estado.sigla}>{estado.sigla}</option>
              ))
            }
          </select>
        <label htmlFor="region">
          Bairro:
        </label>
        <input
          type="text"
          name="region"
          id="region"
          value={ region }
          onChange={ ({ target }) => setRegion(target.value) }
        />
        <label htmlFor="street">
          Rua:
        </label>
          <input
            type="text"
            name="street"
            id="street"
            value={ street }
            onChange={ ({ target }) => setStreet(target.value) }
          />
      </fieldset>
      {
        type === 'create' ? (
          <button
            className="form-submit-btn"
            type="submit"
          >
            Cadastrar
          </button>
        ) : (
          <button
            className="form-submit-btn"
            type="submit"
          >
            Atualizar cadastro
          </button>
        )
      }
      <Link to="/home">
        <button
          className="form-cancel-btn"
          type="button"
        >
          Cancelar
        </button>
      </Link>
    </form>
  );
}

export default Form;
