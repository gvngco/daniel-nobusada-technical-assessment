import React from 'react'
import { useTodo } from '../context/Hooks'

type TodoItemProps = {
  item: Todo,
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
  const addNewTodo = () => {
    if (inputValue) {
      addTodo()
      setInputValue('')
    }
  }

  return (
    <div onClick={handleToggle}>
      <p>{ item.value }</p>
      <div>
        {
          item.completed && (
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
          onClick={onClickAdd}
        >
          Add
        </button>
        <button 
          type='button'
          value='Delete'
          onClick={onClickDelete}
        >
          Delete
        </button>
     </div>
    </div>
  )
}

export default TodoItem