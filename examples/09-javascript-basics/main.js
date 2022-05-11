//NAMING:
//lowercaseUppercase
//under_score

// Alert
alert("El tigre");

// Console log
// https://javascript.info/debugging-chrome#logging
console.log("Hello ;-)")

// Variables
// https://javascript.info/variables
const myName = "Luis"
let tree = "mahagoni"

//Number
const amountOfTrees = 10;

//Boolean
let isItRaining = false;
isItRaining = true; //reassign to «true»

console.log("name: ", myName);
console.log("name");
console.log(myName);
console.log("isItRaining", isItRaining);


// Comparisons
// https://javascript.info/comparison
const isItTrue = 5 > 3;
console.log ("is it true?", isItTrue);

// Conditional branching: if
// https://javascript.info/ifelse

//(isItTrue) = (isItTrue == true)
//(!isItTrue) = (isItTrue == false)
if (isItTrue) {
    console.log ("YEAH! the nummber is bigger");
}else{
    console.log (";-(");
}


// Logical operators: || and && and !(NOT)
// https://javascript.info/logical-operators

const sunny = true;
const rainy = true;
const cloudy = true;


// one value OR the other is true
if (sunny || rainy) {
    console.log("summer rain...")
}
//both values true
if (sunny && cloudy) {
    console.log("Cloudy and Sunny at the same time ")
}

if (sunny && !rainy) {
    console.log("it is sunny, but not rainy")
}

// Loops: while and for
// https://javascript.info/while-for
let i = 0;
while (i < 4) {
    console.log("while loop: ", i);
    i = i + 1;
}

for (let i = 4; i < 8; i++) {
    console.log ("for loop: ", i);
}

for (let i = 7; i >= 4; i--) {
    console.log ("for loop going down: ", i);
}

// Objects
// https://javascript.info/object
// comma for indicating the list: x: something, y: something,
const myObject = {
    x: 10,
    y: 20,
};

const family = {
    mother: "Marge",
    father: "Homer",
    son: "Bart",
    daughter1: "Lisa",
    daughter2: "Maggie",
    house: {
        room1: "kitchen",
        room2: "livingroom",
        room3: "bathroom",
    }
}

console.log(family.father, family.son)
console.log(family.house.room1, family.house.room2)


// Arrays
// https://javascript.info/array

const coolNames = ["luis", "lyvia", "lars"];
console.log("coolNames[0]: ", coolNames[0]);

const nestedArray = [
    ["luis",  "homer", "lyvia"],
    ["luis",  "lisa", "marge"],
];

console.log(nestedArray[1][2]);
console.log("length of nested Array: ", nestedArray.length);

for (let i = 0; i < coolNames.lenght; i++) {
    console.log(coolNames[i]);
}


// Defining functions
function multiplyByTwo(number) {
    console.log ("number: ", number)
   return number * 2;
}

const value = multiplyByTwo(3);
console.log("value :", value);

const  secondValue = multiplyByTwo(value);
console.log("Second value :", secondValue);


// Accessing the DOM
// https://javascript.info/searching-elements-dom

const selectedDiv = document.getElementById("myDiv");
console.log("selectedDiv :", selectedDiv);

const myListElements = document.querySelectorAll(".list-item");
console.log("myListElements: ", myListElements);

