import { PrismaClient } from "@prisma/client";

declare namespace NodeJS {
	interface Global {
		prisma?: PrismaClient;
	}
}
declare var global: NodeJS.Global & typeof globalThis;

const prisma = global.prisma || new PrismaClient();

// Prevent multiple instances of Prisma Client in development
if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
