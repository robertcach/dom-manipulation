/* SELECTORS */

// console.log(document.images); // Search all images in document
// console.log(document.forms); // Search all images in document

console.log(document.getElementsByTagName("li"));
// document.getElementsByTagName("li").forEach((el) => console.log(el));
// Print a HTML collection, looks like an array but it isn't.
// Can't iterate it.

console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre")); // Search DOM element with nombre in their "name" attribute.

/* Two ways to search an element by their id */
console.log(document.getElementById("menu")); // faster than query selector
console.log(document.querySelector("#menu"));

// In querySelector we can interate with forEach
console.log(document.querySelector("a")); // Print first element with this tag
console.log(document.querySelectorAll("a")); // Print all element with this tag
console.log(document.querySelectorAll("#menu li"));
console.log(document.querySelectorAll(".card"));

// Can't use .map in querySellector to iterate
document.querySelectorAll("a").forEach((el) => console.log(el));

// To use .map we have to convert it to an awrray with spread operator
const aElements = [...document.querySelectorAll("a")];
aElements.map((el) => console.log(el));
