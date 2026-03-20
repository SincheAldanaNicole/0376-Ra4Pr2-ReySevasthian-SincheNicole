//Estudiant A: Gestor de la Terminal i UI (feature-ui-logic) 

// Número máximo de intentos. Usamos "const" porque nunca cambia.
const MAX_INTENTS = 5;
 
// Variable que va restando cada vez que el usuario hace un intento.
let intentsRestants = MAX_INTENTS;
 
// El código secreto lo generará el Estudiant B.
// De momento lo dejamos vacío para que no pete la página.
let codiSecret = [];

// Rellenamos los 4 desplegables con números del 0 al 9.

// Cogemos todos los elementos <select> que tienen la clase "code-input"
// querySelectorAll nos devuelve una lista con los 4 selects
const selects = document.querySelectorAll('.code-input');
 
// Recorremos cada select uno por uno
selects.forEach(function(select) {
 
    // Bucle del 0 al 9 para crear las opciones numéricas
    for (let i = 0; i <= 9; i++) {
 
        // Creamos un elemento <option> nuevo en el DOM
        const opcio = document.createElement('option');
 
        // El valor interno de la opción será el número (ej: 0, 1, 2...)
        opcio.value = i;
 
        // El texto que ve el usuario en el desplegable también es el número
        opcio.textContent = i;
 
        // Añadimos la opción dentro del select correspondiente
        select.appendChild(opcio);
    }
});