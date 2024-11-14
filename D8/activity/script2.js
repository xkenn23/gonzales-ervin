// Task 1: Use arrow functions to calculate the square of a given number and log the result to the console.

const square = (number) => {
  return Math.sqrt(number);
};

console.log(square(9));

// Task 2: Use template literals to create a welcome message that includes the name and age of a person.

const name = "Howard";
const age = 23;

console.log(`hello ${name} who is of age ${age}`);

// Task 3: Use destructuring to extract the first and last name from a person object and log them to the console.

const person = {
  name: "ben",
  age2: 34,
};

const { name: Personname, age2 } = person;
console.log(Personname, age2);

// Task 4: Use the spread operator to merge two arrays into a single array.

const array1 = [1, 2, 3, 4, 5];

const array2 = [3, 5, 7, 8, 9];

const combineArrays = [...array1, ...array2];

console.log(combineArrays);

// Task 5: Use default parameters to create a function that calculates the area of a rectangle.

const calculateArea = (lenght = 1, width = 1) => {
  return lenght * width;
};

console.log(calculateArea());
console.log(calculateArea(2, 7));

// Task 6: Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person1 = new Person("Jeff", 35);

person1.introduce();
