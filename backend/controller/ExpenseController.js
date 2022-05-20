//The purpose of this is to isolate the logic
import prisma from "../utils/PrismaCient.js";

//I place the + before req.params.id and req.params.amount in order to convert the string to number
// If there is no catched error it will have status code 200 or 201 which is ok, otherwise it is a 500 or a server error.

export const findAll = async (req, res) => {
	try {
		//find all
		const allExpenses = await prisma.expense.findMany();
		//get total expenses
		const sumExpenses = await prisma.expense.aggregate({
			_sum: {
				amount: true,
			},
		});

		res.status(200).send({ sumExpenses, expenses: allExpenses });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const findById = async (req, res) => {
	try {
		//find anything that has an id same with params id
		const expense = await prisma.expense.findMany({ where: { id: +req.params.id } });
		res.status(200).send(expense);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const createExpense = async (req, res) => {
	try {
		//create an expense with the given description, date, and amount from the request
		const expense = await prisma.expense.create({
			data: {
				description: req.body.description,
				date: new Date(req.body.date),
				amount: +req.body.amount,
			},
		});

		res.status(201).json({
			message: `Expense of "${expense.description}" is successfully created`,
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const updateExpense = async (req, res) => {
	try {
		//update the ones who has the same id as the params id with its new values.
		const expense = await prisma.expense.update({
			where: { id: +req.params.id },
			data: {
				description: req.body.description,
				date: new Date(req.body.date),
				amount: +req.body.amount,
			},
		});
		res.status(200).json({ message: `Expense with ID ${expense.id} is successfully updated` });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const expensePerWeek = async (req, res) => {
	try {
		//collect all expense who is greater than or equal (gte) to starting date
		//and less than or equal (lte) to last date
		//The client side will do the work in validating the week
		const totalExpenseInAWeek = await prisma.expense.aggregate({
			where: {
				date: {
					gte: new Date(req.query.startDate),
					lte: new Date(req.query.endDate),
				},
			},
			//sum the amount
			_sum: {
				amount: true,
			},
		});

		res.status(200).send(totalExpenseInAWeek);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const deleteById = async (req, res) => {
	try {
		//find the expense with corresponsding id and delete it.
		const expense = await prisma.expense.delete({
			where: { id: +req.params.id },
		});
		res.status(200).json({ message: `Expense with ID ${expense.id} is successfully deleted` });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
