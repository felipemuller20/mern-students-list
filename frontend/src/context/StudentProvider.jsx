import React, { useEffect, useState } from 'react';
import StudentContext from './StudentContext';
import { fetchStudents, fetchStudentsAlphabetic } from '../services/students';

function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [att, setAtt] = useState(true);

  const getStudents = async () => {
    const apiResult = await fetchStudents();
    setStudents(apiResult);
  };

  const getStudentsAlphabetic = async () => {
    const apiResult = await fetchStudentsAlphabetic();
    setStudents(apiResult);
  }

  const getStudentByName = async (name, selectedOrder) => {
    let apiResult;
    if (selectedOrder === 'creation') {
      apiResult = await fetchStudents();
    } else {
      apiResult = await fetchStudentsAlphabetic();
    }
    const toStringName = name.toString();
    const normalized = toStringName.toUpperCase();
  
    const students = await apiResult.filter((student) => student.name.startsWith(normalized));
    setStudents(students);
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
        getStudentByName,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export default StudentProvider;
