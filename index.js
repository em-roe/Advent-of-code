// fedd the input files into the fucntions from index

const fs = require("fs");
// function imports for each day
const dayOne = require("./src/dayOne");
//data import for each day
const dayOneData = fs.readFileSync("./Inputs/day1.txt", "utf8");

//fs is a native node to access file system

// DAY ONE
dayOne(dayOneData);
