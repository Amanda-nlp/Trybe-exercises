import React from 'react';
import { render, screen } from '@testing-library/react';
import InputTodo from '../InputTodo';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando o InputTodo', () => {
  test('Verificando se existe um botão para adicionar a tarefa', () => {
    render(<InputTodo />);
    const button = screen.getByRole('button', /Adicionar/i);
    expect(button).toBeInTheDocument();
  });

  test('Botão precisa conter o texto "Adicionar', () => {
    render(<InputTodo />);
    const buttonText = screen.getByText('Adicionar');
    expect(buttonText).toBeInTheDocument();
  });

  test('Ao ser clicado a tarefa digitada pelo o usuário precisa ser salva', () => {
    render(<App />);
    const inputTodo = screen.getByLabelText('Tarefa:');
    const button = screen.getByRole('button', {name: /Adicionar/i });
    const li = screen.getByRole('list')

    userEvent.type(inputTodo, 'Atividade');
    userEvent.click(button);
    
    expect(inputTodo).toHaveValue('');
    expect(li).toHaveTextContent('Atividade')
  });
});