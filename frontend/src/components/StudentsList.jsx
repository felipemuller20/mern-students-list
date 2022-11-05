import React, { useContext } from 'react';
import StudentContext from '../context/StudentContext';
import StudentCard from './StudentCard';

function StudentsList() {
  const studentContext = useContext(StudentContext);

  return (
    <div>
      {
        studentContext.students.map((student) => (
          <StudentCard student={student} key={student._id}/>
        ))
      }
    </div>
  )
}

export default StudentsList;
