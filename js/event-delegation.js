// optimizar el consumo de recursos de memoria

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this}, el click lo originó ${e.target.className}`
  );
  e.stopPropagation();
}

// En lugar de tener varios listeners para el mismo tipo de evento, solo tengo la asignación de ese "listener" al "document". Aparte de mejorar el rendimiento, solo tenemos una asignación al evento en cuestión. A través del condicional "if" evaluamos qué tiene que ejecutar.

document.addEventListener("click", (e) => {
  console.log("Click en:", e.target);

  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola");
    e.preventDefault();
  }
});
