// let numeroIncrementado = 0;

// function incrementar(numero){

//     numeroIncrementado = numero + 1;
//     console.log(numeroIncrementado);
// }

// incrementar(5);

// console.log(numeroIncrementado);

// let xicara = {
//     cor: 'branca',
//     peso: 120,
//     unidadePeso: 'gramas',
//     preco: 15.20,
//     moeda: 'R$',
//     capacidade: 300,
//     unidadeCapacidade: 'ml',
//     fornecedor: {
//         nome: 'loja do joão',
//         cnpj: '35.112.142/0001-25',
//         endereco: {
//             rua: 'rua de mentira',
//             numero: 57
//         }
//     }
// }

// // console.log(xicara);
// console.log(xicara.cor);
// console.log(xicara.fornecedor);
// console.log(xicara.fornecedor.endereco);
// console.log(xicara.fornecedor.endereco.rua);


// let idades = [1, 20, 25, 70, 80, 90, 17, 43];
// let nomes = ["joao", "ana", "maria", "bernardo", "william", "francisca", "francisco"]

// nomes.push("bernadete");
// nomes.push("leandro");

// let nomesFiltrados = nomes.filter( (nome) => nome != 'francisco' );

// // nomes.forEach(nome => {
// //     console.log(nome)
// // });


// // idades.forEach(idade => {
// //     let idadeAumentada = idade + 5;
// //     console.log(idadeAumentada)
// // });

// let idadesModificadas = idades.map( idade => idade + 5);

// // console.log(nomes.sort())

// let uva = {
//     cor: 'roxo',
//     nome: 'uva'
// }

// let manga = {
//     cor: 'amarelo',
//     nome: 'manga'
// }

// let maca = {
//     cor: 'vermelha',
//     nome: 'maça'
// }

// let frutas = [uva, manga, maca];

// console.log(manga.cor);
// console.log(frutas.find(fruta => fruta.nome == 'manga'));

function verificarSeMotoristaPodeDirigir(motorista){
    if(motorista.idade >= 18){
        alert("O motorista " + motorista.nome + " pode dirigir!");
    }else if(motorista.idade < 18 && motorista.temPermissaoDosPais){
        alert("O motorista " + motorista.nome + " pode dirigir!");
    }else{
        alert("O motorista " + motorista.nome + " NÃO pode dirigir!");
    }
}

let motorista1 = {
    nome: 'william',
    idade: 28,
    temPermissaoDosPais: false
}

let motorista2 = {
    nome: 'Pedro',
    idade: 16,
    temPermissaoDosPais: true
}

let motorista3 = {
    nome: 'Joao',
    idade: 17,
    temPermissaoDosPais: false
}

let motoristas = [motorista1, motorista2, motorista3];

motoristas.forEach(motorista => {
    verificarSeMotoristaPodeDirigir(motorista);
})

// for(let index = 0; index < motoristas.length; index++){
//     verificarSeMotoristaPodeDirigir(motoristas[index]);
// }


// // let idades = [1, 20, 25, 70, 80, 90, 17, 43];

// // // for(let index = 0; index < idades.length; index++){
// // //     console.log(idades[index]);
// // // }

// let index = 0;
// while(index < motoristas.length){
//     verificarSeMotoristaPodeDirigir(motoristas[index]);
//     index++
// }