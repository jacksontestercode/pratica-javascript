// Criando uma função simples
// function mostrarMensagem(){
//     console.log("✅ Teste executado com sucesso!");
// }

// Chamando/executando a função
// mostrarMensagem();

// Função para validar título da página
// function validarTitulo() {
//     console.log("🔍 Validando título da página...");
//     console.log("✅ Título está correto!");
// }

// validarTitulo();

// Função para limpar dados de teste
// function limparDadosDeTeste() {
//     console.log("🧹 Limpando dados de teste...");
//     console.log("✅ Dados limpos!");
// }

// limparDadosDeTeste();

// Simulando um teste completo
// function iniciarTeste() {
//     console.log("🚀 Iniciando teste...");
// }

// function fazerLogin() {
//     console.log("🔑 Fazendo login...");
//     console.log("✅ Login realizado!");
// }

// function validarDashboard() {
//     console.log("🔍 Validando dashboard...");
//     console.log("📊 Dashboard OK!");
// }

// function finalizarTeste() {
//     console.log("🏁 Finalizando teste...");
// }

// // Executando o teste
// iniciarTeste();
// fazerLogin();
// validarDashboard();
// finalizarTeste();

//REUSO
// Reutilizando funções em múltiplos testes

// function fazerLogin() {
//     console.log("🔑 Fazendo login...");
//     console.log("✅ Login realizado!");
// }

// // Teste 1: Validar perfil
// console.log("\n--- TESTE 1: Validar Perfil ---");
// fazerLogin();
// console.log("👤 Validando perfil...");

// // Teste 2: Validar configurações
// console.log("\n--- TESTE 2: Validar Configurações ---");
// fazerLogin();
// console.log("⚙️ Validando configurações...");

// // Teste 3: Validar logout
// console.log("\n--- TESTE 3: Validar Logout ---");
// fazerLogin();
// console.log("🚪 Fazendo logout...");

// **1. Nome descritivo:**

// ❌ Ruim
function f1() {
    console.log("teste");
}

// ✅ Bom
function validarTituloDaPagina() {
    console.log("Validando título...");
}

// ❌ Evite: função fazendo muitas coisas
function fazerTudo() {
    console.log("Login...");
    console.log("Validando...");
    console.log("Logout...");
}

// ✅ Melhor: funções separadas

function fazerLogin() {
    console.log("Login...");
}

function validarDados() {
    console.log("Validando...");
}

function fazerLogout() {
    console.log("Logout...");
}