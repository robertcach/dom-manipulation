const $html = document.documentElement;
const $body = document.body;

/* Estas variables no llevan $ porque a pesar de que tienen el color, NO HACEN REFERENCIA AL DOM */
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

/* aplicamos los cambios al body, no al HTML */
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

// establece un nuevo color. SOLO ESTABLECE, NO LO ACTUALIZA EN EL DOM
$html.style.setProperty("--dark-color", "blue");

// actualizamos la variable para obtener el nuevo color actualizado
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

// actualizamos la propiedad "background-color" con la variable actualizada
$body.style.setProperty("background-color", varDarkColor);
