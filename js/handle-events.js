// Cuando una función se ejecuta en un evento, podemos acceder al objeto "event" que tiene toda la información del evento (type, target...)
function holaMundo() {
  alert("Hola mundo");
  console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico");
// cuando se define un evento como si fuera semántico, la función va sin paréntesis para que no se ejecute automáticamente, sino cuando se haga clic
// la desventaja es que no se puede agregar más de una función a un mismo evento
$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e) {
  alert("Hola Mundo Manejador de Eventos Semántico");
  console.log(e);
};

// manejadores múltoples para definir diferentes funciones para un mismo evento
const $eventoMultiple = document.getElementById("evento-multiple");
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Manjeador de eventos múltiples");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
});
