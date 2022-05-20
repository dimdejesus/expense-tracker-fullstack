import React from "react";
import api from "../utils/api";

import { format } from "date-fns";

//To isolate my communication with api. It can be reusable

const useBackend = () => {
	const getAllExpenses = async () => {
		try {
			const expenses = await api.get("/expenses");

			return expenses.data;
		} catch (err) {
			console.log(err);
		}
	};

	const getWeekExpenses = async (startDate, endDate) => {
		try {
			const weekExpenses = await api.get(
				`/expenses/week?startDate=${format(
					new Date(startDate),
					"yyyy-MM-dd"
				)}&endDate=${format(new Date(endDate), "yyyy-MM-dd")}`
			);

			return weekExpenses.data;
		} catch (err) {
			console.log(err);
		}
	};

	const createExpenses = async (description, date, amount) => {
		try {
			const expenseAdded = await api.post("/expenses", { description, date, amount });

			return expenseAdded.data;
		} catch (err) {
			console.log(err);
		}
	};

	const deleteExpense = async (id) => {
		try {
			const expenseAdded = await api.post(`/expenses/${id}`);

			return expenseAdded.data;
		} catch (err) {
			console.log(err);
		}
	};

	return { createExpenses, deleteExpense, getAllExpenses, getWeekExpenses };
};

export default useBackend;
