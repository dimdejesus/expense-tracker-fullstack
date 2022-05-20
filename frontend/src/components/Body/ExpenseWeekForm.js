import React, { useState } from "react";

import { Box, Button, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Stack from "@mui/material/Stack";

import { eachWeekOfInterval } from "date-fns";

const ExpenseWeekForm = ({ expenses }) => {
	const [year, setYear] = useState(null); //this is where the expenses are based of

	//data that contains expenses per week in array format => [1000, 5000, 6000] - Week 1 = 1000, Week 2 - 5000, Week 3 - 6000
	const [expensesPerWeek, setExpensesPerWeek] = useState([]);

	//The function of getting the by week expenses in the year
	const submitYear = (e) => {
		e.preventDefault(); //preventing from refreshing the page
		setExpensesPerWeek([]); //to avoind concatination of arrays

		//getting the weeks in a year
		const weeks = eachWeekOfInterval({
			start: new Date(year.getFullYear(), 0, 1),
			end: new Date(year.getFullYear(), 11, 31),
		});

		//looping on all weeks
		for (let i = 0; i < weeks.length - 1; i++) {
			let totalInWeek = 0; // initialize the week expenses to 0

			//for each week, expenses will be iterated whether they are within the week
			for (let j = 0; j < expenses.length; j++) {
				let expense_date = new Date(expenses[j].date);
				let amount = expenses[j].amount;

				//if the current expense date is in between start week to end week
				if (weeks[i] <= expense_date && expense_date <= weeks[i + 1]) {
					totalInWeek += parseFloat(amount);
				}
			}
			//adding the value to array
			setExpensesPerWeek((oldExpensePerWeek) => [...oldExpensePerWeek, totalInWeek]);
		}
	};

	//The expenses at the bottom will not show unless the user will choose a year
	return (
		<Box>
			<form onSubmit={submitYear}>
				<Stack spacing={2}>
					<Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold" }}>
						Total Expenses per week by Year
					</Typography>
					<DatePicker
						views={["year"]}
						label="Year only"
						name="year"
						value={year}
						onChange={(newYear) => {
							setYear(newYear);
						}}
						renderInput={(params) => <TextField {...params} helperText={null} />}
					/>
					<Button type="submit" variant="contained">
						<Typography variant="body1">Check</Typography>
					</Button>

					{expensesPerWeek.length > 0
						? expensesPerWeek.map((expenses, index) => (
								<Typography key={index}>
									Week {index}: {`₱${expenses.toFixed(2)}`}
								</Typography>
						  ))
						: null}
				</Stack>
			</form>
		</Box>
	);
};

export default ExpenseWeekForm;
