// Não podemos criar constantes com palavras reservada
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não pode motificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST

// const nome = 'João';
// console.log(nome);

const primeiroNumero = 5;
const seguntoNumero = 10;
const resultado = primeiroNumero * seguntoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);

// Saber o tipo de dados da varíável

console.log(typeof primeiroNumero);