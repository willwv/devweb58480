// let itensCompra = [];
let inputNovoItem = document.getElementById('input-item');
let btnAdd = document.getElementById('btn-adicionar');
let btnShow = document.getElementById('btn-exibir');
let btnClear = document.getElementById('btn-limpar');
let sectionItensCompra = document.getElementById('itens-compra');

function insereItemNaLista() {
    localStorage.setItem(inputNovoItem.value, inputNovoItem.value)
    exibirItensDaLista();
    
    // if(itensCompra.length > 0){

    //     itensCompra.forEach( item => {
    //         if(item == inputNovoItem.value){
    //             alert('Item já está na lista!')
    //         }else{
    //             itensCompra.push(inputNovoItem.value);
    //             alert('O item ' + inputNovoItem.value + ' foi adicionado à lista com sucesso!')
    //             inputNovoItem.value = '';
    //             exibirItensDaLista();
    //         }
    //     });

    // }else{
    //     itensCompra.push(inputNovoItem.value);
    //     alert('O item ' + inputNovoItem.value + ' foi adicionado à lista com sucesso!')
    //     inputNovoItem.value = '';
    //     exibirItensDaLista();
    // }
};

function exibirItensDaLista(){
    sectionItensCompra.innerHTML = '';

    let analisouTodosOsItens = false;
    let indice = 0;

    while(!analisouTodosOsItens){

        if(localStorage.key(indice)){
            let chave = localStorage.key(indice);
            let valor = localStorage.getItem(chave);
            let h1 = document.createElement('h1');

            h1.innerText = valor;
            sectionItensCompra.append(h1);

            indice++;
        }else{
            analisouTodosOsItens = true;
        };        
    }

    // itensCompra.forEach(item => {
    //     let h1 = document.createElement('h1');
    //     h1.innerText = item;

    //     sectionItensCompra.append(h1);
    // });
}

function esvaziarLista(){
    localStorage.clear();
    // itensCompra = [];

    exibirItensDaLista();
}

btnAdd.onclick = () => insereItemNaLista();
btnShow.onclick = () => exibirItensDaLista();
btnClear.onclick = () => esvaziarLista();