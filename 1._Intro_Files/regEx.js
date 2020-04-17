// i flag ignores case

const myRegEx = /hello/i;
const result = myRegEx.test("Hello World");

console.log(result);


// Pipe = or
const petString = "Anders has a";
const petRegEx = /dog|cat|vird|fish|turtle/;

console.log(petRegEx.test(petString));

//Match

const extractString = "Extract the word 'cow' from this string";
const cowRegex = /cow/;
const stringRegex = /string/;

console.log(extractString.match(cowRegex));
console.log(extractString.match(stringRegex));

//Matching multiple with the globl flag
// console.log("Repeat, Repeat, Repeat".match(/Repeat/ig));

const twinkleStar = "Twinkle, twinkle, little star";
// console.log(twinkleStar.match(/twinkle/ig));

//Wildcards
const humString = "That's a humbug!";
const hugString = "I need a hug.";

const huRegex = /hu./;
// console.log(humString.match(huRegex));
// console.log(hugString.match(huRegex));

const funString = "He's a fun 'un'";
const funRegex = /.un/g;
// console.log(funString.match(funRegex));

//Find vowels
// console.log("I found big bugs in my bag".match(/[aeiouy]/g));

//Negated characters sets
console.log("I found big bugs in my bag".match(/b[^ai]g/g));

//Match all within a range
console.log("6k854sdfkhgf45ghj".match(/[0-9]/g));

//Matching the entire alphabet
console.log("6k854sdfkhgf45ghj".match(/[a-z]/ig));


//Alphanumeric
console.log("6k854sdfkhgf45ghj".match(/[0-9A-Z]/ig));
console.log("go goo goooo gooooooooo".match(/go+*/ig));