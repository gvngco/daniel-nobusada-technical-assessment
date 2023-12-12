import React from 'react'
import { Todo } from '../../../types.d'

/*
  [ ] style this component
*/

type TodoItemProps = {
  item: Todo,
  index: number,
  buttonDeleteTodo: (index: number) => void,
  buttonToggleTodo: (index: number) => void
}

const TodoItem = ({ item, index, buttonDeleteTodo, buttonToggleTodo }: TodoItemProps) => {
  const handleDeleteTodo = () => {
    buttonDeleteTodo(index)
  }

  const handleToggleTodo = () => {
    buttonToggleTodo(index)
  }

  return (
    <div 
      className={item.completed ? 'item-completed' : 'item'}
      onClick={handleToggleTodo}
      data-testid='todo-item'
    >
      <p>{item.value}</p>  
      <button className='delete-button' onClick={handleDeleteTodo}>Delete</button> 
    </div>
  )
}

export default TodoItem