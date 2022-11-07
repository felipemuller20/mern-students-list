import React, { useEffect, useState } from 'react';
import StudentContext from './StudentContext';
import { fetchStudents } from '../services/students';

function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [att, setAtt] = useState(true)

  const getStudents = async () => {
    const apiResult = await fetchStudents();
    setStudents(apiResult);
  };

  useEffect(() => {
    getStudents();
  }, []);

  useEffect(() => {
    getStudents();
  }, [att]);

  return (
    <StudentContext.Provider
      value={{
        students,
        setStudents,
        getStudents,
        att,
        setAtt,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export default StudentProvider;
