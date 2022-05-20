import { createContext, useState, useMemo } from "react";
import { ThemeProvider as TP } from "@mui/material/styles";
import themeFn from "../styles/theme";

export const ThemeContext = createContext({ toggleColorMode: () => {} });

//provding a global mode (dark and light)
//tutorial by MUI
export function ThemeProvider({ children }) {
	//the mode variable consist of two strings "light" and "dark"
	const [mode, setMode] = useState("light");

	//toggling between light and dark. useMemo was used in order to avoid unecessary rendering.
	const themeMode = useMemo(
		() => ({
			toggleThemeMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[]
	);

	//get the theme data. useMemo was used for it to be rendered if and only if the mode has change
	const theme = useMemo(() => themeFn(mode), [mode]);

	return (
		<ThemeContext.Provider value={{ themeMode, mode }}>
			<TP theme={theme}>{children}</TP>
		</ThemeContext.Provider>
	);
}
