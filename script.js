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

    for (let i = 0; i < 4; i++){
        if (intentoUsuario [i]== codigoSecreto [i]){
            resultados.push ("1")
        } else {
            resultados.push ("x")
        }
    }
    return resultados;
}