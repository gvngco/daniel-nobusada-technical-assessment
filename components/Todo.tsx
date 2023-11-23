'use client'

import React, { useEffect, useState } from 'react'
import DropdownTodo from './Dropdown/Dropdown'; 
import { mockUsers } from '../mock/mocks'; 
import { useTodo } from './context/Hooks';
import TodoItem from './TodoItem/TodoItem';
import { TodoContext } from './context/todoContext';

type TodoProps = {}

const Todo = (props: TodoProps) => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  // TODO: guarantee that relevant data is being caught from the selector

  debugger;
  return (
    <div>
      <TodoContext.Provider value={selectedUser}>
        <h1>Please select an user to manage its todo list</h1>
        <DropdownTodo
          users={mockUsers}
          setSelectedUser={setSelectedUser}
        />
      </TodoContext.Provider>
    </div>
  )
}

export default Todo 