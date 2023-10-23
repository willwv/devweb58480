function multiplicacao(num1, num2){
    let resultado = num1 * num2;
    console.log(resultado);
}

function soma(numero1, numero2){
    console.log(numero1 + numero2);
}

function divisao(numero1, numero2){
    if(numero2 == 0){
        console.log('Nao é possível dividir por zero.')
    }else{
        console.log(numero1 / numero2);
    }
}

function alertMeuNome(){
    alert('william');
}

// alertMeuNome()

// multiplicacao(1,2);
// soma(5,8)
// multiplicacao(3,5);
// multiplicacao(188,23);
// multiplicacao(40,50);
// multiplicacao(3,5);
// soma(0,5)

divisao(0,4)