import express from "express";
import cors from "cors";

const app = express(); //Initialize the Express
const PORT = process.env.NODE_DOCKER_PORT || 8080; //my PORT to avoid conflict with React Port 3000

app.use(express.json()); // use of express json
var corsOptions = {
	origin: process.env.CLIENT_ORIGIN || "http://localhost:8081",
};
app.use(cors(corsOptions)); //use cors Allows a server to explicitly allow some cross-origin requests while rejecting others.

//Routes Here
import ExpenseRoute from "./routes/ExpenseRoute.js";
//all of the configuration in ExpenseRoute will be extended here
app.use(ExpenseRoute);
//Starting the server
app.listen(PORT, () => {
	console.log(`Server running at: localhost:${PORT}`);
});
