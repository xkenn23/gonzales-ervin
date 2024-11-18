//Creating an Object

// const circle = {
//   radius: 10,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log(`draw the circle`);
//   },
// };

// circle.draw();

// Factory function

// function createCircle(radius) {
//   return {
//     radius,
//     location: {
//       x: 1,
//       y: 1,
//     },
//     draw: function () {
//       console.log(`draw the circle`, radius);
//     },
//   };
// }

// const circle = createCircle(2);

// circle.draw();

// Constructor function

// function circle(radius) {
//   this.radius = radius;
//   this.draw = () => {
//     console.log("draw", radius);
//   };
// }

// const bigCircle = new circle(1);

// bigCircle.draw();

// Constructor Properties

// let x = {}; // let x = new Object();

//Functions are Objects

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = () => {
//     console.log("draw", radius);
//   };
// }

// const anotherCircle = new Circle(1);

// Values vs Reference Types

// Primitive values are indipendent from one another.

// let x = 10;
// let y = x;

// x = 20;

// Reference values

// let x = { value: 10 };
// let y = x;

// x.value = 20;

// Primitives are copied by thier value

//Objects are copied by thier references

// let number = 10;
// function increase(number) {
//   number++;
// }

// increase(number);
// console.log(number);

// let obj = { value: 10 };
// function increase(obj) {
//   obj.value++;
// }

// increase(obj);
// console.log(obj);

// Adding and Removing Properties

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = () => {
//     console.log("draw", radius);
//   };
// }

// const circle = new Circle(1);

// circle.location = { x: 3, y: 7 };

// delete circle.location;

// Enumerating Properties

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = () => {
//     console.log("draw", radius);
//   };
// }

// const circle = new Circle(1);

// for (let key in circle) {
//   if (typeof circle[key] !== "function")
//     console.log(`key in circle`, key, circle[key]);
// }

// const keys = Object.keys(circle);
// console.log(keys);

//Abstraction ----- Private properties and methods

// function Circle(radius) {
//   this.radius = radius;
//   let location = { x: 1, y: 5 };
//   let computeOptimumLocation = function () {
//     //....
//   };
//   this.draw = () => {
//     computeOptimumLocation();
//     console.log("draw", radius);
//   };
// }

// const circle = new Circle(1);

// Getters and Setters

// function Circle(radius) {
//   this.radius = radius;
//   let location = { x: 1, y: 5 };

//   this.getDefualtLocation = function () {
//     return location;
//   };

//   this.draw = () => {
//     console.log("draw", radius);
//   };

//   Object.defineProperty(this, "defaultlocation", {
//     get: function () {
//       return location;
//     },
//     set: function (value) {
//       if (!value.x || !value.y) throw new Error("Invalid Location");
//       location = value;
//     },
//   });
// }

// const circle = new Circle(10);
// circle.defaultlocation = { x: 1, y: 9 };

// console.log(circle.defaultlocation);

// Exercise

function Stopwatch() {
  this.duration = 0; // Total elapsed time
  let startTime = null; // Time when the stopwatch started
  let timerId = null; // ID of the interval timer
  let running = false; // Indicates if the stopwatch is currently running

  this.start = function () {
    if (running) {
      console.log(
        "Stopwatch is already running. Call stop before starting again."
      );
      return;
    }

    startTime = Date.now() - this.duration * 1000; // Adjust startTime for the elapsed duration
    running = true;

    // Start an interval to update the duration property
    timerId = setInterval(() => {
      this.duration = Math.floor((Date.now() - startTime) / 1000);
      console.log(`Elapsed time: ${this.duration} seconds`);
    }, 1000);
  };

  this.stop = function () {
    if (!running) {
      console.log("Stopwatch is not running.");
      return;
    }

    running = false;

    // Stop the interval and calculate the final duration
    clearInterval(timerId);
    timerId = null;

    // Update duration for the final time
    this.duration = Math.floor((Date.now() - startTime) / 1000);
    console.log(`Final duration: ${this.duration} seconds`);
  };

  this.reset = function () {
    if (running) {
      console.log("Stop the stopwatch before resetting.");
      return;
    }

    // Reset duration and start time
    this.duration = 0;
    startTime = null;
    console.log("Stopwatch has been reset.");
  };
}

const sw = new Stopwatch();
