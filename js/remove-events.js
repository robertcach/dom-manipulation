const $removeEvent = document.getElementById("eliminar-evento");

/* Hay que crear el evento para el elemento (addEventListener) y la función que se va a ejecutar cuando se ejecute dicho evento */

/* La función tiene que ir por separado porque "removeEventListener" tiene que recibir la función a eliminar y, por tanto, ésta no puede ser una arrow fuction o función anónima */

const removeDobubleClick = (e) => {
  alert(`Eliminando el evento de tipo ${e.type}`);
  console.log(e);
  $removeEvent.removeEventListener("dblclick", removeDobubleClick);
  $removeEvent.disabled = true;
};

$removeEvent.addEventListener("dblclick", removeDobubleClick);

/* ESTO NO SE PUEDE PORQUE LA FUNCIÓN A ELIMINAR ES UNA ARROW FUNCTION */
/* $removeEvent.addEventListener("dblclick", (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $removeEvent.removeEventListener("dblclick");
}); */
