import { Context, createContext, useReducer } from 'react';
import { Actions, ActionTypes } from './Actions';

interface TodoState {
  todoItems: TodoList;
}

// TODO: change all todoItmes to an array of UserTodos
// TODO: all relevant reducer cases: set to localstorage
// TODO: selector: fetch from localstorage 

export const initialState: TodoState = {
  todoItems: [{userId: '', items: []}],
};

export const todoReducer = (state: TodoState, action: Actions): TodoState => {
  switch (action.type) {
    case ActionTypes.ADD_TODO_ITEM: {
      const newTodos = action.payload as UserTodos;
      return {
        ...state,
        todoItems: {
          ...state.todoItems,
          items: newTodos.items
        }
      };
    }

    case ActionTypes.DELETE_TODO_ITEM:{
      if(action.payload === undefined) return state;

      const todoIdToDelete = action.payload as number;

      return {
        ...state,
        todoItems: {
          userId: state.todoItems.userId,
          items: state.todoItems.items?.filter((_, index) => index !== todoIdToDelete)
        },
      };
    }

    case ActionTypes.TOGGLE_TODO_ITEM: {
      const todoIdxToToggle = action.payload as number;
      const updatedItems = {
        ...state.todoItems.items,
        [todoIdxToToggle]: {
          ...state.todoItems.items[todoIdxToToggle],
          completed: !state.todoItems.items[todoIdxToToggle].completed
        }
      }
      return {
        ...state,
        todoItems: {
          userId : state.todoItems.userId,
          items : updatedItems
        }
      };
    }
    
    default: {
      return state;
    }
  }
};

export const TodoContext: Context<TodoState | any> = createContext(initialState);
