//The purpose of this module is to isolate the routes group, in this case the expenses

import express from "express";

//Controllers where the logic comes from
import {
	findAll,
	findById,
	createExpense,
	updateExpense,
	expensePerWeek,
	deleteById,
} from "../controller/ExpenseController.js";

//Initialize Express Router
const router = express.Router();

//Get All Expenses
router.get("/expenses", findAll);
//Get Total Expenses in a Week
router.get("/expenses/week", expensePerWeek);
//Get One Expense
router.get("/expenses/:id", findById);
//Create New Expense
router.post("/expenses", createExpense);
//Update One Expense
router.put("/expenses/:id", updateExpense);
//Delete One Expense
router.delete("/expenses/:id", deleteById);

export default router;
