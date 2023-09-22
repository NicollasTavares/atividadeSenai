// Utilizados para realizar operação lógicas, podem ser dos tipos: AND, OR e NOT.
console.log('------------01--------------');
// AND
console.log(true && true);// retorna true

console.log(true && false); // retorna false

console.log('------------02--------------');
// OR
// Para o operador OR (||) retornar verdadeiro, basta que um dos operando seja verdadeiro.
//Ele também retornar verdadeiro caso os dois operandos sejam verdadeiros, retorna false se os dois forem falsos.

console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log('------------03--------------');
// NOT
// O operador de negação (!) é um operador unário, isto é, opera sobre apenas um operando.
// Ele nega, inverte o valor lógico  do operando.

var x = 2 > 1;

console.log(x);
console.log(!x);
