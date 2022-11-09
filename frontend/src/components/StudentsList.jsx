import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import StudentContext from '../context/StudentContext';
import StudentCard from './StudentCard';

function StudentsList() {
  const studentContext = useContext(StudentContext);
  const [selectedOrder, setSelectedOrder] = useState('creation');
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    if (selectedOrder === 'creation') {
      studentContext.getStudents();
      filterByName()
    } else {
      studentContext.getStudentsAlphabetic();
      filterByName()
    }
  }, [selectedOrder]);

  const filterByName = () => {
    if (nameFilter.length > 0) {
      studentContext.getStudentByName(nameFilter, selectedOrder);
    } else {
      selectedOrder === 'creation' ?
        studentContext.getStudents() : studentContext.getStudentsAlphabetic();
    }
  }

  useEffect(() => {
    filterByName();
  }, [nameFilter])

  return (
    <div>
      <div className='create-button-container'>
        <Link to="/create">
          <button
            className='student-create-button'
            type="button"
          >
            Adicionar novo aluno
          </button>
        </Link>
      </div>
      <form className='list-form'>
        <label htmlFor="order">Ordenação da lista</label>
        <select name="order" id="order" value={ selectedOrder } onChange={({target}) => setSelectedOrder(target.value)}>
          <option order="creation" value="creation">Data de criação</option>
          <option order="alphabetic" value="alphabetic">Ordem alfabética</option>
        </select>
      </form>
      <label className='filter-name-label' htmlFor="filterName">Filtro por nome</label>
      <input
        className='filter-name'
        name="filterName"
        type="text"
        value={nameFilter}
        onChange={({target}) => setNameFilter(target.value)}
        placeholder="Digite o nome que deseja buscar"
      />
      <div className="outter-list-container">
        <div className='list-container'>
          {
            studentContext.students.map((student) => (
              <StudentCard student={student} key={student._id}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default StudentsList;
