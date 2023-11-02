let numA = document.getElementById('numA');
let numB = document.getElementById('numB');

let btnSoma = document.getElementById('btnSoma');
let btnSubtracao = document.getElementById('btnSubtracao');
let btnMultiplicacao = document.getElementById('btnMultiplicacao');
let btnDivisao = document.getElementById('btnDivisao');

let resultadoOperacao = document.getElementById('resultadoOperacao');

function soma(){
    let resultadoSoma = parseFloat(numA.value) + parseFloat(numB.value);
    resultadoOperacao.innerText = resultadoSoma;
};

function subtracao(){
    let resultadoSoma = parseFloat(numA.value) - parseFloat(numB.value);
    resultadoOperacao.innerText = resultadoSoma;
};

function multiplicacao(){
    let resultadoSoma = parseFloat(numA.value) * parseFloat(numB.value);
    resultadoOperacao.innerText = resultadoSoma;
};

function divisao(){
    let resultadoSoma = parseFloat(numA.value) / parseFloat(numB.value);
    resultadoOperacao.innerText = resultadoSoma;
};

btnSoma.onclick = () => soma();
btnSubtracao.onclick = () => subtracao();
btnMultiplicacao.onclick = () => multiplicacao();
btnDivisao.onclick = () => divisao();