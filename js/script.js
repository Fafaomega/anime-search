//pegar conteudo dos animes
const onePiece = document.querySelector('.one-piece');
const hunterXHunter = document.querySelector('.hunter-x-hunter');
const naruto = document.querySelector('.naruto');
const fireForce = document.querySelector('.fire-force');
const kimetsuNoYaiba = document.querySelector('.kimetsu-no-yaiba');
const captainTsubasa = document.querySelector('.tsubasa');

//para fechar a aba dos animes
const fecharModalA = document.querySelectorAll('.fechar-modal');
let modalAberto = null; //variavel nula para fazer com que abra só um modal por vez

// para abrir a janela de informação do anime chamando a função abrirJanela()
abrirJanela(onePiece, false);
abrirJanela(naruto, false);
abrirJanela(hunterXHunter, false);
abrirJanela(fireForce, false);
abrirJanela(kimetsuNoYaiba, false)
abrirJanela(captainTsubasa, false);

function search() {
    let inputPesquisa = document.querySelector('#pesquisa').value; //pegando o valor que foi inserido na barra de pesquisa
    let resultados = document.querySelector('#resultados'); //pegando o UL do html

    let valoresLi = resultados.querySelectorAll('li'); //pegando os LI dentro do UL
    let animes = [] //criando um array vazio para colocar os animes depois

    if (inputPesquisa === '') {
        alert('Digite um anime!'); //caso o valor da barra de pesquisa for branco exibira um erro ou uma mensagem informando para digitar algo ou que esta com erro
    } else {
        valoresLi.forEach(x => {
            animes.push(x.className);
        });//colocando cada LI dentro do array vazio
        filtrarAnimes(inputPesquisa, animes); //chamando a função que vai fazer abrir as informações do anime que foi pesquisado
        document.querySelector('#pesquisa').value = '';
    };
}; // função para fazer a pesquisa na barra de pesquisa funcionar

function filtrarAnimes(pesquisa, animes) {
    let filtrar = animes.filter(function (anime) {
        return anime.toLowerCase().startsWith(pesquisa.toLowerCase());
    }) // ta passando os animes pro minusculo e filtrando pra todos os animes dentro do array que comece com oque eu estava digitando
    console.log(filtrar);
    filtrar.forEach(x => {
        abrirJanela(document.querySelector('.' + x), true);
    });
};//função para mostrar as informações do anime pesquisado

function abrirJanela(modal, isAbrir,) {
    if (isAbrir) {
        if (modalAberto) {
            modalAberto.style.display = 'none'; // o display do modalAberto é 'none' então não da pra ver a variavel nula
        }
        modal.style.display = 'flex'; //transforma o modal para display 'flex' mostrando as informações gerais dos animes
        modalAberto = modal; // caso tenha um modal aberto a variavel modalAberto recebe o valor de modal, asssim parando de ser nulo e então mostrando só um modal
    } else {
        fecharModalA.forEach(function (fecharModalA) { //seleciono cada X com a mesma classe da variavel fecharModalA e passo a função de clique para cada um
            fecharModalA.addEventListener('click', function () { // adiciono o evento de click aos X para poder ser clicavel e fazer o que eu desejo
                modal.style.display = 'none'; //para fazer com que na hora que clicar no X para fechar o modal as informações gerais dos animes sumam
                modalAberto = null; //caso fechar o modal a variavel modalAberto voltara a valer nulo e voltara a n ser exibido nada
            });
        });
    };
};

let pesquisaEnter = document.querySelector('#pesquisa');
pesquisaEnter.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        search();
    };// variavel pegando a barra de pesquisa e criando um evento de quando a tecla for pressionada vai chamar uma função. Função essa que capta a tecla enter
});  // e quando ela for pressionada chamar a função search para mostrar as info gerais do anime

function randomizar() {
    let resultadosParaRandomizar = document.querySelector('#resultados'); //pegando o UL do html

    let valoresLiParaRandomizar = resultadosParaRandomizar.querySelectorAll('li'); //pegando os LI dentro do UL
    let animesForRandom = [];

    valoresLiParaRandomizar.forEach(x => {
        animesForRandom.push(x.className);
    });

    const classeAnimeAleatorio = animesForRandom[Math.floor(Math.random() * animesForRandom.length)]; // para randomizar um valor aleatório dentro do array de anime então gerando um modal aleatório para mostrar na tela
    const animeAleatorio = document.querySelector('.' + classeAnimeAleatorio); // aqui estou adicionando o nome do anime como se fosse uma classe para mostrar no modal

    abrirJanela(animeAleatorio, true);

};