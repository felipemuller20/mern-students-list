import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const delay = (time) => new Promise(resolve => setTimeout(resolve, time));
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const eForm = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)/;
      if (!username.match(eForm)) throw new Error('E-mail precisa ser válido')
      if (password.length < 6) throw new Error('Senha precisa ter ao menos 6 caracteres')
      Swal.fire({
        icon: 'success',
        title: 'Login realizado com sucesso',
        showConfirmButton: false,
        timer: 1500
      })
      await delay(1500)
      history('/home')
    } catch(error) {
      console.log(error)
      Swal.fire(`${error}`, error, 'error')
    }
  }

  return(
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>
          E-mail:
          <input
            type="text"
            name="username"
            value={ username }
            onChange={({ target }) => setUsername(target.value)}
            placeholder="teste@teste.com"
          />
        </label>
        <label htmlFor='password'>
          Senha:
          <input
            type="password"
            name="password"
            value={ password }
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
        <button type="submit">
          Entrar
        </button>
        <p>
          Não utilize sua senha verdadeira! Esse projeto é de cunho educativo.
        </p>
      </form>
    </div>
  )
}

export default Login;
