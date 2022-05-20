import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import CssBaseline from "@mui/material/CssBaseline";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { AlertProvider } from "./context/AlertContext";
import { ThemeProvider } from "./context/ThemeContext";

//theme and alert values became global by wrapping them on the App component.
//CssBaseline is also needed for dark mode
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ThemeProvider>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<AlertProvider>
					<CssBaseline>
						<App />
					</CssBaseline>
				</AlertProvider>
			</LocalizationProvider>
		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
