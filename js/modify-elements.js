/* INSERTAR ELEMENTOS */

// insertAdjacentHTML => hace referencia texto con formato HTML
// insertAdjacentElement => hace referencia a una elemento HTML (nodo)
// insertAdjacentText => texto

const $cards = document.querySelector(".cards");
const $newCard = document.createElement("figure");

$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

// antes del propio elemento ($cards)
$cards.insertAdjacentElement("beforebegin", $newCard);

// justo dentro del elemento, antes de su primer elemento hijo.
$cards.insertAdjacentElement("afterbegin", $newCard);

// justo dentro del elemento, después de su último elemento hijo.
$cards.insertAdjacentElement("beforeend", $newCard);

// después del propio elemento
$cards.insertAdjacentElement("afterend", $newCard);

/* INSERTAR HTML */
const $cards2 = document.querySelector(".cards");
const $newCard2 = document.createElement("figure");

const $contentCard = `
<img src="https://placeimg.com/200/200/arch" alt="Arch">
<figcaption></figcaption>
`;

$newCard2.classList.add("card");

// añade el contenido de card como HTML a la $newCard2
$newCard2.insertAdjacentHTML("beforeend", $contentCard);

// añado el contenido a la etiqueta figcaption que ya está dentro de la $newCard2
$newCard2.querySelector("figcaption").insertAdjacentText("afterbegin", "Arch");

// añado la $newCard2 como elemento dentro de $newCard2
$cards2.insertAdjacentElement("afterbegin", $newCard2);
