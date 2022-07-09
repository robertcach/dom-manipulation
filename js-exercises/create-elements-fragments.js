/* Creamos nuevos elementos HTML y los guardamos en constantes */
const $figure = document.createElement("figure");
const $image = document.createElement("img");
const $figcaption = document.createElement("figcaption");
const $figcaptionText = document.createTextNode("Animals");

/* Agregar texto que va dentro de figcaption */
$figcaption.appendChild($figcaptionText);

/* Añadir atributos src y alt a la image */
$image.setAttribute("src", "https://placeimg.com/200/200/animals");
$image.setAttribute("alt", JSON.stringify($figcaptionText));

/* Añadir clase a $figure y el contenido que va dentro (childs) */
$figure.classList.add("card");
$figure.appendChild($image);
$figure.appendChild($figcaption);

// parent element where we are going to insert the $figure
// agregar un hijo a un elemento HTML
const $cards = document.querySelector(".cards");
$cards.appendChild($figure);

/* ADD MULTIPLES ELEMENTS */
const seasons = ["Spring", "Summer", "Autumn", "Winter"];
const $ul = document.createElement("ul");

seasons.map((season) => {
  const $li = document.createElement("li");
  // const $liText = document.createTextNode(season);
  // $li.appendChild($liText);

  $li.textContent = season;
  $ul.appendChild($li);
});

$cards.after($ul); // añade elemento HTML después del elemento

const continentes = ["África", "América", "Asia", "Europa", "Oceanía"];
const $ul2 = document.createElement("ul");

// necesario inicializar el elemento como un string vacío para poder agregar nuevo contenido en cada iteración
$ul2.innerHTML = "";

// Hay que concatenar las etiqueta li, porque sino, por cada iteración va a reemplazar la antigua li por la nueva
continentes.map((continente) => ($ul2.innerHTML += `<li>${continente}</li>`));
$ul.after($ul2);

/* FRAGMENTS */
// no agregamos elementos directamente al DOM => mejora la optimización
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
const $ul3 = document.createElement("ul");

const $fragment = document.createDocumentFragment(); // no se carga en el DOM

// iteramos los meses y añadimos cada uno al fragmento. Evitamos actualizar el DOM
meses.map((mes) => {
  const $li = document.createElement("li");
  $li.textContent = mes;

  $fragment.appendChild($li);
});

// una vez que el fragmento tiene todo el contenido, lo agregamos al DOM
$ul3.appendChild($fragment);
$ul2.after($ul3);
