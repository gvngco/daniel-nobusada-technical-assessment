'use client'

import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import DropdownTodo from './Dropdown/Dropdown'; 
import { mockUsers } from '../mock/mocks'; 
import TodoItem from './TodoItem/TodoItem';
import { TodoContext, TodoContextProvider, actionTypes } from './context/todoContext';
import debounce from 'lodash.debounce';

type TodoProps = {}

const Todo = (props: TodoProps) => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const {todoList, addTodo} = useContext(TodoContext)
  const [inputTodo, setInputTodo] = React.useState<string>('')
  const [thisUserTodos, setThisUserTodos] = useState<UserTodos>({
    userId: '',
    items: [{
      id: '',
      value: '',
      completed: false
    }]
  })

  /*
  // input debouncer and debouncer shutdown while unmounting the component
  const debouncedHandleChange = useMemo(
    () => debounce((value: string) => setInputTodo(value), 500),
    [],
  )  
  useEffect(() => {
    return () => {
      debouncedHandleChange.cancel();
    }
  }, []);
  */

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   // debouncedHandleChange(event.target.value)
   setInputTodo(event.target.value)
  }

  const buttonAddTodo = () => {
    if (selectedUser === null) return // should a warning be shown?
    addTodo({
      userId: selectedUser,
      items: [{
        id: selectedUser,
        value: inputTodo,
        completed: false
      }]
    })
    setInputTodo('')
  }

  const buttonDeleteTodo =  (index: number) => {
    console.log(index)
    const thisUserList = todoList.filter((todo) => todo.userId === selectedUser)
    console.log(thisUserList)
  }

  useEffect(() => {
    if (selectedUser === null) return
    const thisUserList = todoList.filter((todoUserList) => todoUserList.userId === selectedUser)
    setThisUserTodos(thisUserList[0])
  }, [selectedUser])


  
  console.log(todoList)

  return (
    <div>
      <h1>Please select an user to manage its todo list</h1>
      <DropdownTodo
        users={mockUsers}
        setSelectedUser={setSelectedUser}
      />
      {
        // I got no idea why when selecting an user the todo list is not rendered
        thisUserTodos?.items && thisUserTodos.items
          .map((todo, index) => { 
            return <TodoItem
              key={index}
              index={index}
              item={todo}
              buttonDeleteTodo={buttonDeleteTodo}
            />
          })
      }
      <div>
        <input
          type='text'
          value={inputTodo}
          placeholder='Add a todo'
          onChange={handleChange}
        />
        <button onClick={buttonAddTodo}>Add todo</button>
      </div>
    </div>
  )
}

export default Todo 