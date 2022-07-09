/* INTERACT WITH HTML TAG ATTRIBUTRES */

// To have exactly attribute data, we have to use .getAttribute("ATTRIBUTE_NAME")
// Use $ to specific that this variable contains a DOM element
const $firstImage = document.querySelector(".card img");

console.log($firstImage.hasAttribute("src")); // print a boolean
console.log($firstImage.getAttribute("src")); // print attribute value

$firstImage.setAttribute("src", "https://wallpaperaccess.com/full/1186847.jpg"); // Modify attribute value

$firstImage.setAttribute("alt", "new attribute"); // Add new attribute and its value
console.log($firstImage.hasAttribute("alt")); // true

$firstImage.removeAttribute("alt"); // Delete an attribute
console.log($firstImage.hasAttribute("alt")); // false

console.log($firstImage.getAttribute("src"));
