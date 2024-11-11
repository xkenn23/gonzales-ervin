// Introduction to arrays.

// Creating an array.
let fruits = ["apple", "banana", "orange", "pineapple"];

console.log("fruits", fruits[0]);
console.log("fruits", fruits[1]);
console.log("fruits", fruits[2]);
console.log("fruits", fruits[3]);

fruits[1] = "dalandan";
fruits.push("straberry");

console.log("fruits 1", fruits[1]);
console.log(fruits);

fruits.pop();
console.log(fruits);

console.log(fruits.length);

let numbers = [1, 2, 3, 4, 5];

for (i = 0; i < numbers.length; i++) {
  console.log("number", numbers[i]);
}

let colors = ["red", "blue", "green"];
colors.forEach(function (color) {
  console.log(color);
});

console.log("array lenght", numbers.length);

console.log("index of ", numbers.indexOf(2));

console.log("include of ", numbers.includes(2));

console.log("join of ", numbers.join(" - "));

console.log("slice of ", numbers.slice(1, 4));
