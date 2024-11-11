// step 1

const isEven = function (num) {
  return num % 2 === 0;
};

// step 2

for (i = 0; i < 10; i++) {
  console.log("number", i, isEven(i));
}

// step 3

const multiply = function (num1, num2) {
  return num1 * num2;
};

let product = multiply(4, 2);
console.log(product);

// Step 4
while (true) {
  // Prompt the user to enter two numbers
  let num1 = parseFloat(prompt("Enter the first number:"));
  let num2 = parseFloat(prompt("Enter the second number:"));

  if (num1 < 0 || num2 < 0) {
    console.log("Terminating loop due to negative input.");
    break;
  }

  let result = multiply(num1, num2);
  console.log(`The product of ${num1} and ${num2} is ${result}`);
}

// Step 5
const reverseString = function (str) {
  return str.split("").reverse().join("");
};

// Step 6
console.log(reverseString("hello"));

// Step 7
const countVowels = function (str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};

// Step 8
console.log(countVowels("JavaScript"));

// Step 9
const findMax = function (arr) {
  return Math.max(...arr);
};

// Step 10
console.log(findMax([4, 9, 2, 7, 5]));

// Step 11
const calculateFactorial = function (num) {
  if (num === 0 || num === 1) return 1;
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};

// Step 12
console.log(calculateFactorial(5));

// Step 13
const isPalindrome = function (str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
};

// Step 14
console.log(isPalindrome("level"));

// Step 15

const sumArray = function (arr) {
  return arr.reduce((sum, num) => sum + num, 0);
};

// Step 16
console.log(sumArray([1, 2, 3, 4, 5]));

// Step 17

const capitalizeFirstLetter = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Step 18
console.log(capitalizeFirstLetter("javascript"));

// Step 19
const filterEvenNumbers = function (arr) {
  return arr.filter((num) => num % 2 === 0);
};

// Step 20
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
