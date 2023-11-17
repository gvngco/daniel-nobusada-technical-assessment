import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
	Promise.all([
		prisma.user.upsert({
			where: { name: "Travis" },
			update: {},
			create: { name: "Travis" }
		}),
		prisma.user.upsert({
			where: { name: "Emmanuel" },
			update: {},
			create: { name: "Emmanuel" }
		}),
		prisma.user.upsert({
			where: { name: "Alma" },
			update: {},
			create: { name: "Alma" }
		})
	]);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async e => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
