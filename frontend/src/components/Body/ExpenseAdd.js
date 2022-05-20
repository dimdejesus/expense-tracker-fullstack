import React, { useState } from "react";
import { Box, Modal, Stack, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "@mui/material";

import useBackend from "../../hooks/useBackend";
import { useAlertContext } from "../../hooks/useCustomContext";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const ExpenseAdd = ({ modalOpen, handleClose }) => {
	const { createExpenses } = useBackend(); //get the createExpenses in the backend to add expenses
	const { triggerSuccess, triggerError } = useAlertContext(); //get the triggers for user visualization of happenings

	const [description, setDescription] = useState(""); //description textfield
	const [date, setDate] = useState(null); //date textfield
	const [amount, setAmount] = useState(0); //amount textfield

	//this is where it will go once the user clicks the Submit button.
	const submitForm = (e) => {
		e.preventDefault();

		//A promis based where the adding of expenses to the backend is happening
		createExpenses(description, date, amount)
			.then((response) => {
				triggerSuccess(response.message);
			})
			.catch((error) => triggerError(error.message));

		//set the values to default values
		setDescription("");
		setDate(null);
		setAmount(0);
		handleClose();
	};

	return (
		<Modal
			open={modalOpen}
			onClose={handleClose}
			aria-labelledby=""
			aria-describedby=""
			sx={{}}
		>
			<Box sx={style}>
				<form onSubmit={submitForm}>
					<Stack spacing={2}>
						<Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold" }}>
							Add New Expense
						</Typography>
						<TextField
							variant="outlined"
							label="Description"
							name="description"
							onChange={(e) => setDescription(e.target.value)}
							value={description}
							required
						/>

						<DatePicker
							label="Start Date"
							name="date"
							onChange={(newValue) => setDate(newValue)}
							value={date}
							renderInput={(params) => <TextField {...params} required />}
						/>

						<TextField
							variant="outlined"
							label="Amount"
							name="amount"
							onChange={(e) => setAmount(+e.target.value)}
							value={amount}
							required
						/>
						<Button variant="contained" type="submit">
							Submit
						</Button>
					</Stack>
				</form>
			</Box>
		</Modal>
	);
};

export default ExpenseAdd;
