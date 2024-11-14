// Calculate the square root of a number

const sqrRoot = function (number) {
  return Math.sqrt(number);
};

console.log(sqrRoot(4));

// Generate a ramdom number from 1 to 10

const randomNumber = function () {
  return Math.floor(Math.random() * 10) + 1;
};

console.log(randomNumber());

// Convert a string representatino of a number to an actual number

const toNumber = function (text) {
  return Number(text);
};

console.log(toNumber("23.08"));

//Check if a value is not a number.

const checkNan = function (value) {
  return isNaN(value);
};

console.log(checkNan(5));

// Convert a number to a string.

const makeNumber = function (text) {
  return `${text}`;
};

console.log(makeNunber(23));
