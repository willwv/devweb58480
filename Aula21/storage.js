let artigo = document.getElementById('artigo');

let titulo = document.createElement('h1');

titulo.innerText = 'Título';

let paragrafo = document.createElement('p');

paragrafo.innerText = 'Imagine um texto aleatório aqui.';

artigo.append(titulo, paragrafo);

debugger

artigo.remove();
