import { FC, useReducer } from "react";
import { todoReducer, initialState, TodoContext } from "./Context";

interface TodoProviderProps {
  children: React.ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = (props) => {
  const [_, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (todo: string, userId : string): any =>dispatch({
      type: 'ADD_TODO_ITEM',
      payload: {
        userId: userId,
        items: [
          {
          id: new Date().getTime().toString(),
          value: todo,
          completed: false 
          }
        ]
      },
    });

  const deleteTodo = (id: number): void => dispatch({
    type: 'DELETE_TODO_ITEM', 
    payload: id
  });

  const toggleTodo = (id: number): any => dispatch({
    type: 'TOGGLE_TODO_ITEM',
    payload: id
  });

  return (
    <TodoContext.Provider 
      value={{ addTodo, deleteTodo, toggleTodo}}
      //@ts-ignore !IMPORTANT! This ignore is voluntary, it's just to avoid the error for passing on context props
      {...props}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

const TodoContextProvider: React.FC<TodoProviderProps> = ({ children }) => <TodoProvider>{children}</TodoProvider>

export default TodoContextProvider