
const form = document.querySelector('#form')
const campoQtd = document.querySelector('#inputQtd')
const sorteio = document.querySelector('#numerosGerados');


var gerarNumero = (e)=> {
    e.preventDefault();

    let campo = campoQtd.value;
    let resultado = " ";
    for(contador = 1; contador <= campo; contador++) {
        if(campo >= 2) {
            resultado += Math.floor(Math.random()*100) + " - "
        } else {
            resultado += Math.floor(Math.random()*100)
        }
    }
    sorteio.innerHTML = resultado;
}




form.addEventListener('submit', gerarNumero)