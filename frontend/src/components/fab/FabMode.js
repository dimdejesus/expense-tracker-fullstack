import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";

import { useThemeContext } from "../../hooks/useCustomContext";

//Floating action button for turning light mode and dark mode
const FabMode = () => {
	return (
		<Fab
			color={useThemeContext().mode === "dark" ? "default" : "inherit"}
			aria-label="mode"
			onClick={useThemeContext().themeMode.toggleThemeMode}
		>
			{useThemeContext().mode === "dark" ? <NightsStayIcon /> : <LightModeIcon />}
		</Fab>
	);
};

export default FabMode;
