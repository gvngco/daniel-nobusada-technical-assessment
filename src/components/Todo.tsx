'use client'

import React, { useCallback, useContext, useEffect, useState } from 'react'
import DropdownTodo from './Dropdown/Dropdown'; 
import { mockUsers } from '../mock/mocks'; 
import TodoItem from './TodoItem/TodoItem';
import { TodoContext, TodoContextProvider, actionTypes } from './context/todoContext';
import debounce from 'lodash.debounce';
import { DebounceInput } from 'react-debounce-input';
import { slugify } from '../utils/utils';
import { UserTodos } from '../../types';

/*
  [ ] style this component
  [ ] input events are being fired multiple times. debouncing might not be working properly
*/

type TodoProps = {}

const Todo = (props: TodoProps) => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const {todoList, addTodo, deleteTodo, toggleTodo} = useContext(TodoContext)
  const [inputTodo, setInputTodo] = React.useState<string>('')
  const [thisUserTodos, setThisUserTodos] = useState<UserTodos>({
    userId: '',
    items: [{
      id: '',
      value: '',
      completed: false
    }]
  })

  const handleChange = (value: string) => {
    if (!value) return setInputTodo('')
    setInputTodo(value)
  }

  const buttonAddTodo = () => {
    if (selectedUser === null) return 
    addTodo({
      userId: selectedUser,
      item: {
        id: `${selectedUser}-${slugify(inputTodo)}`,
        value: inputTodo,
        completed: false
      }
    })
    setInputTodo('')
  }

  const handleTodoAddButton = debounce(buttonAddTodo, 300, { leading: true, trailing: false })

  const buttonDeleteTodo =  (index: number) => {
   if (selectedUser === null) return 
    deleteTodo({
      userId: selectedUser, 
      index
    })
  }

 const buttonToggleTodo =  (index: number) => {
   if (selectedUser === null) return 
    toggleTodo({
      userId: selectedUser, 
      index
    })
  }

  useEffect(() => {
    if (selectedUser === null) return
    const thisUserList = todoList.filter((todoUserList) => todoUserList.userId === selectedUser)
    setThisUserTodos(thisUserList[0])
  }, [selectedUser, todoList])
  
  return (
    <div>
      <h2 className='subtitle'>Please select an user to manage their to do list</h2>
      <div className='todos-container'>
        <DropdownTodo
          users={mockUsers}
          setSelectedUser={setSelectedUser}
        />
        <div className='items-list'>
          {
            thisUserTodos?.items && thisUserTodos.items
              .map((todo, index) => { 
                if (todo.value === '') return null
                return <TodoItem
                  key={index}
                  index={index}
                  item={todo}
                  buttonDeleteTodo={buttonDeleteTodo}
                  buttonToggleTodo={buttonToggleTodo}
                />
              })
          }
        </div>
        <div>
          <DebounceInput
            type='text'
            value={inputTodo}
            placeholder='Add a todo'
            minLength={1}
            debounceTimeout={200}
            onChange={event => handleChange(event.target.value)}
          />
          <button onClick={handleTodoAddButton}>Add todo</button>
        </div>
      </div>
    </div>
  )
}

export default Todo 