let inputCep = document.getElementById('cep');
let btnBuscarCep = document.getElementById('cep_btn');

btnBuscarCep.onclick = () => {
    let cepUsuario = inputCep.value;

    fetch(`https://viacep.com.br/ws/${cepUsuario}/json/`)
        .then(cep => cep.json())
        .then(cep => exibirDadosCEP(cep));
}

function exibirDadosCEP(cep){
    let cepInfoSection = document.getElementById('cep-info');
    cepInfoSection.innerHTML = '';

    let logradouro = document.createElement('p');
    logradouro.innerText = cep.logradouro;

    let bairro = document.createElement('p');
    bairro.innerText = cep.bairro;

    let localidade = document.createElement('p');
    localidade.innerText = cep.localidade;

    cepInfoSection.append(logradouro, bairro, localidade);
};

let inputPais = document.getElementById('pais');
let paisBtn = document.getElementById('pais_btn');

paisBtn.onclick = () => {
    fetch(`https://restcountries.com/v3.1/name/${inputPais.value}`)
    .then(pais => pais.json())
    .then(pais => exibirDadosPais(pais));
}

function exibirDadosPais(pais){
    let sectionPais = document.getElementById('pais-info');
    let nomeOficial = pais[0].name.official;

    let titulo = document.createElement('h1');
    titulo.innerText = nomeOficial;

    let imagemBandeira = document.createElement('img');
    imagemBandeira.src =  pais[0].flags.png

    sectionPais.append(titulo,imagemBandeira);
}