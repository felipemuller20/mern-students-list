import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import StudentContext from '../context/StudentContext';
import StudentCard from './StudentCard';

function StudentsList() {
  const studentContext = useContext(StudentContext);
  const [selectedOrder, setSelectedOrder] = useState('creation');

  useEffect(() => {
    if (selectedOrder === 'creation') {
      studentContext.getStudents();
    } else {
      studentContext.getStudentsAlphabetic();
    }
  }, [selectedOrder]);

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
