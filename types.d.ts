type Todo = {
	id?: string;
	value: string;
  completed: boolean
};

type UserTodos = {
	userId: string;
	items: Todo[];
};

type UserTodoToAdd = {
	userId: string;
	item: Todo;
}

type TodoList = UserTodos[];
