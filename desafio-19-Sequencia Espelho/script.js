const valorInput = document.getElementById("sequencia");
const resultado = document.getElementById("numerosEmSequencia");
const btnSubmit = document.getElementById("btnSubmit");

var sequencia = [];

function sequenciaEspelho(e){
    e.preventDefault();

    let numero = valorInput.value;
    if (numero != "") {
        sequencia.push(numero);
        valorInput.value = "";
        let espelho = sequencia.slice(0)
        resultado.innerHTML = `${sequencia} -- ${espelho.reverse()}`;
    }
}

btnSubmit.addEventListener("click", sequenciaEspelho);