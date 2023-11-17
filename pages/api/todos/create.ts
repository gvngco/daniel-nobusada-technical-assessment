import type { NextApiRequest, NextApiResponse } from "next";

type CreateTodo = {
	userId: string;
	todo: string;
};

/**
 * Create a new TODO, link it to the specified user and return all of the user's TODOs.
 */
export default function handler(req: NextApiRequest, res: NextApiResponse<UserTodos>) {
	const body = req.body as CreateTodo;

	res.status(200).end();
}
