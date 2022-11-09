import React from 'react';
import { useParams } from 'react-router-dom';
import Form from '../../components/Form';

function Edit() {
  const params = useParams();

  return (
    <>
      <h1 className="form-title">Atualizar Cadastro</h1>
      <Form studentId={ params.id } />
    </>
  );
}

export default Edit;
