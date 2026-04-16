/* ==========================================================
      AULA 07: DOM AVANÇADO - TECHFOOD
   Navegação na Árvore, Criação de Elementos e Delegação
   ORDEM DE ESCRITA NO LIVE CODE (igual ao roteiro):
   1. Saudação e hover  (mantidos da Aula 6)
   2. Delegação de eventos no <main> com filtro
   3. Quantidade moderna com + e - (dentro da delegação)
   4. Navegação com parentElement no botão Pedir Agora
   5. insertAdjacentHTML: badge no card
   6. createElement + appendChild: resumo do pedido
   7. remove(): botão ✕ e botão Limpar tudo
   ========================================================== */

// 1. SAUDAÇÃO DINÂMICA (Base Aula 5)
const saudacao = document.querySelector("#boas-vindas");
const hora = new Date().getHours();
if (saudacao) {
    saudacao.textContent =
        hora < 12
            ? "Bom dia! Qual o seu pedido?"
            : "Boa tarde! Confira nosso cardápio.";
}

// Exemplo 3:
  
  const main = document.querySelector("main")

  main.addEventListener("click", (event) => {
    
    const clicado = event.target


    if(clicado.classList.contains("btn-menos")) {   // linhas para converter o texto para número e diminuir a quantidade
        const box = clicado.parentElement;
        const spanQtd = box.querySelector(".qtd-valor");
        const valorAtual = Number(spanQtd.textContent);
        spanQtd.textContent = Math.max(1, valorAtual - 1);
        atualizarPrecoCard(box)
        return;
    }
    
    if(clicado.classList.contains("btn-mais")) {   // linhas para converter o texto para número e aumentar a quantidade
        const box = clicado.parentElement;
        const spanQtd = box.querySelector(".qtd-valor");
        spanQtd.textContent = Number(spanQtd.textContent) + 1;
        atualizarPrecoCard(box)
        return;
    }
    
        
    if(clicado.classList.contains("btn-pedido")) {
        event.preventDefault();

        const card = clicado.parentElement;
        const nomePrato = card.querySelector("h3").textContent;
        const quantidade = card.querySelector(".qtd-valor").textContent;
        const precoExibido = card.querySelector(".preco");

        // Efeito visual quando clicar em "Pedir agora":

        clicado.textContent = "✓ Adicionado!";
        clicado.style.backgroundColor = "#27ae60";
        clicado.disabled = true; // Desativa a possibilidade do click, o botão fica inativo

        setTimeout(() => { // Usado para agendar a execução de uma função ou trecho de código uma única vez após um atraso especificado em milissegundos

        clicado.textContent = "Pedir Agora";
        clicado.style.backgroundColor = "";
        clicado.disabled = false;
        }, 1500);

        if(!card.querySelector(".badge-adicionado")){
            card.insertAdjacentHTML(
                "<span class='badge-adicionado'>✔ No resumo</span>"
            )
        }

        adicionarItemAoResumo(nomePrato, quantidade, precoExibido, card)
    }

  })

// Exemplo 4:

function atualizarPrecoCard(box){
    const card = box.parentElement;
    const spanPreco = card.querySelector(".preco");
    const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco"));
    const quantidade = Number (box.querySelector(".qtd-valor").textContent);
    const total = precoUnitario * quantidade;
    spanPreco.textContent = "R$ " + total.toFixed(2).replace(".", ",") // substitui parte de uma string por um novo valor, retornando uma nova string sem modificar a original
    spanPreco.style.color = total > 150 ? "#c0392b" : "#e67e22";

}

// Exemplo 5:

function adicionarItemAoResumo(nome, qtd, preco, cardOrigem){
    const secaoResumo = document.querySelector("#secao-resumo");
    const listaResumo = document.querySelector("#lista-resumo");

    if(!secaoResumo || !listaResumo) return

    secaoResumo.style.dispay = "block"

    // Crianco 1 item na lista que está vazia no HTML

    const itemLi = document.createElement("li")
    itemLi.classList.add("item-resumo")

    // Informações - TEXTO

    const textoSpan = document.createElement("span")
    textoSpan.textContent = qtd + "X " + nome + " - " + preco

    // Criando botão para remover prato

    const btnRemover = document.createElement("button")
    btnRemover.textContent = "✕"
    btnRemover.classList.add("btn-remover")
}

// 4. INTERATIVIDADE NOS CARDS (Feedback visual)
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
        card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "none";
    });
});

