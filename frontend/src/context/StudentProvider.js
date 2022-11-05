import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StudentContext from './StudentContext';
import { fetchStudents } from '../services/tasks';

function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    const apiResult = await fetchStudents();
    setStudents(apiResult);
  };

  useEffect(() => {
    getStudents();
  }, [students]);

  return (
    <StudentContext.Provider
      value={{
        students,
        setStudents,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

StudentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StudentProvider;
