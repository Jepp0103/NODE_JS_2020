// --------------------------------------
// Exercise 3 - Add numbers from string to float
console.log("------------------------------------------------")
console.log("Exercise 3:")
var numberOne = "1.10";
var numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch neither line 1 or line 2
var floatOne = parseFloat(numberOne);
var floatTwo = parseFloat(numberTwo);
var result = floatOne + floatTwo;
console.log(result);


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals
console.log("------------------------------------------------")
console.log("Exercise 4:")
var numberOne = "1.10";
var numberTwo = "2.30";

var floatOne = parseFloat(numberOne);
var floatTwo = parseFloat(numberTwo);
var result = (floatOne + floatTwo).toFixed(2);
console.log(result);


// --------------------------------------
// Exercise 5 - Decimals and average
console.log("------------------------------------------------")
console.log("Exercise 5:")
var one = 10;
var two = 45;
var three = 98;

// Show in the console the avg. with 5 decimals
var average = ((one + two + three) / 3).toFixed(5);
console.log(average);


// --------------------------------------

// --------------------------------------
// Exercise 6 - Get the character by index
console.log("------------------------------------------------")
console.log("Exercise 6:")
var letters = "abc"
// Get me the character "c"
console.log("Letters: " + letters.charAt(2));
console.log("Array index: " + letters[2]);


// --------------------------------------
// Exercise 7 - Replace
console.log("------------------------------------------------")
console.log("Exercise 7:")
var fact = "You are learning javascript!";

// capitalize the J in Javascript
console.log(fact.replace("j", "J")); //Only replaces first occurence

var computer = {};

// --------------------------------------
