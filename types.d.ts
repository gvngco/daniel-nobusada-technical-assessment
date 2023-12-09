type Todo = {
	id?: string;
	value: string;
  completed: boolean
};

type UserTodos = {
	userId: string;
	items: Todo[];
};

type UserTodoToAdd = { // type TodoAdAction
	userId: string;
	item: Todo;
}

type UserTodoToDelete = {
	userId: string;
	index: int
}

type UserTodoToToggle = {
	userId: string;
	index: int
}

type TodoList = UserTodos[];
