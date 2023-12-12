import "@testing-library/jest-dom/extend-expect"

export type Todo = {
	id?: string;
	value: string;
	completed: boolean
};

export type UserTodos = {
	userId: string;
	items: Todo[];
};

export type UserTodoToAdd = {
	userId: string;
	item: Todo;
}

export type UserTodoToDelete = {
	userId: string;
	index: number
}

export type UserTodoToToggle = {
	userId: string;
	index: number 
}

export type TodoList = UserTodos[];
