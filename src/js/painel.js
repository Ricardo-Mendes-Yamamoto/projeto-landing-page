/*
quando clicar na seta pra avançar temos que 
esconder todas as imagens e mostrar a próxima imagem

    a imagem atual começa em 0 pq é a primeira imagem
    assim que for clicando no avançar eu preciso adicionar mais 1 ao contador de imagens
    pra poder saber que agora eu vou mostrar a segunda imagem

    esconder todas a imagens
        pegar todas as imagens usando o DOM e remover a classe mostrar

     mostrar a próxima imagem
        pegar todas as imagens, descobrir qual é a próxima, e colocar a classe
        mostrar nela    
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagens() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}


setaAvancar.addEventListener('click', function() {

    const totalDeImagens = imagensPainel.length -1;
    if(imagemAtual === totalDeImagens) {
        console.log('não pode avançar mais');
        return;
    }

    imagemAtual++;

        esconderImagens();
        mostrarImagens();
});

setaVoltar.addEventListener('click', function() {

    if(imagemAtual ===0) {
        console.log('não tem mais como voltar')
        return;
    }

    imagemAtual--;

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    imagensPainel[imagemAtual].classList.add('mostrar');
});
