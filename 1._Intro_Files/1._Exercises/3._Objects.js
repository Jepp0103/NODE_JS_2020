// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key
console.log("------------------------------------------------")
console.log("Exercise 1:")
var myObj = {"message": "Hello, earthling! I bring peace."};

// Log the message 

//dot notation
console.log(myObj.message);

// --------------------------------------
// Exercise 2 - Defining an object. 
console.log("------------------------------------------------")
console.log("Exercise 2:")
// Create an object that has your name and age. 

var person = {name: "Jeppe", age: 24};
console.log(person);

// --------------------------------------
// Exercise 3 - Add a property 
console.log("------------------------------------------------");
console.log("Exercise 3:");
var stackOverflow = {isAllowed: true};
console.log(stackOverflow);

// make a rule called isAllowed and let the value be true

// --------------------------------------
// Exercise 4 - Remove a property 
console.log("------------------------------------------------");
console.log("Exercise 4:");

var thisSong = {"description": "The best song in the world.", "artist": "Michael Jackson", "song": "Billie Jean"};

//Remove the property "description"
delete thisSong.description;

console.log("Only artist:", thisSong.artist);
console.log("All information:", thisSong)

//Overwriting the object with a property called "about".
thisSong = {"about": "Michael Jackson doesn't live any longer"};
console.log("Overwrited object", thisSong);

// --------------------------------------
