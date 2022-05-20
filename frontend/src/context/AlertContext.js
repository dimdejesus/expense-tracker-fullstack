import { Children, createContext, forwardRef, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export const AlertContext = createContext();

const Alert = forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

//To proide universal value for triggering of Alert effect
//Avoids calling for alert repeatedly.
export const AlertProvider = ({ children }) => {
	const [open, setOpen] = useState(false);
	const [type, setType] = useState("success");
	const [content, setContent] = useState("");

	//Show a snackbard with success Alert -> green
	const triggerSuccess = (text) => {
		setOpen(true);
		setType("success");
		setContent(text);
	};

	//Show a snackbard with success Alert -> red
	const triggerError = (text) => {
		setOpen(true);
		setType("error");
		setContent(text);
	};

	//Show a snackbard with success Alert -> blue
	const triggerInfo = (text) => {
		setOpen(true);
		setType("info");
		setContent(text);
	};

	//Show a snackbard with success Alert -> yellow
	const triggerWarning = (text) => {
		setOpen(true);
		setType("warning");
		setContent(text);
	};

	//handle the closing of the snackbar
	const handleClose = (event, reason) => {
		//if the user clicks away then nothing happens
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
		setType("success");
		setContent("");
	};

	return (
		<AlertContext.Provider
			value={{
				triggerSuccess,
				triggerError,
				triggerInfo,
				triggerWarning,
			}}
		>
			<Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
				<Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
					{content}
				</Alert>
			</Snackbar>

			{Children.map(children, () => children)}
		</AlertContext.Provider>
	);
};
