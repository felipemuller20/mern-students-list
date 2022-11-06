import React, { useEffect, useState } from 'react';
import StudentContext from './StudentContext';
import { fetchStudents } from '../services/students';

function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    const apiResult = await fetchStudents();
    setStudents(apiResult);
  };

  // useEffect(() => {
  //   getStudents();
  // }, [students]);

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <StudentContext.Provider
      value={{
        students,
        setStudents,
        getStudents,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export default StudentProvider;
