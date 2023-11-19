const formulario = document.querySelector('#form');
const binarioCampo = document.getElementById('binario');
const convercao = document.getElementById('resultado')

function converterBinarioEmTexto(e) {
    e.preventDefault();
    let binario = binarioCampo.value;
    let binarioDividido = binario.match(/.{1,8}/g)
    let binarioConvertido = binarioDividido.map(Element => String.fromCharCode(parseInt(Element, 2)))
    let resultado = binarioConvertido.join('');

    convercao.innerHTML = resultado
    
}

formulario.addEventListener('submit', converterBinarioEmTexto)