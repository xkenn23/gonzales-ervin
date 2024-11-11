// Step 1
const greet = function () {
  return "Hello Dear Traveler";
};

// Step 2
console.log(greet());

// Step 3
const add = function (num1, num2) {
  return num1 + num2;
};

// Step 4
let sum = add(5, 3);

// Step 5
console.log(sum);

// Step 6
const multiply = function (num1, num2) {
  return num1 * num2;
};

// Step 7
let product = multiply(4, 2);

// Step 8
console.log(product);

// Step 9
const isEven = function (num) {
  return num % 2 === 0;
};

// Step 10
let even = isEven(6);

// Step 11
console.log(even);

// Step 12
const square = function (num) {
  return num * num;
};

// Step 13
let squaredValue = square(3);

// Step 14
console.log(squaredValue);

// Step 15
const fullName = function (firstName, lastName) {
  return `${firstName} ${lastName}`;
};

// Step 16
let name = fullName("John", "Doe");

// Step 17
console.log(name);

// Step 18
const capitalize = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Step 19
let capitalizedString = capitalize("javascript");

// Step 20
console.log(capitalizedString);
