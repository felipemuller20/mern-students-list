import React from 'react';

function Form() {
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
          />
        </label>
        <label htmlFor="phone">
          Telefone:
          <input
            type="text"
            name="phone"
            id="phone"
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
          />
        </label>
        <label htmlFor="uf">
          UF:
          <input
            type="text"
            name="uf"
            id="uf"
          />
        </label>
        <label htmlFor="address">
          Endereço:
          <input
            type="text"
            name="address"
            id="address"
          />
        </label>
      </fieldset>
    </form>
  );
}

export default Form;