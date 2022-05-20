import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { format } from "date-fns";

//Card for each Expense, this is reusable
const ExpenseCard = ({ description, date, amount }) => {
	return (
		<>
			<Paper
				sx={{
					p: 2,
					boxShadow: "0px 8px 24px 2px rgba(54, 59, 100, 0.15)",
					position: "relative",
				}}
			>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					spacing={2}
				>
					<Box>
						<Typography variant="h5" color="primary" sx={{ fontWeight: "bold" }}>
							{description}
						</Typography>
						<Typography variant="body1">
							{format(new Date(date), "MMM dd, yyyy")}
						</Typography>
					</Box>
					<Typography variant="h5" sx={{ fontWeight: "bold" }}>
						{`₱${amount}`}
					</Typography>
				</Stack>
			</Paper>
		</>
	);
};

export default ExpenseCard;
