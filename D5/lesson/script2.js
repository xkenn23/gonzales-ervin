let age = 20;

if (age >= 18) {
  console.log("you are eligible to vote");
} else {
  console.log("you are not able to vote!");
}

//while loops
let count = 1;
while (count <= 5) {
  console.log("count:", count);
  count++;
}

// do while loop

let i = 1;

do {
  console.log("Say my name while I countL", i);
  i++;
} while (i <= 5);

//for loop

for (let x = 1; x <= 5; x++) {
  console.log("count of x", x);
}

let name = parseInt(prompt("Enter Name"));

alert(`20 + ${name}`);
alert(20 + name);
