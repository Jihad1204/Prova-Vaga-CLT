function primeNumbers(num) {
    let numbers = new Array();
    for (var i = 0; i <= num; i++) {
        if (isPrime(i)) {
            numbers.push(i);
        }
    }
    return numbers;
}
function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) {
            return false
        };
    return num > 1;
}
function menuPrimeNumbers() {
    var readlineSync = require('readline-sync');
    var numero = readlineSync.question("Insira o numero desejado: ");
    console.log(primeNumbers(numero));
    menu()
}


function menu() {
    var readlineSync = require('readline-sync');
    var acaoMenu = readlineSync.question("Selecione a opcao desejada.\n 1. Consultar Numeros primos \n\n Para sair digite qualquer outra coisa.\n Resposta:");
    if (acaoMenu == 1) {
        menuPrimeNumbers();
    } else {
        return;
    }
}
menu()