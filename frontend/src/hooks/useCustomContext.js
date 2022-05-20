import { useContext } from "react";

import { AlertContext } from "../context/AlertContext";
import { ThemeContext } from "../context/ThemeContext";

//getting the values depending on the context
export const useThemeContext = () => {
	const theme = useContext(ThemeContext);

	return theme;
};

export const useAlertContext = () => {
	const alert = useContext(AlertContext);

	return alert;
};
