// String, number, undefined, boolean
const nome = 'Jackson'; // string
const nome1 = "Jackson"; // string
const nome2 = `Jackon`; // string
const num1 = 10; // number 
const num2 = 10.52; // number`
let nomeAluno; // undefined -> não aponta pra nenhum local na memória
const sobreNomeAluno = null; // nulo -> não aponta pra nenhum local na memória
const aprovado = true; // Boolean = true, false (lógico)

console.log(typeof aprovado, aprovado)

let a = 2;
const b = a;

console.log(a, b); // (2, 2)

a = 3;

console.log(a, b) // (3, 2)
