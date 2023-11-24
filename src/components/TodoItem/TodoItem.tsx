import React from 'react'


type TodoItemProps = {
  item: Todo,
  index: number,
  buttonDeleteTodo: (index: number) => void
}

const TodoItem = ({ item, index, buttonDeleteTodo }: TodoItemProps) => {
  const handleDeleteTodo = () => {
    buttonDeleteTodo(index)
  }

  return (
    <div>
      <p>{item.value}</p>  
      {item.completed ? <p>Completed</p> : <p>Not completed</p>}
      <button onClick={handleDeleteTodo}>Delete</button> 
    </div>
  )
}

export default TodoItem