
const inputNumero = document.getElementById("inputNumerico");
const btnSubmit = document.getElementById("enviar");
const numerosOrdenados = document.getElementById("numerosOrdenados");

var arranjo = [];

function OrdenandoArray(e) {
    e.preventDefault();
    
    let numero = inputNumero.value;
    inputNumero.value = ""

    if(numero >= 0) {
        arranjo.push(numero);
        numerosOrdenados.innerHTML = `<li>${arranjo.sort((a,b)=> a-b).join(" ")}</li>`;
    }
}

btnSubmit.addEventListener("click", OrdenandoArray);