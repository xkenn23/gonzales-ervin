// Arrow Functions

// Transforming a function to an arrow function.

function square(num) {
  return num * num;
}

console.log(square(3)); // output 9

const squareArrow = (num) => {
  return num * num;
};

console.log(squareArrow(3)); // output 9

const multiply = (a, b) => a * b;

console.log(multiply(2, 4)); // output 8

//template literals

const name = "Alice";
const age = 25;

console.log(`My name is ${name} and my age is ${age}`);

/*
Destructuring - Extract Values from Arrays and Objects

Destructuring allows you to quickly unpack values from arrays or objects into separate variables, making it easier to work with complex data structures.
*/

const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;
console.log(first);
console.log(second);
console.log(rest);

const person = { name: "Bob", age: 30, country: "USA" };

const { name: Personname, age2, country } = person;
console.log(Personname);
console.log(age2);
console.log(country);

/*
Spread and Rest Operators - Gather and Spread Values
The spread and rest operators (...) look the same but serve different purposes based on where they are used.
*/

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinesArray = [...array1, ...array2];
console.log(combinesArray);

//Default Parameters - Set Default Values for Function Arguments

const calculatedArea = (length = 1, width = 1) => length * width;
console.log(calculatedArea(3, 6));
