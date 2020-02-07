// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and variables

var firstName = "Anders";
var lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif
console.log("My first name is", firstName, "and my last name is", lastName)


// --------------------------------------
// Exercise 2 - Numbers and Strings
var year = "2019";
var number = 1;
// Add the year plus the number
// The result should be 2020
// You cannot touch line 1 or 2

var numberYear = Number(year) + number;
var plusYear = +year + number;
var parseYear = parseInt(year) + number;

console.log("Number way: " + numberYear);
console.log("Plus way: " + plusYear);
console.log("Parse way: " + parseYear);

// --------------------------------------