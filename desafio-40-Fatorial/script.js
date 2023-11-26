const formulario = document.querySelector('#form');
const inputFatorial = document.getElementById('fatorialCampo');
const resultado = document.getElementById('resultado')

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();

    let fatorial = inputFatorial.value;
    let calculo = 1;
    if(fatorial < 0) {
        resultado.innerHTML = "insira um número válido"
    } else {
        if(fatorial == 0) {
            resultado.innerHTML = 1
        } else {
            for(contador = 1; contador <= fatorial; contador++) {
                calculo *= contador
            }
            resultado.innerHTML = calculo
        }
    }
})