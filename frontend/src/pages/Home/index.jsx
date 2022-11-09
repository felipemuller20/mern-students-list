import React from 'react';
import StudentsList from '../../components/StudentsList';
import './home.css';

function Home() {
  return (
    <div className='home-page'>
      <h1>Lista de alunos</h1>
      <StudentsList />
    </div>
  )
}

export default Home;
