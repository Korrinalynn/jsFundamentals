/*
    ARROW FUNCTIONS
*/

function hello() {
    console.log("Hello!");
}

hello();

// arrow functions are introduced in ES6. They are a more concise way of writing function expressions.
// (1)       (2)
let hi = () => {
    console.log("Hi!");
}

hi();

/*
    1. Set my arrow function to a variable.
    2. Use my arrow to signify that it's a function.

    Arrow Functions cannot be hoisted because they are NOT declarations.
*/

//CONCISE BODY
let hi = () => console.log("Hi!");

hi();

//BLOCK BODY
let hi = () => {
    console.log("Hi");
};

hi();

//CONCISE VS BLOCK BODY
let apples = x => console.log(`There are ${x} apples.`);
apples(10);

// More than one parameter will require parenthesis
let apples = (x,y) => {
    console.log(`There are ${x} apples and ${y} oranges.`);
};
apples(10, 15);