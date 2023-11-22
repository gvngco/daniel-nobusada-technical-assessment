import { useReducer } from "react";
import { todoReducer, initialState, TodoContext } from "./Context";

interface TodoProviderProps {
  children: React.ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = (props) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // this todo doesnt add to the list
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

  // const deleteTodo = (id: string, userId: string): void => dispatch({
  //   type: 'DELETE_TODO_ITEM', 
  //   payload: {
  //     userId: userId,
  //     items: [{id: id}]
  //   }
  // });

  // const toggleTodo = (id: number): any => dispatch({
  //   type: 'TOGGLE_TODO_ITEM',
  //   payload: id
  // });

  const value = {
    ...state,
    addTodo
  }

  return (
      //@ts-ignore !IMPORTANT! This ignore is voluntary, it's just to avoid the error for passing on context props
    <TodoContext.Provider value={value} {...props}>
      {props.children}
    </TodoContext.Provider>
  );
};

const TodoContextProvider: React.FC<TodoProviderProps> = ({ children }) => <TodoProvider>{children}</TodoProvider>

export default TodoContextProvider