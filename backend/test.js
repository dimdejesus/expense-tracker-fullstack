import prisma from "./utils/PrismaCient.js";
//use for my experimentation
//not that important
async function main() {
	try {
		const expenses = await prisma.expense.aggregate({
			where: {
				date: {
					gte: new Date("2022-3-1"),
					lte: new Date("2022-3-6"),
				},
			},
			_sum: {
				amount: true,
			},
		});
		console.dir(expenses._sum.amount);
	} catch (err) {
		console.log(err);
	} finally {
		await prisma.$disconnect();
	}
}

main();

/* const createdExpense = await prisma.expense.create({
	data: {
		description: "Healthcare",
		date: new Date(),
		amount: 2000.15,
	},
});
await prisma.post.update({
	where: { id: 1 },
	data: { published: true },
});

const allPosts = await prisma.post.findMany(); */
