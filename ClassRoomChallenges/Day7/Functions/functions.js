greeting(); //INVOKED THE FUNCTION
function greeting() {
    //anything inside the curly brackets will get executed when the function is called
    console.log("HELLO FROM GREETING");
}

// Expressions
// ORDER MATTERS
// The key differences between a function expression and function declaration
//  -declaration gets hoisted
//  -expressions do not

let greetingExpression = function () {
    console.log("HELLO FROM GREETING EXPRESSION");
};

greetingExpression();


//create a function that, when invoked, lists out numbers 1-10
//create a function
//for-loop inside the function
//invoke = call the function

let count = function () {
    for (let i = 1; i <= 10; i += 1) {
        console.log(i);
    }
}

count();

//PARAMETERS
//Functions have parameters that are place holders for data that we can pass into the function when calling it

function studentGreeting(studentName) {
    console.log(`Good Afternoon, ${studentName}!`)
}

studentGreeting("Rob");
studentGreeting("Jeff");
studentGreeting("Korrina");

/*
-Write a function that takes two parameters:
    -one parameter is for a first name,
    -the other parameter is for a last name;
    -have them come together in a variable inside the function.
    -console.log 'Hello, my name is <your name>'
    -call (or invoke) your function
*/

function greetingFullName(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`;
    console.log(`Hello, my name is ${fullName}!`);
}

greetingFullName("Korrina", "Shaw");

//Number functions

function area(length, width) {
    let areaCalc = length * width
    return areaCalc
}

// let area1 = area( 4, 10);
// let area2 = area(10,60);
// console.log(area1, area2);

function volume(length, width, height) {
    let volumeCalc = length * width * height
    return volumeCalc
}

let volume1 = volume(4, 6, 10);
console.log(volume1);

//HumanAge = (DogAge - 2) * 4 + 21

function convertDogYearsToHumanYears(dogAge) {
    let HumanAge = (dogAge - 2) * 4 + 21;
    return HumanAge;
}

let roverAge = convertDogYearsToHumanYears(5);
console.log(roverAge);