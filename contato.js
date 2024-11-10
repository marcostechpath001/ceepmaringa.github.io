// Exibe o modal de opções de envio
function mostrarOpcoesEnvio() {
    document.getElementById('modal').style.display = 'flex';
}

// Função para tratar o envio ao desenvolvedor ou à instituição
function enviarPara(destino) {
    alert("Mensagem enviada para o " + destino.charAt(0).toUpperCase() + destino.slice(1) + "!");
    fecharModal(); // Fecha o modal após a escolha
}

// Fecha o modal de opções
function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

// Evento de submit do formulário
document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio imediato do formulário
    mostrarOpcoesEnvio();   // Exibe o modal com as opções de envio
});