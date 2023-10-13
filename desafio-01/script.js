var Elemento = document.getElementById("TextoAqui")
var Texto = "Olá, tudo bem?";

Elemento.innerHTML = `<p> O texto "${Texto}" possui ${Texto.length} caracteres </p>`;