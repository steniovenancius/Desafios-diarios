const formulario = document.querySelector('#form')
const campoFrase = document.getElementById('frase');
const btnSubmit = document.getElementById('btnSubmit');

alert("Por favor, abra o console para melhor funcionamento")

function analisarFrase(e, func) {
    e.preventDefault();
    let frase = campoFrase.value;
    var palavras = frase.split(" ")
    let contador = {}

    palavras.forEach(element => {
        contador[element] = (contador[element] || 0) + 1;
    });

    console.log(contador)
}


formulario.addEventListener("submit", analisarFrase)
