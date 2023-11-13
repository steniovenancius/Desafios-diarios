
const campoIngrediente = document.getElementById('campoIngrediente');
const btnSubmit = document.getElementById('btnSubmit');
const mixMusical = document.getElementById('Mix');


hash = {
    'cebola': 'dó',
    'pimentao': 'ré',
    'tomate': 'mi',
    'alho': 'fá',
    'pimenta': 'sol',
    'beterraba': 'lá',
    'cenoura': 'si'
};

var ingredientes = [];

function adicionarIngrediente() {

    let ingrediente = campoIngrediente.value;

    if(ingrediente != ""){
        ingredientes.push(ingrediente);
        campoIngrediente.value = ''
    }
    console.log(ingredientes)
}

function percorreringredientes () {
    ingredientes.forEach((item) => {
        mixMusical.innerHTML = `<li>${hash[item]}</li>`;
        console.log(hash[item])
    })

}


btnSubmit.addEventListener('click', adicionarIngrediente);
btnSubmit.addEventListener('click', percorreringredientes);


