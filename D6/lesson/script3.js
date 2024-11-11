function greet() {
  console.log(`hello function`);
}

// calling the function
greet();

// function declaration vs function expression

function squareDeclaration(num) {
  return num * num;
}
squareDeclaration();

const squarExpression = function (num) {
  return num * num;
};

squarExpression();
