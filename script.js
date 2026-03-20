//Parte de Sevasthian Rey. 

/*1. Crear un array de 4 números aleatorios (0-9)
al momento de cargar la página*/
const codigoSecreto = []

for (let i = 0; i <4; i++){
    codigoSecreto.push(Math.round(Math.random()*10))
}
console.log(codigoSecreto)
/*2. Crear una función que reciba el intento del 
usuario y que retorne un array de pistas (1, Ø, x)*/

