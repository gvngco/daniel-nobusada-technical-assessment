'use client'

import React, { useEffect, useState } from 'react'
import DropdownTodo from './Dropdown/Dropdown'; 
import { mockUsers } from '../mock/mocks'; 
import { useTodo } from './context/Hooks';
import TodoItem from './TodoItem/TodoItem';

type TodoProps = {}

const Todo = (props: TodoProps) => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const { todoList } = useTodo();

  // TODO: guarantee that relevant data is being caught from the selector

  debugger;
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
              todoList?.items?.map((i: Todo | undefined) => (
                <TodoItem
                  key={i?.id}
                  item={i}
                  selectedUser={todoList.userId}
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