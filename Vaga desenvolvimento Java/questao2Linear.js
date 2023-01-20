function primeNumbers(num) {
    let numbers = new Array();
    for (var i = 0; i <= num; i++) {
      if (isPrime(i)){
        numbers.push(i);
      }
    }
    return numbers;
  }
  function isPrime(num) {
    for(let i = 2; i <num; i++)
      if(num % i === 0) {
          return false
      };
    return num > 1;
  }

  var readlineSync = require('readline-sync');
  var numero = readlineSync.question("Insira o numero desejado: ");
  console.log(primeNumbers(numero));