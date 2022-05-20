import prisma from "../utils/PrismaCient.js";

import sample_data from "./sample_data.js";

//It will run the seeding process
async function main() {
	try {
		//create bulks of data from sample_data
		const seedData = await prisma.expense.createMany({
			data: sample_data,
			skipDuplicates: true,
		});

		console.log(seedData);
	} catch (err) {
		console.log(err);
		pricess.exit(1);
	} finally {
		await prisma.$disconnect();
	}
}

main();
