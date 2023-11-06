let rickAndMortyApiBaseUrl = 'https://rickandmortyapi.com/api';
let nomePersonagemInpt = document.getElementById('personagem_input_name');
let procurarPorNomeBtn = document.getElementById('personagem_input_btn');

function exibirPersonagensNaTela(filter) {
    let personagensUrl = `${rickAndMortyApiBaseUrl}/character`;

    if (filter) {
        personagensUrl = `${rickAndMortyApiBaseUrl}/character/?${filter}`
    }

    fetch(personagensUrl)
        .then(personagens => personagens.json())
        .then(personagens => {
            exibirInfoPersonagens(personagens.info, personagens.results.length);
            exibirPersonagens(personagens.results);
        })
        .catch(function (error) {
            alert('personagem nao encontrado!')
        });
};

function exibirPersonagens(personagens) {
    let mainPersonagens = document.getElementById('personagens');
    mainPersonagens.innerHTML = '';

    personagens.forEach(personagem => {
        let container = document.createElement('span');
        container.id = personagem.id;
        container.className = 'personagem';

        let containerImg = document.createElement('img');
        containerImg.className = 'personagem_image';
        containerImg.src = personagem.image;

        let basicInfo = document.createElement('span');
        basicInfo.className = 'personagem_basicInfo';

        let personagemName = document.createElement('h2');
        personagemName.innerText = personagem.name;

        let personagemNascimento = document.createElement('p');
        personagemNascimento.innerText = `Nascido em: ${personagem.origin.name}`

        let personagemParadeiro = document.createElement('p');
        personagemParadeiro.innerText = `Visto pela última vez em: ${personagem.location.name}`

        let personagemEpisodios = document.createElement('section');
        personagemEpisodios.className = 'pesonagem_episodios';

        let episodiosTitle = document.createElement('h2');
        episodiosTitle.innerText = `Episódios em que ${personagem.name} aparece`;
        personagemEpisodios.append(episodiosTitle);

        personagem.episode.forEach(episodio => {
            let divisoes = episodio.split('/');
            let botaoEpisodio = document.createElement('button');
            botaoEpisodio.innerText = divisoes[divisoes.length - 1];
            botaoEpisodio.className = 'green_rounded';

            personagemEpisodios.append(botaoEpisodio);
        });

        basicInfo.append(personagemName, personagemNascimento, personagemParadeiro, personagemEpisodios);
        container.append(containerImg, basicInfo);
        mainPersonagens.append(container);
    });
};

function exibirInfoPersonagens(informacoes, qtdPersonagens) {
    let tituloQuantidade = document.getElementById('personagens_quantidade');
    tituloQuantidade.innerText = `Exibindo ${qtdPersonagens} de ${informacoes.count} personagens`;
};

procurarPorNomeBtn.onclick = () => {
    let filtrarPorNome = `name=${nomePersonagemInpt.value}`;

    exibirPersonagensNaTela(filtrarPorNome);
}

exibirPersonagensNaTela();