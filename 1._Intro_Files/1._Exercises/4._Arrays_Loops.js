// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning
console.log("------------------------------------------------")
console.log("Exercise 1:")

var letters = ["a","b","c"];
// show b in the console 
console.log(letters[1]);

// --------------------------------------
// Exercise 2 - Array Positioning
console.log("------------------------------------------------")
console.log("Exercise 2:")

var friends = [];

// What a lonely array. Add at least 3 friend objects to it.  
var Jeppe = {name: "Jeppe", age: 24};
var Martin = {name: "Martin", age: 25};
var Alex = {name: "Alex", age: 26};

friends.push(Jeppe, Martin, Alex);
console.log(friends);

// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 
console.log("------------------------------------------------")
console.log("Exercise 3:")

var significantMathNumbers = [0, 2.718, 3.14159, 1729]

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 
var firstIndex = significantMathNumbers.indexOf(1729);
console.log(firstIndex);

// --------------------------------------
// Exercise 4 - Inserting elements
console.log("------------------------------------------------")
console.log("Exercise 4:")

var diet = ["tomato", "cucumber", "rocolla", "kale"]

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements rocolla and kale

diet.splice(3,0, "hamburger", "soda", "pizza");
console.log(diet);

// --------------------------------------
// Exercise 5 - Remove element
console.log("------------------------------------------------")
console.log("Exercise 5:")

// You don't like kale at all. Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 
diet.pop(); //pop removes last element
// --------------------------------------

// --------------------------------------
// Exercise 6 - Copy array
console.log("------------------------------------------------")
console.log("Exercise 6:")
// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  
var dinnerTray = diet;
console.log("Dinnertray:", dinnerTray);


// --------------------------------------

// --------------------------------------
// Exercise 7 - For loop
console.log("------------------------------------------------")
console.log("Exercise 7:")

var letters = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b
for (i = 0; i < letters.length; i++) {
    if (i % 2 == 0)
        console.log(letters[i + 1]);
}


// --------------------------------------
// Exercise 8 - For loop and if statement
console.log("------------------------------------------------")
console.log("Exercise 8:")

var numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

var discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > 6 || numbers[i] < 0) {
        console.log(numbers[i]);
    } else {
        discardedNumbers.push(numbers[i]);
    }
}
console.log("Discarded numbers: " + discardedNumbers);


// --------------------------------------