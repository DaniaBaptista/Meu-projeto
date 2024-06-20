
document.getElementById("contatoForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
   
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let assunto = document.getElementById("assunto").value;
    let mensagem = document.getElementById("mensagem").value;

    
    if (nome.trim() === "" || email.trim() === "" || assunto.trim() === "" || mensagem.trim() === "") {
        alert("Por favor, preencha todos os campos do formulário.");
        return;
    }

   
    alert("Formulário enviado com sucesso!");

    document.getElementById("contatoForm").reset();
});
