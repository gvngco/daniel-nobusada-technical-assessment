import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

type CreateTodo = {
	userId: string;
	todoValue: string;
	todoId: string;
};

/**
 * Create a new TODO, link it to the specified user and return all of the user's TODOs.
 */

// POST /api/todo/create
// Required fields in body: userId, todo (text)
// Optional fields in body: none
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const body = req.body as CreateTodo;
	if (req.method === 'POST') {
		const result = await prisma.todo.create({
			data: {
				id: body.todoId,
				value: body.todoValue,
				user: {
					connect: { id: body.userId }
				}
			},
		});
	res.json(result)
	}
}

