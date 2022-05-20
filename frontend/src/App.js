import { Box } from "@mui/material";
import { useEffect, useState } from "react";

import Hidden from "@mui/material/Hidden";

import Header from "./components/Header";
import Body from "./components/Body";

import useBackend from "./hooks/useBackend";
import { useAlertContext } from "./hooks/useCustomContext";
import Space from "./components/utils/Space";
import FabContainer from "./components/fab/FabContainer";

function App() {
	const { getAllExpenses } = useBackend();
	const { triggerError } = useAlertContext();

	const [expenses, setExpenses] = useState([]);
	const [totalExpenses, setTotalExpenses] = useState(0);

	useEffect(() => {
		getAllExpenses()
			.then((response) => {
				setExpenses(response.expenses);
				setTotalExpenses(response.sumExpenses._sum.amount);
			})
			.catch((error) => triggerError(error.message));
	}, [expenses]);

	return (
		<Box sx={{ width: "80%", margin: "auto" }}>
			<Header />
			<Space />
			<Body expenses={expenses} total={totalExpenses} />
			<Hidden smUp>
				<FabContainer />
			</Hidden>
		</Box>
	);
}

export default App;
