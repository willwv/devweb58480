let apiBaseUrl = 'https://rickandmortyapi.com/api'

let paginaAtual = 1;
let mainPersonagens = document.getElementById('personagens');
let personagemNameInpt = document.getElementById('personagem_input_name');
let personagemNameBtn = document.getElementById('personagem_input_btn');
let btnNext = document.getElementById('personagens_paginas_btnnxt');
let btnPrev = document.getElementById('personagens_paginas_btnprev');

function exibirPeronagensNaTela(filtro){
    let urlPersonagem = `${apiBaseUrl}/character`;

    if(filtro){
        urlPersonagem = `${urlPersonagem}/?${filtro}`;
    }

    fetch(urlPersonagem)
    .then(response => response.json())
    .then(response => {
        exibirRequestInfo(response.info, response.results.length)
        exibirPersonagens(response)
    });
}

function exibirPersonagens(response){
    mainPersonagens.innerHTML = '';

    response.results.forEach(personagem => {
        let container = document.createElement('span');
        container.className = 'personagem';
        container.id = personagem.id;

        let containerImage = document.createElement('img');
        containerImage.className = 'personagem_image';
        containerImage.src = personagem.image;

        let personagemInfoContainer = document.createElement('span');
        personagemInfoContainer.className = 'personagem_basicInfo';

        let personagemName = document.createElement('h2');
        personagemName.innerText = personagem.name;

        let personagemNascimento = document.createElement('p');
        personagemNascimento.innerText = `Nascido em: ${personagem.origin.name}`

        let personagemUltimoLugar = document.createElement('p');
        personagemUltimoLugar.innerText = `Visto pela última vez em: ${personagem.location.name}`
        
        let personagemEpisodios = document.createElement('section');
        personagemEpisodios.className = 'pesonagem_episodios'

        let episodiosTitulo = document.createElement('h2');
        episodiosTitulo.innerText = `Episódios em que ${personagem.name} aparece`;

        personagemEpisodios.append(episodiosTitulo);

        personagem.episode.forEach(episodio => {
            let btnEpisodio = document.createElement('button');
            btnEpisodio.className = 'green_rounded';

            let divisao = episodio.split('/');
            btnEpisodio.innerText = divisao[divisao.length - 1];

            personagemEpisodios.append(btnEpisodio);
        });

        personagemInfoContainer.append(personagemName, personagemNascimento,personagemUltimoLugar, personagemEpisodios);
        container.append(containerImage, personagemInfoContainer);
        mainPersonagens.append(container);
    });
};

function exibirRequestInfo(info, qtdPersonagens) {
    let personagemQuantidade = document.getElementById('personagens_quantidade');
    personagemQuantidade.innerText = `Exibindo ${qtdPersonagens} de ${info.count} personagens`;

    let paginasQuantidade = document.getElementById('personagens_paginas_quantidade');
    paginasQuantidade.innerText = `Pagina ${paginaAtual} de ${info.pages}`;
}

personagemNameBtn.onclick = () => {
    let nomeDigitado = personagemNameInpt.value;
    let filter = `name=${nomeDigitado}`;

    exibirPeronagensNaTela(filter);
};

btnNext.onclick = () => {
    paginaAtual = paginaAtual + 1;
    let filter = `page=${paginaAtual}`;

    exibirPeronagensNaTela(filter);
}

btnPrev.onclick = () => {
    if(paginaAtual > 1){
        paginaAtual = paginaAtual - 1;
        let filter = `page=${paginaAtual}`;

        exibirPeronagensNaTela(filter);
    }    
}

exibirPeronagensNaTela();
