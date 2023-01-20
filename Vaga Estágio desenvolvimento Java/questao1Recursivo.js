
function consultaFibonacci() {
    var readlineSync = require('readline-sync');
    var posicao = readlineSync.question("Insira o numero da posicao da sequencia Fibonacci desejada: ");
    var penultimo = 1, ultimo = 1;
    var numero;

    if (posicao >= 0) {
        if (posicao == 0) {
             console.log("o numero de posicao 0 e igual a 0");
             menu();
        } else if (posicao == 1) {
             console.log("o numero de posicao 1 e igual a 1");
             menu();
        } else if (posicao == 2) {
             console.log("o numero de posicao 2 e igual a 1");
             menu();
        } else {
            for (var count = 3; count <= posicao; count++) {
                numero = ultimo + penultimo;
                penultimo = ultimo;
                ultimo = numero;
            }
            console.log("o numero de posicao ", posicao, " e igual a ", numero);
            menu();
        }
    } else {
        console.log("Valor inserido invalido, tente novamente");
        consultaFibonacci();
    }
}

function menu(){
    var readlineSync = require('readline-sync');
    var acaoMenu = readlineSync.question("Selecione a opcao desejada.\n 1. Consultar Fibonacci \n\n Para sair digite qualquer outra coisa.\n Resposta:");
    if (acaoMenu == 1){
        consultaFibonacci();  
    }else{
        return;
    }
}
menu()