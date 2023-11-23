'use client'

import React, { useContext, useEffect, useState } from 'react'
import DropdownTodo from './Dropdown/Dropdown'; 
import { mockUsers } from '../mock/mocks'; 
import TodoItem from './TodoItem/TodoItem';
import { TodoContext, TodoContextProvider } from './context/todoContext';

type TodoProps = {}

const Todo = (props: TodoProps) => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const  {todos, setTodos} = useContext(TodoContext)


  const onclick = () => {
    setTodos({type: 'ADD_TODO', payload: {id: 1, title: 'teste', completed: false}})
  }
  console.log(todos)

  // mandar o memo aqui

  return (
    <div>
      <h1>Please select an user to manage its todo list</h1>
      <DropdownTodo
        users={mockUsers}
        setSelectedUser={setSelectedUser}
      />

      <button onClick={onclick}/>
    </div>
  )
}

export default Todo 