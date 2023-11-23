'use client'

import { FC, createContext, useReducer } from "react"

export const TodoContext = createContext('')

export const TodoContextProvider: FC = (props: any) => { 
  const action = {
    ADD_TODO: 'ADD_TODO',
  }

  const todoReducer = (state: any, action: any) => {
    switch (action.type) {
      case 'ADD_TODO': {
        return [...state, action.payload]
      }
    }
  } 

  const [todos, setTodos] = useReducer(todoReducer, [])

  // mandar o useMemo aqui dos values
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {props.children}
    </TodoContext.Provider>
  )
}