import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import StudentContext from '../context/StudentContext';
import blankProfile from '../imgs/blank-profile.png';
import { deleteStudent } from '../services/students';

function StudentCard({ student }) {
  const { name, createdAt, image, address, phone, _id } = student;
  const date = createdAt.substring(0, 10);
  const { city, uf, region, street } = address;

  const { setAtt, att } = useContext(StudentContext);

  const onClick = async () => {
    const { _id } = student;
    await deleteStudent(_id);
    setAtt(!att);
  };

  const URL = 'http://localhost:3001/files'
  return (
    <div>
      <h3>{ name }</h3>
      <h4>{ phone }</h4>
      <p>{ `${city} - ${uf}` }</p>
      <p>{ `Rua ${street}, bairro ${region}` }</p>
      <span>{ `Criado em: ${date}` }</span>
      <img src={ image ? `${URL}/${image}` : blankProfile } alt={`${name} profile picture`}/>
      <Link to={`/edit/${_id}`} state={{ data: student }}>
        <button
          type="button"
        >
          Editar
        </button>
      </Link>
      <button
        type="button"
        onClick={onClick}
      >
        Excluir
      </button>
    </div>
  )
}

export default StudentCard;
