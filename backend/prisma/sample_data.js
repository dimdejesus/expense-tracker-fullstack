//Where my dummy data placed
import { eachDayOfInterval } from "date-fns";

//My Description or category
const descriptions = [
	"Housing",
	"Trasportation",
	"Food",
	"Utilities",
	"Clothing",
	"Healthcare",
	"Insurance",
	"Household",
	"Personal",
	"Debt",
	"Retirement",
	"Education",
	"Savings",
	"Donations",
	"Entertainment",
	"Others",
];

//get the day intervals of dates for dummy data
const dates_available = eachDayOfInterval({
	start: new Date(2022, 3, 1),
	end: new Date(2022, 4, 31),
});

//Where I place all my dummy data
const sample_data = [];

//to insert the randomize dummy account
for (let i = 0; i < descriptions.length; i++) {
	sample_data.push({
		description: descriptions[i],
		date: dates_available[Math.floor(Math.random() * descriptions.length)],
		amount: Math.random() * 2000,
	});
}

export default sample_data;
