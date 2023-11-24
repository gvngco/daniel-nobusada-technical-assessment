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


  const onclick = () => {
    if (selectedUser === null) return // mandar um warning aqui?
    addTodo({
      userId: selectedUser,
      items: [{id: '1', value: 'teste', completed: false}]
    })
  }

  console.log(todoList)

  return (
    <div>
      <h1>Please select an user to manage its todo list</h1>
      <DropdownTodo
        users={mockUsers}
        setSelectedUser={setSelectedUser}
      />

      {
        // todoList
        //   .filter((todo) => todo.userId === selectedUser)
        //   .map((todo) => {
        //     return <TodoItem
        //       key={todo.userId}
        //       item={todo}
        //       selectedUser={selectedUser}
        //     />
        // })
      }
      <button onClick={onclick}/>
    </div>
  )
}

export default Todo 