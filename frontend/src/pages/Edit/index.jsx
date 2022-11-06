import React from 'react';
import { useParams } from 'react-router-dom';
import Form from '../../components/Form';

function Edit() {
  const params = useParams();

  return (
    <>
      <h1>Atualizar Cadastro</h1>
      <Form studentId={ params.id } />
    </>
  );
}

export default Edit;
