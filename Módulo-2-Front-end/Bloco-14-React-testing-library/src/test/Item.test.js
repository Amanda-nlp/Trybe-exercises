import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from '../Item';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando o Item', () => {
  test('Simule a adição de todas e depois verifique se elas estão aparecendo', () => {
    render(<App />);
    const listTodo = ["estudar programação", "escovar os dentes", "tomar banho", "comer"]
    const inputTodo = screen.getByLabelText('Tarefa:');
    const button = screen.getByRole('button', {name: /Adicionar/i });
    const li = screen.getByRole('list');
    
    listTodo.forEach((i) => {
        userEvent.type(inputTodo, i)
        userEvent.click(button)
    })
    listTodo.forEach((i) => {
        expect(li).toHaveTextContent(i)
    })
  });

  test('Teste apenas o componente Item. Ao passar uma string para ele ela precisa aparecer na tela', () => {
    const string = "Amanda"
    render(<Item content={ string }/>);
    const component = screen.getByText("Amanda")
    expect(component).toBeInTheDocument();
  });
});