import React from "react";
import { Stack, Typography } from "@mui/material";
//This is where the total expenses is placed
const TotalExpensesTracker = ({ total }) => {
	return (
		<Stack sx={{ textAlign: "center" }}>
			<Typography variant="h5">Overall Expenses</Typography>
			<Typography variant="h4" sx={{ fontWeight: "bold" }}>
				{`₱${total}`}
			</Typography>
		</Stack>
	);
};

export default TotalExpensesTracker;
