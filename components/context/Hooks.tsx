import { useContext } from "react";
import { TodoContext } from "./Context";

export const useTodo = (): any => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }

  return context;
};
