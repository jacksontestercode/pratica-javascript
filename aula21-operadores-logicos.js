//OPERADORES LÓGICOS
let emailValido = true;
let senhaValida = true;

// Operador 'E'
// let loginPermitido = emailValido && senhaValida;
// console.log("Login permitido?", loginPermitido);

// Operador 'OU'
// let loginPermitido = emailValido || senhaValida;
// console.log("Login permitido?", loginPermitido);

// Operador 'NÃO'
// let loginPermitido = !emailValido || !senhaValida;
// console.log("Login permitido?", loginPermitido);

////////////////////////////////////////////////////////
// Usando para tomar decisões
// if = si
// else = senão
// if (!emailValido && senhaValida) {
//     console.log("✅ Login permitido!");
// } else {
//     console.log("❌ Login negado!");
// }

////////////////////////////////////////////////////////
// let isAdmin = false;
// let isModerador = true;

// if (isAdmin || !isModerador) {
//     console.log("✅ Pode editar conteúdo!")
// } else {
//     console.log("❌ Sem permissão!")
// }

////////////////////////////////////////////////////////

// let idadeUsuario = 17;
// let temCartao = true;
// let saldoPositivo = false;

// // Pode comprar SE: maior de 18 anos E (tem cartão OU saldo positivo)

// let podeComprar = (idadeUsuario >= 18) && (temCartao || saldoPositivo)

// if (podeComprar){
//     console.log("✅ Compra autorizada!");
// }else{
//     console.log("❌ Compra negada")
// }

////////////////////////////////////////////////////////
// Validação: produto pode ser vendido? (usando let simples)

let nome = "Camiseta";
let preco = 89.9;
let estoque = 5;
let emPromocao = false;

// Regra: estoque > 0 E (preco < 100 OU emPromocao)

let podeSerVendido = (estoque > 0) && (preco < 100 || emPromocao);
//let podeSerVendido = (V) && (V || emPromocao);
//let podeSerVendido = (V) && (V || F);
//let podeSerVendido = (V) && (V);
//let podeSerVendido = (V);

if (podeSerVendido) {
    console.log("✅ Produto " + nome + " pode ser vendido");
} else {
    console.log("❌ Produto " + nome + " NÃO pode ser vendido");
}

console.log("Detalhes:", {
    nome,
    preco,
    estoque,
    emPromocao
});

    
