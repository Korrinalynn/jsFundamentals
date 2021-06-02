/*
Conditionals - Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run. Conditionals will check if an expression is true. IF the expression is true, a block of code will run
*/

/*
Falsy Values - considered false.

1) False
2) null
3) undefined
4) 0
5) NaN (not a number)
6) " " (empty string)
*/

/*
Truthy value - considered true.

1) true
2) 42, -42 (any number that isn't 0, positive or negative)
3) "0"
*/

/*
let snowing = true;

if (snowing == true) {
    console.log('It is snowing outside!');
}

if (snowing) {
    console.log('It is still snowing!');
}


if (snowing == false) {
    console.log(`It stopped snowing. It's too warm.`);
}


if (snowing) {
    console.log("It is not snowing. Bummer!");
}
*/

/*
If else - If the expression is false, it will run the next black of code.
the else statement specifies a black of code to be executed if the condition is false.
*/

/*
let puppies = 3;

if (puppies < 1) {
    console.log('I need more puppies.');
} else {
    console.log('I have enough puppies!');
}

let myName = "Korrina";

if (myName == "Taylor") {
    console.log('Hello! My name is' ${myName}.);
} else {
    console.log('Hello, is your name' ${myName}?);
}
*/

/*
Challenge! 

BRONZE

Write two variables. One will store your name and another will store a friend's name. 
Find out what property you can use to check how long the names are. 
Console log how many letters are in each name.

SILVER

Expand on what you have already done and write a conditional to see who has 
the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.

GOLD

In the console log include how many letters difference there are between the 
names.Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been 
mentioned so far. See if you can add that to your conditional!

*/

//BRONZE
var me = "Korrina";
var friend = "Hannah";

console.log("Korrina's name is", me.length, "letters long!");
console.log("Hannah's name is", friend.length, "letters long!");

//SILVER
let me1 = true;
let friend1 = false;

if (me1 == true) {
    console.log('Korrina has a longer name than Hannah!');
}

if (friend1 == true) {
    console.log(`Hannah has a longer name than Korrina!`);
}

//easier way

if(me.length > friend.length) {
    console.log(`${me}'s name is longer than ${friend}'s name.`)
} else {
    console.log(`${friend}'s name is longer than ${me}'s name.`)
}

//GOLD
let me2 = 1;
let friend2 = 1;

console.log("Hannah's name is", friend2, "letter shorter than Korrina's.");
console.log("Korrina's name is", me2, "letter longer than Hannah's.");

//easier way

if(me.length > friend.length) {
    console.log(`My name is longer than ${friend}'s by ${me.length - friend.length} letters.`)
} else {
    console.log(`${friend}'s name is longer than ${me}'s name by ${friend.length - me.length}.`)
}

//PLATINUM

if(me.length > friend.length) {
    console.log(`My name is longer than ${friend}'s by ${me.length - friend.length} letter.`)
} else if (me.length < friend.length) {
    console.log(`${friend}'s name is longer than ${me}'s name by ${friend.length - me.length} letter.`)
} else {
    console.log('Our names are the same length.')
}