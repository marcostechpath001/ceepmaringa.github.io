// Dados sobre o CEEP Maringá
const dadosEscola = {
    sobre: "O CEEP Maringá é uma instituição de ensino técnico com diversos cursos e eventos importantes.",
    cursos: [
        "Informática para Internet",
        "Administração",
        "Segurança do Trabalho",
        "Enfermagem",
        "Mecatrônica"
    ],
    eventos: [
        "Semana de Tecnologia",
        "Feira de Profissões",
        "Dia do CEEP"
    ]
};

// Função para exibir a mensagem no chat
function exibirMensagem(texto, tipo) {
    const chatBox = document.getElementById("chat-box");

    const message = document.createElement("div");
    message.classList.add("message", tipo === "user" ? "user-message" : "bot-message");
    message.textContent = texto;

    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight; // Para rolar para a última mensagem
}

// Função para processar a entrada do usuário
function sendMessage() {
    const userInput = document.getElementById("user-input");
    const mensagemUsuario = userInput.value.trim();

    if (mensagemUsuario === "") return;

    // Exibe a mensagem do usuário
    exibirMensagem(mensagemUsuario, "user");

    // Responde com base na pergunta
    responder(mensagemUsuario);

    // Limpa a caixa de entrada
    userInput.value = "";
}

// Função para o Bob responder
function responder(pergunta) {
    pergunta = pergunta.toLowerCase();

    let resposta = "";

    if (pergunta.includes("cursos")) {
        resposta = "Aqui estão os cursos oferecidos pelo CEEP Maringá:\n" + dadosEscola.cursos.join("\n");
    } else if (pergunta.includes("eventos")) {
        resposta = "Esses são alguns eventos realizados pelo CEEP Maringá:\n" + dadosEscola.eventos.join("\n");
    } else if (pergunta.includes("sobre")) {
        resposta = dadosEscola.sobre;
    } else if (pergunta.includes("olá") || pergunta.includes("oi")) {
        resposta = "Olá! Como posso ajudá-lo?";
    } else if (pergunta.includes("tchau")) {
        resposta = "Tchau! Foi um prazer ajudá-lo!";
    } else {
        resposta = "Desculpe, não entendi sua pergunta. Tente perguntar sobre cursos, eventos ou sobre a escola.";
    }

    // Exibe a resposta de Bob
    exibirMensagem(resposta, "bot");
}

// Função para capturar a tecla Enter e enviar a mensagem
document.getElementById("user-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});