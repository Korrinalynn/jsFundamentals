/*
    Challenge #1

        -Write a function that accepts name and grade as parameters, and then
        prints "NAME got a GRADE in social studies." to the console.
*/

var name = "Korrina"
var grade = "70%"

function school() {
    console.log(`${name} got a ${grade} in social studies.`);
}

school();

/*
    - CHALLENGE #2
        - Write a program that prints all numbers from 300-400
            - for multiples of 6, instead of the number, print 'Marco'
            - for multiples of 8, instead of the number, print 'Lopez'
            - for multiples of 6 AND 8, instead of the number, print 'Marco Lopez'
*/

for (let i = 300; i <= 400; i += 1) {
    if (i % 6 === 0 && i % 8 === 0) {
        console.log("Marco Lopez"); //doesnt work how it should
    } else if (i % 6 === 0) {
        console.log("Marco");
    } else if (i % 8 === 0) {
        console.log("Lopez");
    } else {
        console.log(i);
    }
}

/*
    - CHALLENGE #3
  - Write a function called findPerimeter() that accepts 2 parameters 
  called: length, width.
  - The function should return an interpolated string of 
  'True: the perimeter is ___' if the perimeter is over 20
  - the function should return an interpolated string of 
  'False: the perimeter is ___' if the perimeter is under 20
  -if the function is equal, Have it return a sentence that says, “The perimeter is equal to 20”
            HINT: P = x + x + y + y
                  P = 2x + 2y
                  P = 2(x + y)
*/


function findPerimeter(length, width) {
    let perimeter;
    if(length * 2 + width * 2 > 20) {
        perimeter = length * 2 + width * 2;
        return `True: the perimeter is ${perimeter}`;
    } else if (length * 2 + width * 2 < 20) {
        perimeter = length * 2 + width * 2;
        return `False: the perimeter is ${perimeter}`;
    } else {
        return `The perimeter is equal to 20.`
    }
}

console.log(findPerimeter(7, 6));

/*
    - CHALLENGE #4
        - Create an object literal called library.
        - the library object will contain 3 properties: name, address, sections
        - name and address will both hold values that are strings. You can 
        fabricate the information.
        - sections will be an object that will store a property 
        called collections, which is an array of more objects. 
        You should include at least 2 objects inside the collections array.
        - the objects stored in the collections array will hold properties 
        of classification, count, and aisle. 
        - both the classification and aisle properties should hold strings 
        as values, and count should hold a value that is a number.
*/

let library = {
    name: "Fishers Library",
    address: "123 E Street Name",
    sections: {
        collections: [{
            classification: "Fantasy",
            aisle: "A",
            count: 123
        }, {
            classifications: "Horror",
            aisle: "C",
            count: 456
        }]
    }
}

console.log(library.sections.collections[0].aisle);