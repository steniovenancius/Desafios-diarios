
const campoPesquisar = document.querySelector('#pesquisar');
const btnPesquisar = document.querySelector('#btnPesquisar');

const musicaPesquisada = document.querySelector('#musicaPesquisada');
const btnAdicionar = document.querySelector('#btnAdicionar');
const btnRemover = document.querySelector('#btnRemover');
const btnVisualizarPlaylist = document.querySelector('#btnVisualizarPlaylist');
const visualizar = document.querySelector('#visualizar')

let Playlist = [];

function pesquisarMusica() {
    //Pega o valor do input
    let pesquisar = campoPesquisar.value;

    //Lógica para apresentar o resultado ao usuário
    if(pesquisar != '') {
        return musicaPesquisada.innerText = pesquisar;
    }

}

function adicionarMusica() {
    Playlist.push(pesquisarMusica())
    window.alert(`${pesquisarMusica()} adicionada com sucesso!`)
    musicaPesquisada.innerText = ""
    console.log(Playlist);
}

function removerMusica() {
    let pesquisar = campoPesquisar.value;

    Playlist.splice(Playlist.indexOf(pesquisar),1)
    window.alert(`${pesquisar} foi removida`)
    musicaPesquisada.innerText = ""
    console.log(Playlist)
}

function visualizarPlaylist() {
    visualizar.innerHTML = Playlist
}

btnPesquisar.addEventListener("click", pesquisarMusica);
btnAdicionar.addEventListener("click", adicionarMusica);
btnRemover.addEventListener("click", removerMusica);
btnVisualizarPlaylist.addEventListener("click", visualizarPlaylist)