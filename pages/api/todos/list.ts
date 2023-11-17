import type { NextApiRequest, NextApiResponse } from "next";

/**
 * Return a list of all user TODOs
 */
export default function handler(req: NextApiRequest, res: NextApiResponse<TodoList>) {
	res.status(200).end();
}
