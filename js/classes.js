const $card = document.querySelector(".card");
console.log($card.className); // valor exacto del atributo "class"
console.log($card.classList); // devuelve un objeto con las clases y valores

/* CLASSLIT METHODS */

// evaluar si tiene o no una clase. Devuelve un boolean
console.log($card.classList.contains("rotate-45")); // => false

// añadir una o más clase
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45")); // => true
$card.classList.add("opacity-80", "sepia"); // más de una clase

// eliminar una o más clases
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45")); // => false
$card.classList.remove("opacity-80", "sepia");

// añadir/eliminar una clase dependiendo de si ya la tiene
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45")); // => true

$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45")); // => false

// reemplazar una clase por otra
$card.classList.toggle("rotate-45"); // se agrega la clase "rotate-45"

$card.classList.replace("rotate-45", "rotate-135");
