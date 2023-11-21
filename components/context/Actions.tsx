export type Actions =
  | { type: 'ADD_TODO_ITEM'; payload: UserTodos }
  | { type: 'DELETE_TODO_ITEM'; payload: number }
  | { type: 'TOGGLE_TODO_ITEM'; payload: number }

export const ActionTypes = {
  ADD_TODO_ITEM: 'ADD_TODO_ITEM',
  DELETE_TODO_ITEM: 'DELETE_TODO_ITEM',
  TOGGLE_TODO_ITEM: 'TOGGLE_TODO_ITEM',
}