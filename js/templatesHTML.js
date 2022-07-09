/* LAS ETIQUETAS TEMPLATE NO SE RENDERIZAN EN EL DOM */
const $cards = document.querySelector(".cards");

// apuntamos al contenido de la la etiqueta template
const $template = document.getElementById("template-card").content;

const $fragment = document.createDocumentFragment();

// Array de objetos que contienen la información a incluir en el $template
const cardContent = [
  {
    title: "Tecnología",
    img: "https://placeimg.com/200/200/tech",
  },
  {
    title: "Animales",
    img: "https://placeimg.com/200/200/animals",
  },
  {
    title: "Arquitectura",
    img: "https://placeimg.com/200/200/arch",
  },
  {
    title: "Gente",
    img: "https://placeimg.com/200/200/people",
  },
  {
    title: "Naturaleza",
    img: "https://placeimg.com/200/200/nature",
  },
];

// añadimos el contenido/atributos a cada elemento HTML que tiene el $template
cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  // clonamos todo el nodo basado al $template
  // $template es la referencia de la que se van a crear los clones
  // true para que copie toda la estrucutura (img, figure, figcaption)
  let $clone = document.importNode($template, true);

  // añadimos el clone al fragmento
  $fragment.appendChild($clone);
});

// añadimos a $cards el $fragment, que ya tiene todos los nodos clonados. Así solo hacemos una inserción al DOM
$cards.appendChild($fragment);
