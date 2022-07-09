const $linkDOM = document.querySelector(".link-dom");

/* DOS MANERA DE ACCEDER A LOS ESTILOS */
// accedemos al atributo "style" mediante la notación del punto
// Si usamos getAttribute, solo conseguimos los valores que hemos aplicado manualmente a la etiqueta "style"
console.log($linkDOM.style);
console.log(getComputedStyle($linkDOM));

/* DOS MANERAS DE ACCEDER A LA PROPIEDAD "COLOR" DEL ATRIBUTO "STYLE" */
console.log($linkDOM.style.color);
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

/* ESTABLECER NUEVAS PROPIEDADES */
$linkDOM.style.textAlign = "center";
$linkDOM.style.width = "50%";

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
// Como la propiedad CSS se define como un string, aquí si se escribe tal con la sintaxis normal de CSS
