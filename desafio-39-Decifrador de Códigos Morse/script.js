const formulario = document.querySelector('#form');
const campoMensagem = document.getElementById('campoMensagem');
const textoDecifrado = document.getElementById('resultado');

var dicionario = {
    A:".-",
    B:"-...",
    C:"-.-.",
    D:"-..",
    E:".",
    F:"..-.",
    G:"--.",
    H:"....",
    I:"..",
    J:".---",
    K:"-.-",
    L:".-",
    M:"--",
    N:"-.",
    "O":"---",
    P:".--.",
    Q:"--.-",
    R:".-.",
    "S":"...",
    T:"-",
    U:"..-",
    V:"...-",
    W:".--",
    X:"-..-",
    Y:"-.--",
    Z:"--..",
    1:".----",
    2:"..---",
    3:"...--",
    4:"....-",
    5:".....",
    6:"-....",
    7:"--...",
    8:"---..",
    9:"----.",
    0:"-----",
    "?":"..--..",
    "!":"-.-.--",
    ".":".-.-.-",
    ",":"--..--",
    ";":"-.-.-.",
    ":":"---...",
    "+":".-.-.",
    "-":"-....-",
    "/":"-..-.",
    "=":"-...-"
}


function ConverterMorseParaTexto(e) {
    e.preventDefault();

    let mensagemMorse = campoMensagem.value;
    const palavrasMorse = mensagemMorse.split('   ');

    const resultado = palavrasMorse.map(palavraMorse => {
      const caracteresMorse = palavraMorse.split(' ');
      const texto = caracteresMorse.map(caracterMorse => {
        const caracter = Object.keys(dicionario).find(key => dicionario[key] === caracterMorse);
        return caracter || caracterMorse;
      });
      return texto.join('');
    });
  
    textoDecifrado.innerHTML = resultado.join('  ');
}

formulario.addEventListener('submit', ConverterMorseParaTexto);