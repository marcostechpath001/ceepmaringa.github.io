document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Pegue os valores do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Parâmetros para o EmailJS
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Envio usando o EmailJS
    emailjs.send("service_r2pqxzg", "template_0e5m7vr", templateParams)
        .then(function(response) {
            alert("E-mail enviado com sucesso!");
        }, function(error) {
            alert("Erro ao enviar o e-mail: " + error.text);
        });
});