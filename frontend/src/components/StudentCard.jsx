import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import StudentContext from '../context/StudentContext';
import blankProfile from '../imgs/blank-profile.png';
import { deleteStudent } from '../services/students';
import { URL as SERVER_URL } from '../utils/api';

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

  // const SERVER_URL = import.meta.env.REACT_APP_URL || 'http://localhost:3001';

  const URL = `${SERVER_URL}/files`;

  return (
    <div className="card-container">
      <div className="student-info">
        <p className="student-name">{ name }</p>
        <p className="student-phone">{ `Tel: ${phone}` }</p>
        <p className="student-city">{ `${city} - ${uf}` }</p>
        <p className="student-street">{ `Rua ${street}, bairro ${region}` }</p>
        <p className="student-date">{ `Criado em: ${date}` }</p>
      </div>
      <img src={ image ? `${URL}/${image}` : blankProfile } alt={`${name} profile picture`}/>
      <div className="student-buttons">
        <Link to={`/edit/${_id}`} state={{ data: student }}>
          <button
            className="student-edit-button"
            type="button"
          >
            Editar
          </button>
        </Link>
        <button
          className="student-remove-button"
          type="button"
          onClick={onClick}
        >
          Excluir
        </button>
      </div>
    </div>
  )
}

export default StudentCard;
