import { ThemeProvider, createTheme } from "@mui/material/styles";

//this is where the customization of MUI Theme start.
//It is a function that returns the theme.
//function was used because value can be change depending on the mode "light" or "dark"
const themeFn = (mode) =>
	createTheme({
		palette: {
			mode /* : "dark" */,
			background: {
				default: mode === "dark" ? "#121212" : "#f8f8ff",
			},
		},
	});

export default themeFn;
