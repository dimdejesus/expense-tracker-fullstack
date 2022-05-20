import { Grid } from "@mui/material";
import React from "react";

import CustomContainer from "./utils/CustomContainer";
import TotalExpensesTracker from "./Body/TotalExpensesTracker";
import ExpenseWeekForm from "./Body/ExpenseWeekForm";
import Expenses from "./Body/Expenses";

//Contains the structure of the content. 2 container in left and 1 big container on right.
//The main container has 2 sections -> left and right
//the left is an item that is also a container in order to structure the 2 items at the top and bottom.
//the right is an item that consist of list of expenses
const Body = ({ expenses, total }) => {
	return (
		<Grid container spacing={2}>
			<Grid item container direction="column" spacing={2} xs={12} md={4}>
				<Grid item>
					<CustomContainer>
						<TotalExpensesTracker total={total} />
					</CustomContainer>
				</Grid>
				<Grid item>
					<CustomContainer>
						<ExpenseWeekForm expenses={expenses} />
					</CustomContainer>
				</Grid>
			</Grid>
			<Grid item xs={12} md={8}>
				<CustomContainer>
					<Expenses expenses={expenses} />
				</CustomContainer>
			</Grid>
		</Grid>
	);
};

export default Body;
