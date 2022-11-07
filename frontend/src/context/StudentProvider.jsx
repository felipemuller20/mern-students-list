import React, { useEffect, useState } from 'react';
import StudentContext from './StudentContext';
import { fetchStudents, fetchStudentsAlphabetic } from '../services/students';

function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [att, setAtt] = useState(true);
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');

  const getStudents = async () => {
    const apiResult = await fetchStudents();
    setStudents(apiResult);
  };

  const getStudentsAlphabetic = async () => {
    const apiResult = await fetchStudentsAlphabetic();
    setStudents(apiResult);
  }

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
        getStudentsAlphabetic,
        setUsername,
        username,
        token,
        setToken,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export default StudentProvider;
