const formulario = document.querySelector('#form');
const campoQr = document.getElementById('campoQr');
const qrcode = document.querySelector('#qrcode');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(!campoQr.value) return;

    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?/size=150x150&data=${campoQr.value}`;

})