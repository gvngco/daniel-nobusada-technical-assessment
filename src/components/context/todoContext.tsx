'use client'

import { FC, createContext, useMemo, useReducer } from "react"

interface TodoState {
  todoList: TodoList;
  addTodo: (userTodoToAdd: UserTodoToAdd) => void;
  deleteTodo: (userTodoToDelete: UserTodoToDelete) => void;
  toggleTodo: (userTodoToToggle: UserTodoToToggle) => void;
}

const initialState: TodoState = {
  //todoList: [{userId: '', items: []}],
  todoList: [],
  addTodo: () => {},
  deleteTodo: () => {},
  toggleTodo: () => {},
};

export const TodoContext = createContext(initialState)

export const actionTypes = {
  ADD_TODO_ITEM: 'ADD_TODO_ITEM',
  DELETE_TODO_ITEM: 'DELETE_TODO_ITEM',
  TOGGLE_TODO_ITEM: 'TOGGLE_TODO_ITEM',
}

export const TodoContextProvider: FC = (props: any) => { 

  const todoReducer = (state: any, action: any) => {
    switch (action.type) {
      case actionTypes.ADD_TODO_ITEM: {
        if (!state.todoList.find((todoUserList: UserTodos) => todoUserList.userId === action.payload.userId)) {
          var userTodos : UserTodos = {
            userId: action.payload.userId,
            items: [action.payload.item]
          }
          return {
            ...state,
            todoList: [...state.todoList, userTodos]
          }
        }

        const userTodoList = state.todoList
          .filter((todoUserList: UserTodos) => todoUserList.userId === action.payload.userId)
          .map((todoUserList: UserTodos) => {
            todoUserList.items.push(action.payload.item)
            return todoUserList
          })

        return {
          ...state,
          todoList: [...userTodoList]
        }
      }
      case actionTypes.DELETE_TODO_ITEM: {
        const userTodoList = state.todoList.filter((todoUserList: UserTodos) => todoUserList.userId === action.payload.userId)
        delete userTodoList[0].items[action.payload.index]

        const otherUsersTodoList = state.todoList.filter((todoUserList: UserTodos) => todoUserList.userId !== action.payload.userId)

        return {
          ...state,
          todoList: [...otherUsersTodoList, userTodoList[0]]
        }
      }
      case actionTypes.TOGGLE_TODO_ITEM: {
        const userTodolist = state.todoList
          .filter((todoUserList: UserTodos) => todoUserList.userId === action.payload.userId)
          .map((todoUserList: UserTodos) => {
            const todoItem = todoUserList.items
              .filter((item: Todo) => item.id === action.payload.todoId)
            todoItem[0].completed = !todoItem[0].completed
            return todoUserList
          })

          return {
            ...state,
            todoList: [...userTodolist]
          }
      }
      default:
        return state
    }
  } 

  const [state, dispatch] = useReducer(todoReducer, initialState)

  const addTodo = (userTodoToAdd: UserTodoToAdd) => dispatch({
    type: actionTypes.ADD_TODO_ITEM,
    payload: userTodoToAdd
  })

  const deleteTodo = (userTodoToDelete: UserTodoToDelete) => dispatch({
    type: actionTypes.DELETE_TODO_ITEM,
    payload: userTodoToDelete
  })


  const toggleTodo = (userTodoToToggle: UserTodoToToggle) => dispatch({
    type: actionTypes.TOGGLE_TODO_ITEM,
    payload: userTodoToToggle 
  })

  const value = useMemo (
    () => ({
      ...state,
      addTodo,
      deleteTodo,
      toggleTodo
    }),
    [state],
  )

  return (
    <TodoContext.Provider value={value}>
      {props.children}
    </TodoContext.Provider>
  )
}