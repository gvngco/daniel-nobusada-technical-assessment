'use client'

import React, { useEffect, useState } from 'react'
import DropdownTodo from './Dropdown/Dropdown'; 
import { mockUsers } from '../mock/mocks'; 
import TodoUserList from './TodoList/TodoUserList';
import { useTodo } from './context/Hooks';
import TodoItem from './TodoItem/TodoItem';

type TodoProps = {}

const Todo = (props: TodoProps) => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const { todoItems } = useTodo();

  // TODO: guarantee that relevant data is being caught from the selector

  return (
    <div>
      <h1>Please select an user to manage its todo list</h1>
      <DropdownTodo
        users={mockUsers}
        setSelectedUser={setSelectedUser}
      />
      {
          <div>
            {
              todoItems?.items.map((i) => (
                <TodoItem
                  key={i.id}
                  item={i}
                  selectedUser={todoItems.userId}
                />
              ))
            }

            {
              selectedUser && <TodoItem selectedUser={selectedUser} />
            }

          </div>
      }
    </div>
  )
}

export default Todo 