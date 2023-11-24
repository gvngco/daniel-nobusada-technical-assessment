'use client'

import React, { useContext, useEffect, useState } from 'react'
import DropdownTodo from './Dropdown/Dropdown'; 
import { mockUsers } from '../mock/mocks'; 
import TodoItem from './TodoItem/TodoItem';
import { TodoContext, TodoContextProvider, actionTypes } from './context/todoContext';

type TodoProps = {}

const Todo = (props: TodoProps) => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const { todoList, addTodo } = useContext(TodoContext)
  const [inputTodo, setInputTodo] = React.useState<string>('')
  const [thisUserTodos, setThisUserTodos] = useState<UserTodos>({})

  const buttonAddTodo = () => {
    if (selectedUser === null) return // should a warning be shown?
    addTodo({
      userId: selectedUser,
      items: [{id: '1', value: 'teste', completed: false}]
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

  return (
    <div>
      <h1>Please select an user to manage its todo list</h1>
      <DropdownTodo
        users={mockUsers}
        setSelectedUser={setSelectedUser}
      />

      {
        thisUserTodos.items && thisUserTodos.items // TODO: solve this scenario
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
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <button onClick={buttonAddTodo}>Add todo</button>
      </div>
    </div>
  )
}

export default Todo 