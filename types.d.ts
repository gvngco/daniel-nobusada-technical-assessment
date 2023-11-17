type Todo = {
	id?: string;
	value: string;
};

type UserTodos = {
	userId: string;
	items: Todo[];
};

type TodoList = UserTodos[];
