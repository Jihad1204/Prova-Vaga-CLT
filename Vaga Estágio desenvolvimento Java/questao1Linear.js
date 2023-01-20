
function consultaFibonacci() {
    var readlineSync = require('readline-sync');
    var posicao = readlineSync.question("Insira o numero da posicao da sequencia Fibonacci desejada: ");
    var penultimo = 1, ultimo = 1;
    var numero;

    if (posicao >= 0) {
        if (posicao == 0) {
            return console.log("o numero de posicao 0 e igual a 0");
        } else if (posicao == 1) {
            return console.log("o numero de posicao 1 e igual a 1");
        } else if (posicao == 2) {
            return console.log("o numero de posicao 2 e igual a 1");
        } else {
            for (var count = 3; count <= posicao; count++) {
                numero = ultimo + penultimo;
                penultimo = ultimo;
                ultimo = numero;
            }
            return console.log("o numero de posicao ", posicao, " e igual a ", numero);

        }
    } else {
        console.log("Valor inserido invalido, tente novamente");
        consultaFibonacci();
    }
}

consultaFibonacci()