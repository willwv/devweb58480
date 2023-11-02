let nomesAleatorios = ['Random Names',
'Alexander Beard',
'Edgar Church',
'Leonardo Fields',
'Isobella Tucker',
'Emil Holman',
'Aaron Goodwin',
'Dale English',
'Aleksander Cunningham',
'Frances Rosario',
'Dewey Hall',
'Ilyas Leach',
'Amelie Bender',
'Carmen Phillips',
'Eoin Giles',
'John Rosales',
'Sameer Bartlett',
'Aayan Mcclain',
'Tahlia Oneal',
'Orlando Blackwell',
'Flora Glenn',
'Beatrix Martin',
'Alanna Harvey',
'Izabella Schwartz',
'David Smith',
'Morgan ONeill',
'Faris Harrell',
'Anya Vasquez',
'Kobe Stuart',
'Roisin Ho',
'Verity Odonnell',
'Juliet Rowland',
'Omar Hale',
'Anais Strong',
'Poppy Owens',
'Amira Donovan',
'Donna Francis',
'Sally Robles',
'Evie Oneill',
'Lori OMoore',
'Angelina Floyd',
'Inaya Hess',
'Lucie Sanchez',
'Philippa Sheppard',
'Ruby Hahn',
'Mikayla Williams',
'Daniela Alvarado',
'Anoushka Brady',
'Harriett Mejia',
'Khalil Wiggins',
'Keenan Barr'];

function exibirNomesNaTela(nomes){
    let nomesSection = document.getElementById('nomes');
    nomesSection.innerHTML = '';

    nomes.forEach(nome => {
        // let tag = document.createElement('h4');
        // tag.innerText = nome;
        // nomesSection.append(tag);

        nomesSection.innerHTML += `<h4>${nome}</h4>`;
    });
}

exibirNomesNaTela(nomesAleatorios);

let input = document.getElementById('input-nome');
input.oninput = () => handleInputChange();

function handleInputChange() {
    let nomesFiltrados = nomesAleatorios.filter(name => name.includes(input.value));

    exibirNomesNaTela(nomesFiltrados);
};