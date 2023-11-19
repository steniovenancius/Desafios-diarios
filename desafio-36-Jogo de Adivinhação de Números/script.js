
const formulario = document.querySelector('#form');
const campo = document.getElementById('campoResposta');
const resposta = document.getElementById('resposta');

let numero = Math.floor(Math.random()*100);
console.log(numero)

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campo.value < numero){
        alert('O número é mais alto! Tente novamente');
    } else if (campo.value > numero){
        alert('O número é mais baixo! tente novamente');
    } else {
        alert('Parabéns! Você Acertou!')
        resposta.innerHTML = numero;
    }
})