/* eslint-env jest */

import { render, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('TodoItem', () => {
  const mockItem = {
    value: 'Test Todo',
    completed: false,
  };
  const mockIndex = 0;
  const mockButtonDeleteTodo = jest.fn();
  const mockButtonToggleTodo = jest.fn();

  it('should render the todo item correctly', () => {
    const { getByText, getByTestId } = render(
      <TodoItem
        item={mockItem}
        index={mockIndex}
        buttonDeleteTodo={mockButtonDeleteTodo}
        buttonToggleTodo={mockButtonToggleTodo}
      />
    );

    const todoItem = getByTestId('todo-item');
    const todoText = getByText(mockItem.value);
    const deleteButton = getByText('Delete');

    // those 3 lint errors are to be ignored, hence the eslint-env jest at the top of this file
    expect(todoItem).toBeInTheDocument();   
    expect(todoText).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });

  it('should call buttonDeleteTodo when delete button is clicked', () => {
    const { getByText } = render(
      <TodoItem
        item={mockItem}
        index={mockIndex}
        buttonDeleteTodo={mockButtonDeleteTodo}
        buttonToggleTodo={mockButtonToggleTodo}
      />
    );

    const deleteButton = getByText('Delete');
    fireEvent.click(deleteButton);

    expect(mockButtonDeleteTodo).toHaveBeenCalledWith(mockIndex);
  });

  it('should call buttonToggleTodo when todo item is clicked', () => {
    const { getByTestId } = render(
      <TodoItem
        item={mockItem}
        index={mockIndex}
        buttonDeleteTodo={mockButtonDeleteTodo}
        buttonToggleTodo={mockButtonToggleTodo}
      />
    );

    const todoItem = getByTestId('todo-item');
    fireEvent.click(todoItem);

    expect(mockButtonToggleTodo).toHaveBeenCalledWith(mockIndex);
  });
});