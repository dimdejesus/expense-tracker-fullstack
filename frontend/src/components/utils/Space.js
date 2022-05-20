import React from "react";
import Box from "@mui/material/Box";

//This component provide spacing vertically
const Space = ({ height = 20 }) => {
	return <Box sx={{ height: height }} />;
};

export default Space;
