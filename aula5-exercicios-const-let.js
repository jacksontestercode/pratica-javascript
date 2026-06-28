/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em
*/

const nome = 'Jackson';
const sobreNome = 'Mendes';
const idade = 48;
const peso = 80;
const altura = 1.78;
let indiceMassaCorporal = peso / (altura * altura)
let anoAtual = 2026;
let anoNascimento = anoAtual - idade;

console.log(nome, sobreNome, 'tem', idade, 'anos, pesa', peso, 'kg'); // Forma padrão
console.log('tem' + ' ' + altura + ' de altura e seu IMC é de ' + indiceMassaCorporal); // Forma com +
console.log(`${nome} ${sobreNome} nasceu em  ${anoNascimento}.`); // Forma mais moderna

