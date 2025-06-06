const form = document.getElementById("formulario");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Coleta os valores dos inputs e do textarea
    const names = Array.from(document.querySelectorAll('input[name="nome"]'))
        .map(input => input.value.trim())
        .filter(name => name !== ""); // Filtra valores vazios

    const message = form.querySelector('textarea[name="historia"]').value.trim();

    const dados = { names, message };
    console.log(dados);

    // Converte os dados para JSON
    try {
        const resposta = await fetch("https://fsdt-contact.onrender.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dados),
        });


        if (resposta.ok) {
            alert("Dados enviados com sucesso!");
            form.reset();
        } else {
            alert("Erro ao enviar os dados. Por favor, tente novamente.");
        }
    } catch (error) {
        alert("Ocorreu um erro ao enviar os dados. Por favor, tente novamente.");
        console.log(error);
    }
});
