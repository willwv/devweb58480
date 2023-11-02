let navBar = document.getElementById("navbar");
let input = document.getElementById("input-text");
let fundosAzuis = document.getElementsByClassName("fundo-azul");
let tagsH1 = document.getElementsByTagName("h1")

let primeiraTagLi = document.querySelector("li:first-child")
let tagsLi = document.querySelectorAll("li:first-child")




input.oninput = () => {
    console.log(input.value)
}

// console.log(fundosAzuis);
// console.log(fundosAzuis[1].innerText);
fundosAzuis[1].innerText = 'Eu apaguei o texto original!';

// console.log(primeiraTagLi);
// console.log(tagsLi);
let container = document.getElementById("container")
//Modificação do código HTML interno
container.innerHTML = "<h2>Olá, Mundo!</h2> <p>Lorem ipsum</p>"

let botao1 = document.getElementById("botao1")

function acaoClique() {
    alert("Resposta ao evento Opção 1");
}

// botao1.addEventListener("click", acaoClique);

botao1.onmouseover = () => acaoClique();