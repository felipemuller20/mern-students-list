import React from 'react';
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { expect, it } from "vitest";
import App from "./App";
import Create from './pages/Create';
import Edit from './pages/Edit'
import StudentContext from "./context/StudentContext";
import userEvent from '@testing-library/user-event';
import Home from "./pages/Home";


it('should render login form', async () => {
  render(<BrowserRouter><App /></BrowserRouter>);

  const loginText = screen.getByText('Login');
  expect(loginText).toBeInTheDocument();

  const emailInput = screen.getByRole('textbox', { 'type': 'text'});
  const passwordInput = screen.getByRole('textbox', { 'type': 'password'});
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();

  const submitButton = screen.getByRole('button');
  expect(submitButton).toBeInTheDocument();
});

it('should render student create page', () => {
  render(<BrowserRouter><Create /></BrowserRouter>);
  const title = screen.getByText('Formulário de criação');
  expect(title).toBeInTheDocument();

  const inputs = screen.getAllByRole('textbox');
  expect(inputs.length).toBe(5);

  const file = screen.getByLabelText(/Imagem:/i);
  expect(file).toBeInTheDocument();
});

it('should render student edit page', () => {
  render(<BrowserRouter><Edit /></BrowserRouter>);
  const title = screen.getByText('Atualizar cadastro');
  expect(title).toBeInTheDocument();

  const inputs = screen.getAllByRole('textbox');
  expect(inputs.length).toBe(5);

  const file = screen.getByLabelText(/Imagem:/i);
  expect(file).toBeInTheDocument();
});

it('should render the home page', async () => {
  render(
    <StudentContext.Provider value={{students: [], getStudents: () => []}}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </StudentContext.Provider>
  );
  const title = screen.getByText('Lista de alunos');
  expect(title).toBeInTheDocument();

  const addStudentBtn = screen.getByRole('button');
  expect(addStudentBtn).toBeInTheDocument();
})