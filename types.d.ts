type Todo = {
	id?: string;
	value: string;
  completed: boolean
};

type UserTodos = {
	userId: string;
	items: Todo[];
};

type TodoList = UserTodos[];
