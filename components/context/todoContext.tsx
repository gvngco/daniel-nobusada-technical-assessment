'use client'

import { FC, createContext } from "react"

export const TodoContext = createContext('')

export const TodoContextProvider: FC = (props: any) => { 
  return (
    <TodoContext.Provider value={props.value}>
      {props.children}
    </TodoContext.Provider>
  )
}