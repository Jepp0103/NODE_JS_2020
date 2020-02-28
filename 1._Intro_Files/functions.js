//Hoisting
console.log(addition(5, 23));

/*test = "This is a test";
const test;*/

//Definition of a scope
{
    console.log("1,2,3")
}

//console.log(test);

function addition(a, b) {
    return a + b;
}

console.log(addition(2, 6)); //prints 8

function introduce() {
    console.log("Nice to meet you");
}

function findPerson(whatToDoAfterFindingAPerson) {
    console.log("Spotted a person!")
    whatToDoAfterFindingAPerson();
}


function Person() {
    console.log("This is a person!");
}

findPerson(introduce); //Uses the introduce method

//do something else, not introduce
findPerson(Person);



const aboutMe = (me) => {
    console.log("My hobby is", me.hobby);
}

const meAsAnObject = {
    hobby: "programming"
};

const me = meAsAnObject;

me.hobby = "test";

console.log(meAsAnObject);

aboutMe(meAsAnObject);

const anotherExample = {
    myFavoriteFunction: function() {
        console.log("This function is my favorite in the world")
    }
}

anotherExample.myFavoriteFunction();

//create an arrow function that is called callingLater 
//that takes the function calling as an argument
const calling = (name) => {
    return "ring, ring, ring to " + name;
};


const callingLater = (name, calling) => {
    console.log(calling(name));
}

// callingLater("Scatman John", calling);

callingLater("Scatman John", (name) => {
    return "ring ring ring to " + name;
});

function lastThing() {
    function thisIsPossibleInJavascript(){
        console.log("A OK");
    }
    thisIsPossibleInJavascript();
}

lastThing();
