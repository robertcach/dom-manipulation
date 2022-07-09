const $whatIsDom = document.getElementById("que-es");
console.log($whatIsDom);

let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un
API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`;

// reemplaza el contenido como si fuera texto y manteniendo la tabulación. NO ES PARTE DEL STANDARD
$whatIsDom.innerText = text;

// reemplaza el contenido como si fuera SOLO texto y NO mantiene la tabulación. ES LA PROPIEDAD STANDARD
$whatIsDom.textContent = text;

// reemplaza todo el contenido respetando las etiquetas HTML
$whatIsDom.innerHTML = text;

// reemplaza la etiqueta contenedora por el nuevo contenido
// ya no existe la etiqueta p con el id "que-es" y se ha reemplazado por los 3 párrafos que tiene la variable "text"
$whatIsDom.outerHTML = text;
