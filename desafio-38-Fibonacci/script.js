const formulario = document.querySelector('#form');
const campoNumerico = document.getElementById('campoNumerico');
const resultado = document.getElementById('resultado');

alert('É recomendado que abra o console para uma melhor visualização')

function apresentarSequenciaFibonacci(e){
    e.preventDefault();

    let posicaoTermo = campoNumerico.value;
    let antepenultimoTermo = 0;
    let penultimoTermo = 1;
    let ultimoTermo = null;

    if (posicaoTermo <= 2) {
        console.log(antepenultimoTermo);
        console.log(penultimoTermo)

        ultimoTermo = posicaoTermo-1;
        console.log(ultimoTermo)
    } else {
        for(contador=3; ultimoTermo < posicaoTermo; contador++) {        
            console.log(antepenultimoTermo)
            console.log(penultimoTermo)
            ultimoTermo = antepenultimoTermo + penultimoTermo
            antepenultimoTermo = penultimoTermo
            penultimoTermo = ultimoTermo

            console.log(ultimoTermo)
        }
        resultado.innerHTML = ultimoTermo
    }
}

formulario.addEventListener('submit', apresentarSequenciaFibonacci)

// Entra o numero do termo a ser encontrado
// entrada -> 5 
// Printa todos os números que antecedem esse termo
// saida -> 0, 1, 1, 2, 3 