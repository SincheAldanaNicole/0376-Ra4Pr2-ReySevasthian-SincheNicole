//Parte de Sevasthian Rey. 

/*1. Crear un array de 4 números aleatorios (0-9)
al momento de cargar la página*/
const codigoSecreto = []

for (let i = 0; i < 4; i++){
    codigoSecreto.push(Math.floor(Math.random() * 10))
}
console.log(codigoSecreto)

//Comparar posición por posición el intento la const de antes (codigoSecreto)

function compararIntento (intentoUsuario){
    const resultados = []

    for (let i = 0; i < 4; i++) {
        if (intentoUsuario[i] == codigoSecreto[i]) {
            resultados.push("1");
        } else if (codigoSecreto.includes(intentoUsuario[i])) {
            resultados.push("Ø");
        } else {
            resultados.push("×");
        }
    }

    return resultados;
}

//Comprobar que el juego ha terminado, perdido o ganado

const maxIntentos = 5;
let intentosRestantes = maxIntentos

function comprovarFinalJuego (resultados){
    if (resultados[0] == "1" && resultados[1] == "1" && resultados[2] == "1" && resultados[3] == "1"){
        console.log("Has ganado, eres un genio")
        return true
    }
    intentosRestantes--;
    
    if (intentosRestantes == 0){
        console.log("Has perdido, no sirves pa nada, el código era: " + codigoSecreto)
        return true        
    }
    return false
}