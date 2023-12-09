import React from 'react'

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
    <div>
      <p>{item.value}</p>  
      {item.completed ? <p>Completed</p> : <p>Not completed</p>}
      <button onClick={handleDeleteTodo}>Delete</button> 
      <button onClick={handleToggleTodo}>Toggle</button>
    </div>
  )
}

export default TodoItem