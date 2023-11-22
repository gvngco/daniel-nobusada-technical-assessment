/* As per the context manager, I've decided to study the ContextAPI and implement it and to split its reducer, provider, actions an hooks into separate files. 
Relevant unit tests that are worth testing here are the localstorage interactions due the rest being boilerplate code to enable ContextAPI */

import { Context, createContext } from 'react';
import { Actions, ActionTypes } from './Actions';

interface TodoState {
  todoList: TodoList;
}

// TODO: change all todoItmes to an array of UserTodos
// TODO: all relevant reducer cases: set to localstorage
// TODO: selector: fetch from localstorage 

export const initialState: TodoState = {
  todoList: [{userId: '', items: []}],
};

export const todoReducer = (state: TodoState, action: Actions): TodoState => {
  switch (action.type) {
    case ActionTypes.ADD_TODO_ITEM: {
      const newTodos = action.payload as UserTodos;

      debugger;
      // Cornercase in case of adding into the initialState
      if (state.todoList.length === 1 && state.todoList[0].userId === '') {
        return {
          ...state,
          todoList: [
            newTodos
          ]
        };
      }

      return {
        ...state,
        todoList: [
          ...state.todoList,
          newTodos
        ]
      };
    }

    // case ActionTypes.DELETE_TODO_ITEM:{
    //   if(action.payload === undefined) return state;

    //   const userTodosToUpdate = action.payload as UserTodos;

    //   return {
    //     ...state,
    //     todoList: [
    //       ...state.todoList,
    //       userTodosToUpdate
    //     ]
    //   };
    // }

    // case ActionTypes.TOGGLE_TODO_ITEM: {
    //   const todoIdxToToggle = action.payload as number;
    //   const updatedItems = {
    //     ...state.todoList.items,
    //     [todoIdxToToggle]: {
    //       ...state.todoList.items[todoIdxToToggle],
    //       completed: !state.todoList.items[todoIdxToToggle].completed
    //     }
    //   }
    //   return {
    //     ...state,
    //     todoList: {
    //       userId : state.todoList.userId,
    //       items : updatedItems
    //     }
    //   };
    // }
    
    default: {
      return state;
    }
  }
};

export const TodoContext: Context<TodoState | any> = createContext(initialState);
