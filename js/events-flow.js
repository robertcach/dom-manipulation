// Manejar el flujo de eventos cuando hay anidación de elementos y todos tienen el mismo evento

const $divsEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divsEventos);

function flujoEventos(e) {
  console.log(
    `Hola, te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
}

// $divsEventos.forEach((div) => div.addEventListener("click", flujoEventos));
$divsEventos.forEach((div) =>
  div.addEventListener("click", flujoEventos, {
    capture: false,
    once: true,
  })
);
