const $eventoMultiple = document.getElementById("evento-multiple");

function saludar(nombre = "Desconocido") {
  alert(`Hola ${nombre}`);
}

/* Si el listener es la propia función, aparte de "event", no tiene en cuenta el resto de parámetros*/
// $eventoMultiple.addEventListener("click", saludar);

/* Si el listener es una arrow function que ejecuta la función, entonces ésta sí tiene en cuenta todos los parámetros */
$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Robert");
});
