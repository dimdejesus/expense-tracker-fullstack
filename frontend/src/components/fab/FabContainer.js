import { Box } from "@mui/material";
import React from "react";
import FabMode from "./FabMode";

//It will be used once the user is in mobile for convenience
//In this case its the light and dark modes
const FabContainer = () => {
	return (
		<Box
			sx={{
				margin: 0,
				top: "auto",
				right: 20,
				bottom: 20,
				position: "fixed",
				display: "flex",
				flexDirection: "column",
				gap: 2,
			}}
		>
			<FabMode />
		</Box>
	);
};

export default FabContainer;
