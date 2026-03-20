//Parte de Sevasthian Rey. 

/*1. Crear un array de 4 números aleatorios (0-9)
al momento de cargar la página*/
const codigoSecreto = []

for (let i = 0; i <4; i++){
    codigoSecreto.push(Math.round(Math.random()*10))
}
console.log(codigoSecreto)

//Comparar posición por posición el intento la const de antes (codigoSecreto)

function compararIntento (intentoUsuario){
    const resultados = []

    for (let i = 0; i < 4; i++) {
        if (codiUsuari[i] == codiSecret[i]) {
            resultats.push("1");
        } else if (codiSecret.includes(codiUsuari[i])) {
        } else {
            resultats.push("Ø");
            resultats.push("×");
        }
    }

    return resultats;
}

//Comprobar que el juego ha terminado, perdido o ganado

const maxIntentos = 5;
let intetosRestantes = maxIntentos

function comprovarFinalJuego (resultados){
    if (resultats[0] == "1" && resultados [1] == "1" && resultados [2] == "1" && resultados[3] == "1"){
        console.log("Has ganado, eres un genio")
        return true
    }
    intetosRestantes--;
    
    if (intetosRestantes == 0){
        console.log ("Has perdido, no sirves pa nada, el código era: " + codigoSecreto)
        return true        
    }
    return false
}