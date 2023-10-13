
const boasVindas = document.getElementById("TextoBoasVindas");
var nome = prompt("Por favor, digite seu nome: ");

boasVindas.innerHTML = `Seja bem-vindo(a), ${nome.toUpperCase()}`