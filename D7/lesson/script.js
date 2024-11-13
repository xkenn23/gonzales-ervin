// Accessing parent, child, and sibling elements using DOM traversal methods
// Access the parent element of a specific element

const container = document.getElementById("container");
console.log(container.parentElement);

const paragraph = container.children;
console.log(paragraph);

const firstParagraph = container.firstElementChild;
console.log(firstParagraph);

const secondParagraph = firstParagraph.nextElementSibling;
console.log(secondParagraph);

console.log(secondParagraph.parentNode);

const contentDiv = document.querySelector(".content");
const nestedParagraph = contentDiv.children[0];

console.log(nestedParagraph);

console.log(nestedParagraph.nextSibling);
console.log(nestedParagraph.previousSibling);
