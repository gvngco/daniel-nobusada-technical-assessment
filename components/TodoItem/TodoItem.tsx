import React from 'react'
import { useTodo } from '../context/Hooks'

// TODO: finish this file 

type TodoItemProps = {
  item?: Todo,
  selectedUser: string,
}

const TodoItem = ({ item, selectedUser}: TodoItemProps) => {
  const [ inputValue, setInputValue ] = React.useState<string>('')
  const { addTodo } = useTodo()
  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  const handleEnterButton = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  }
  const handleToggle = () => {}
  const handleDeleteTodo = () => {}
  const handleAddNewTodo = () => {
    if (inputValue) {
      addTodo(inputValue, selectedUser)
      setInputValue('')
    }
  }

  return (
    <div onClick={handleToggle}>
      <p>{ item?.value }</p>
      <div>
        {
          item?.completed && (
            <p>Completed</p>
          )
        }
        <input
          type='text'
          name='item'
          autoComplete='off'
          placeholder='Create a new todo :)'
          onChange={handleInputValue}
          onKeyUp={handleEnterButton}
          />
        <button 
          type='submit'
          value='Add'
          onClick={handleAddNewTodo}
        >
          Add
        </button>
        <button 
          type='button'
          value='Delete'
          onClick={handleDeleteTodo}
        >
          Delete
        </button>
     </div>
    </div>
  )
}

export default TodoItem