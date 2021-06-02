var myName = "Korrina";
var person1 = "Rob";
var person2 = "Taylor";
let animal = "tiger";
var myname = "Sarah";

const weather = "Cloudy";
console.log("Weather", weather);

//weather = "Rainy"; cant happen because a constant value cannot change.

//semi-colons are optional, but they will be saved in there regardless
//dont mix and match ", ', `. Choose one and stick with it.

console.log("My Name", myName);

// var myName = "Hannah"; < not needed

// Reassigning a variable we do not need to reinitialize the value(bucket)

myName = "Hannah";

console.log("my Name Changed", myName);

let phrase = "Good Morning";

// console.log(phrase, myName); works but not as noticable

// console.log(phrase+" "+myName); works but a bit messy

// console.log(`${phrase} ${myName}, How are you?`); also works. less messy in the long run

let example = "ThE FoX JUmpEd OVeR The turTlE";

console.log(example.toLowerCase());

let name1 = "Marco";
let name2 = "MaRcO";

let match = name1.toLowerCase() === name2.toLowerCase()

console.log("Do names match:", match);

console.log("Does example have this word in it?:", example.includes("FoX"));

console.log("Length of Example:", example.length)

