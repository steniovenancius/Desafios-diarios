const inputValor = document.getElementById("inputValor");
const btnSubmit = document.getElementById("btnSubmit")

var contador = [];

function transformarEmArray(e){
    e.preventDefault();

    let frase = inputValor.value;
    let adicionar = contador.split(frase)

    console.log(adicionar)
    console.log(contador)
}

btnSubmit.addEventListener("click", transformarEmArray)






// var teste = ["c","a","s","a"]

// let vezes = teste.reduce(function (letras, repetidas) {
//     if (repetidas in letras) {
//         letras[repetidas]++
//     } else {
//         letras[repetidas] = 1
//     } 
//     return letras
// }, {})

// console.log(teste)
// console.log(vezes)