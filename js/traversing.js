/* ENFOCADO A ELEMENTOS (ETIQUETAS HTML) */

const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children); // colección HTML con los hijos que están dentro de $cards
console.log($cards.children[2]); // acceder a un hijo en concreto

// detecta el primer NODO: salto de línea / identación, que a su vez no es una etiqueta HTML
console.log($cards.firstChild);

// detecta exclusivamente los elementos HTML
console.log($cards.parentElement);
console.log($cards.firstElementChild);

// detecta el último NODO: salto de línea, que a su vez no es una etiqueta HTML
console.log($cards.lastChild);

console.log($cards.previousSibling);
console.log($cards.previousElementSibling);

// acceder a la etiqueta HTML padre más próxima (si la tiene)
console.log($cards.closest("div")); // => null
console.log($cards.children[3].closest("section"));
