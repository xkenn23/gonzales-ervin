//Step 1

const students = [
  {
    name: "john doe",
    age: "18",
    grade: 12,
  },
  {
    name: "jane smith",
    age: "17",
    grade: 11,
  },
  {
    name: "tom johnson",
    age: "16",
    grade: 10,
  },
];

// Step 2

console.log("Second Student Name: ", students[2].name);

// Step 3

students.push({
  name: "Jeff Jones",
  age: "15",
  grade: 9,
});

// Step 4
for (i = 0; i < students.length; i++) {
  console.log("name:", students[i].name, "grade:", students[i].grade);
}

// Step 5

const book = {
  title: "The one",
  author: "Sam",
  year: "2007",

  // Step 8
  getSummary: function () {
    return `The title is ${this.title} and the author is ${this.author} and the year it was made was ${this.year}`;
  },
};

// Step 6

console.log("the title of the book is", book.title);

// Step 7

book.year = "1930";
console.log("the year of the book is", book.year);

// Step 9
console.log(book.getSummary());

// Step 10

const library = [];
library.push(book);

// Step 11
console.log(library[0]);

// Step 12

const car = {
  brand: "Honda",
  model: "City",
  year: "2010",

  // Step 15
  startEngine: function () {
    return `Car engine is starting vrooom!!`;
  },
};

// Step 13

console.log(car.model);

// Step 14
car.year = "2020";

console.log("update car year is ", car.year);

// Step 16
console.log(car.startEngine());

// Step 17

const garage = [];
garage.push(car);

// Step 18
console.log(garage);

// Step 19
const person = {
  name: "Ben",
  age: "99",
  city: "Mars",
};

// Steps 20

console.log("the age of", person.name, "is", person.age);
