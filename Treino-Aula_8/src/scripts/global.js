// Para exibir as funções no código:

document.addEventListener("DOMContentLoaded", function () {
    exebirBoasVindas()
})

function exebirBoasVindas() {
    const saudacao = document.querySelector("#boas-vindas");
    const hora = new Date().getHours();
    if (saudacao) {
        saudacao.textContent = 
        hora < 12
      ? "Bom dia! Qual o seu pedido?"
      : "Boa tarde! Confira nosso cardápio.";
}
}
