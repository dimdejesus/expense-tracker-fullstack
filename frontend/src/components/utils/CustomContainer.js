import { Paper } from "@mui/material";
import React from "react";

//Container on where the data or form will be placed
const CustomContainer = ({ children }) => {
	return (
		<Paper
			elevation={3}
			sx={{ boxShadow: "0px 8px 24px 2px rgba(54, 59, 100, 0.08)", padding: 5 }}
		>
			{children}
		</Paper>
	);
};

export default CustomContainer;
