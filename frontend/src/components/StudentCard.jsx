import React from 'react';
import { Link } from 'react-router-dom';
import blankProfile from '../imgs/blank-profile.png';

function StudentCard({ student }) {
  const { name, createdAt, image, address, phone, _id } = student;
  const date = createdAt.substring(0, 10);
  const { city, uf, region, street } = address;
  return (
    <div>
      <h3>{ name }</h3>
      <h4>{ phone }</h4>
      <p>{ `${city} - ${uf}` }</p>
      <p>{ `Rua ${street}, bairro ${region}` }</p>
      <span>{ `Criado em: ${date}` }</span>
      <img src={ image ? image : blankProfile } alt={`${name} profile picture`}/>
      <Link to={`/edit/${_id}`} state={{ data: student }}>
        <button
          type="button"
        >
          Editar
        </button>
      </Link>
      <button
        type="button"
      >
        Excluir
      </button>
    </div>
  )
}

export default StudentCard;
