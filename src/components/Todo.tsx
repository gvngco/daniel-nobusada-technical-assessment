'use client'

import React, { useCallback, useContext, useEffect, useState } from 'react'
import DropdownTodo from './Dropdown/Dropdown'; 
import { mockUsers } from '../mock/mocks'; 
import TodoItem from './TodoItem/TodoItem';
import { TodoContext, TodoContextProvider, actionTypes } from './context/todoContext';
import debounce from 'lodash.debounce';
import { DebounceInput } from 'react-debounce-input';

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

  const handleChange = (value: string) => {
    if (!value) return setInputTodo('')
    setInputTodo(value)
  }

  // move to utils
  const slugify = (str: string) => {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}

  const buttonAddTodo = () => {
    // button is being clicked once
    if (selectedUser === null) return // should a warning be shown?
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
  )
}

export default Todo 