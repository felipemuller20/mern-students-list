import React from 'react';
import { Link } from 'react-router-dom';
import blankProfile from '../imgs/blank-profile.png';

function StudentCard({ student }) {
  const { name, createdAt, image, address, phone, _id } = student;
  const date = createdAt.substring(0, 10);

  return (
    <div>
      <h3>{ name }</h3>
      <h4>{ phone }</h4>
      <h4>{ address }</h4>
      <span>{ `Criado em: ${date}` }</span>
      <img src={ image ? image : blankProfile } alt={`${name} profile picture`}/>
      <Link to={`/edit/${_id}`}>
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
