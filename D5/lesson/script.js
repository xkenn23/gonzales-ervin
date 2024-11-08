// Introduction to Variables
// create a variable called name and assign the value "john"
// let Name = "john";
// name = "ben";
// const tmp = 100;

// console.log(name);
// console.log(tmp);

// Basic Syntax
// let x = "10";
// let y = 5;
// let sum = x + y;

// console.log(sum);

// Primitive types: These are the most basic data types in JavaScript:
// Number: Represents numeric values. For example, 5, 3.14, -10.

// String: Represents textual data enclosed in single ('') or double ("") quotes. For example, "Hello", 'JavaScript'.
// Boolean: Represents either true or false (logical values).
// Null: Represents the intentional absence of any object value

let name = "sir"; // string data type
let age = 25; // number data type
let isStudent = true; // boolean data type
let car = null; // null data type
let city = undefined; // undefined data type

// Outputting data type:

console.log("type of name", typeof name);
console.log("type of age", typeof age);
console.log("type of isStudent", typeof isStudent);
console.log("type of car", typeof car);
console.log("type of city", typeof city);

// Operators and Expressions

let x = 5;
let y = 2;

let sum = x + y;
console.log("Sum:", sum);

let difference = x - y;
console.log("Difference:", difference);

let product = x * y;
console.log("Product:", product);

let quotient = x / y;
console.log("Quotient:", quotient);

let remainder = x % y;
console.log("Remainder:", remainder);

// Assignment Operators
let a = 10;
let b = 5;

a += b;
console.log("A:", a);

a -= b;
console.log("A:", a);

a *= b;
console.log("A:", a);

a /= b;
console.log("A:", a);

// Comparison Operators

let p = 3;
let q = 6;
console.log("p < q:", p < q);
console.log("p > q:", p > q);
console.log("p >= q:", p >= q);
console.log("p <= q:", p <= q);

// //strict equility compares value and data type
console.log("p === q:", p === q);

console.log("p == q:", p == q);

// Logical Operators
let sunny = true;
let warm = false;

console.log("sunny && warm", sunny && warm);
console.log("sunny && sunny", sunny && sunny);
console.log("sunny || warm", sunny || warm);
console.log("Not true: !sunny", !sunny);
