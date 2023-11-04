const primeiraNota = document.getElementById('nota1');
const segundaNota = document.getElementById('nota2');
const terceiraNota = document.getElementById('nota3');
const btnCalcular = document.getElementById('btnSubmit');
const caixaResultado = document.getElementById('caixaResultado');
const resultado = document.getElementById('resultado');


btnCalcular.addEventListener("click", (e)=> {
    e.preventDefault();

    let valor1 = parseFloat(primeiraNota.value);
    let valor2 = parseFloat(segundaNota.value);
    let valor3 = parseFloat(terceiraNota.value);
    
    let Calculomedia = (valor1+valor2+valor3)/3
    
    console.log(Calculomedia)
    if(Calculomedia >= 6 ){
        caixaResultado.style.backgroundColor = 'green';
        resultado.innerHTML = Calculomedia;
    } else {
        caixaResultado.style.backgroundColor = 'red';
        resultado.innerHTML = Calculomedia;
    }
})