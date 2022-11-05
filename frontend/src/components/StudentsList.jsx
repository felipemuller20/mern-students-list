import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import StudentContext from '../context/StudentContext';
import StudentCard from './StudentCard';

function StudentsList() {
  const studentContext = useContext(StudentContext);

  return (
    <div>
      <Link to="/create">
        <button
          type="button"
        >
          Adicione um novo aluno
        </button>
      </Link>
      <div>
        {
          studentContext.students.map((student) => (
            <StudentCard student={student} key={student._id}/>
          ))
        }
      </div>
    </div>
  )
}

export default StudentsList;
