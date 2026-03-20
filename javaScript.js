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

// Función que escribe mensajes en la caja negra de la terminal.

function logTerminal(missatge, tipus) {
 
    // Cogemos el div "terminal" del HTML donde salen los mensajes
    const terminal = document.getElementById('terminal');
 
    // Creamos una nueva línea de texto (<p>) para añadir al terminal
    const linia = document.createElement('p');
 
    // Añadimos la clase base "line" que ya tenemos en el CSS
    linia.classList.add('line');
 
    // Dependiendo del tipo, añadimos una clase extra para cambiar el color
    if (tipus === 'error') {
        // Clase "error" -> letra roja (definida en el CSS)
        linia.classList.add('error');
    } else if (tipus === 'success') {
        // Clase "success" -> fondo verde (definida en el CSS)
        linia.classList.add('success');
    }
    // Si no especificamos tipo, se queda con el estilo verde neón por defecto
 
    // Ponemos el texto. Añadimos "> " delante para parecer una terminal real
    linia.textContent = '> ' + missatge;
 
    // Insertamos la nueva línea al final del terminal
    terminal.appendChild(linia);
 
    // Hacemos scroll automático hacia abajo para que siempre se vea el último mensaje
    terminal.scrollTop = terminal.scrollHeight;
}