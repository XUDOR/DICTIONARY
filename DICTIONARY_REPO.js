//scope : global /local. > local has access to global, but global doesnt have access to local **NB: watch (), and {}

var Global = "I am Global Scope";
function exampleScope() {
  let Local = "I am Local";
  console.log(Global); // works
}
console.log(Local); // throws a reference error


//IIFE: immediately invocated function expression

//Parameters & Arguements

//function definition; code that defines a function such that a block of code will have parameters and a return value. 
//The function can be named or Anonymous.

//FUNCTION DECLARATION :: HOISTED -- CAN BE CALLED BEFORE THEY ARE DEFINED IN THE CODE...

//function expression:
const greet = function (name) { // Anonymous
  return 'hello, ${name}!';

};
console.log(greet('alice')); // outputs: "Hello Alice";
// example 2
const round = function (num) {
  return Math.round(num) * 100 / 100;
};

round(3.147);

//return statement. exits the function block and RETURNS a VALUE to the function


// function call; a function call is: syntax which results in a function defintion BEING executed. A function is "CALLED" when we want to run it.
//INVOCATION

//High Ordered Functions: Functions that take other functions as arguments.
//close to callbacks ...
//example 1: -- higher ordered
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log); // console.log is the callback

//example 1A -- callback example
function greeting(name) {
}
function processUserInput(callback) {
  var name = prompt('please enter your name');
  callback(name);
}

processUserInput(greeting); // greeting is the callback function
//In this case, processUserInput is the higher-order function because it takes greeting, 
//a callback function, as an argument.

//callback : a function that is passed as an arguement in another function, and is excuted inside the function.

//promise >> ASYNC : 3 states resolved, reject, uses this and then applications : authentication, 

//REST paramenters :  ES6 (...) a javascript feature that allows a function to  accept and infinite amount of arguments as an TRUE array.
//map, filter, reduce can be used.... etc /- DONT CONFUSE WITH SPREAD ... Rest parameters collect all remaining arguments into an array,
//whereas the spread syntax expands an array into individual elements.
//MUST be last arguement.

function sum(...numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}

console.log(1, 2, 3, 4); // output: 10

//ARROW FUNCTION ES6 > concise syntax - implicit return, shares 'this' of parent.
// example:
const add = (a, b) => a + b;

//ARROW_FUNCTION -- :No argument object / if access required: use rest parameter

const concatenate = (...args) => args.join('');




//ternary operator ? condition { } : (else) {}

//reduce 4(arguements) - accumulator, function, index, array

//object.values -- objects becomes an array // filter // map


//??  often we are making a choice between using A: an ARRAY of objects, or B: and object of objects >>
//

const arrayOfObjects = [
  {
    first: 'mickey',
    last: 'mouse'
  },
  {
    first: 'goofy',
    last: 'dog'
  }
];
console.log(arrayOfObjects[0]);

const kind = arrayOfObjects.filter(obj => obj.last === "mouse");


console.log(kind);
// ????

const objectOfObjects = {
  mouse:
  {
    first: 'mickey',
    last: 'mouse'
  },

  dog:
  {
    first: 'goofy',
    last: 'dog',
  }
};

console.log(objectOfObjects.mouse);
// or
console.log(objectOfObjects['mouse']);

Object.values(objectOfObjects).forEach(obj => {
  console.log(obj.first, obj.last);
});


// ARRAYS of ARRAYS >> REDUCE

const arrayOfArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

//Operations Using .reduce() and Arrow Functions
//1. Sum of All Numbers / To calculate the sum of all numbers in all arrays:

const totalSum = arrayOfArrays.reduce((sum, currentArray) => {
  return sum + currentArray.reduce((arraySum, number) => arraySum + number, 0);
}, 0);

console.log(totalSum); // Output will be the sum of all numbers


//2. Flatten the Array / To flatten the array of arrays into a single array:

const flattenedArray = arrayOfArrays.reduce((accumulator, currentArray) => {
  return accumulator.concat(currentArray);
}, []);

console.log(flattenedArray); // Output will be a single array containing all elements


// 3. Counting Occurrences / Suppose you want to count how many times each number appears across all arrays:

const numberOccurrences = arrayOfArrays.reduce((accumulator, currentArray) => {
  currentArray.forEach(number => {
    accumulator[number] = (accumulator[number] || 0) + 1;
  });
  return accumulator;
}, {});

console.log(numberOccurrences); // Output will be an object with numbers as keys and their occurrences as values


// 4. Maximum Number in All Arrays / To find the maximum number across all arrays:

const maxNumber = arrayOfArrays.reduce((max, currentArray) => {
  const currentMax = Math.max(...currentArray);
  return max > currentMax ? max : currentMax;
}, Number.MIN_SAFE_INTEGER);

console.log(maxNumber); // Output will be the maximum number found

//Practice Suggestions

//Modify the arrays or the operations to see how the results change.
//Try combining .map(), .filter(), and .reduce() in different ways to perform more complex operations.
//Experiment with different initial values for .reduce().
//Explore using arrow functions with other array methods like .sort(), .every(), and .some().
//This practice should give you a good understanding of how to work with arrays, arrow functions, and the .reduce() method in JavaScript.
