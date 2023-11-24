'use client'

import { FC, createContext, useMemo, useReducer } from "react"

interface TodoState {
  todoList: TodoList;
  addTodo: (userTodo: UserTodos) => void;
  deleteTodo: (userId: string, todoId: string) => void;
  toggleTodo: (userId: string, todoId: string) => void;
}

const initialState: TodoState = {
  todoList: [{userId: '', items: []}],
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
        debugger;
        if (state.todoList.lenght === 1 && state.todoList[0].userId === '') {
          debugger;
          // esse cenário não tá funcionando legal
          return {
            ...state,
            todoList: [{
              userId: action.payload.userId,
              items: action.payload.items
            }]
          }
        }
        return {
          ...state,
          todoList: [...[action.payload], ...state.todoList]
        }
      }
      case actionTypes.DELETE_TODO_ITEM: {
      }
      case actionTypes.TOGGLE_TODO_ITEM: {
      }
      default:
        return state
    }
  } 

  const [state, dispatch] = useReducer(todoReducer, initialState) // estranho que o state tá zerado

  const addTodo = (userTodo: UserTodos) => dispatch({
    type: actionTypes.ADD_TODO_ITEM,
    payload: userTodo
  })

  const deleteTodo = (userId: string, todoId: string) => dispatch({
    type: actionTypes.DELETE_TODO_ITEM,
    payload: { userId, todoId }
  })

  const toggleTodo = (userId: string, todoId: string) => dispatch({
    type: actionTypes.TOGGLE_TODO_ITEM,
    payload: { userId, todoId }
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