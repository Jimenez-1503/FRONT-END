document.addEventListener("DOMContentLoaded", function(){
    inicilizarHoverCards();
    inicializarVitrine();
})

function inicilizarHoverCards(){
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

}

function inicializarVitrine(){
      const main = document.querySelector("main")

      if(main) return

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
        const precoExibido = card.querySelector(".preco").textContent;

        // Efeito visual quando clicar em "Pedir agora":

        clicado.textContent = "✓ Adicionado!";
        clicado.style.backgroundColor = "#27ae60";
        clicado.disabled = true; // Desativa a possibilidade do click, o botão fica inativo

        setTimeout(() => { // Usado para agendar a execução de uma função ou trecho de código uma única vez após um atraso especificado em milissegundos

        clicado.textContent = "Pedir Agora";
        clicado.style.backgroundColor = "";
        clicado.disabled = false;
        }, 1500);

        const badgeExistente = card.querySelector(".badge-adicionado")
        
        if(badgeExistente) badgeExistente.remove()
            card.insertAdjacentHTML( "beforeend",
                "<span class='badge-adicionado'>✔ No resumo</span>"
            );

        // adicionando o tempo para o evento que aparece após adicionar o pedido

       setTimeout(function () {
        const badge = card.querySelector(".badge-adicionado");
        if (badge) badge.remove();
      }, 2000);
        

      // Resetar a quantidade de itens:
      
      const box = card.querySelector(".quantidade-box")
      if(box){
        box.querySelector(".qtd-valor").textContent = "1";
        atualizarPrecoCard(box);
      }

      // Ação de salvar pedido:
      
      salvarPedido({ nome: nomePrato, preco: preco, qtd: quantidade });
      atualizarContadorPedidos();

    }

  })
}

function atualizarPrecoCard(box){
    const card = box.parentElement;
    const spanPreco = card.querySelector(".preco");
    const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco"));
    const quantidade = Number (box.querySelector(".qtd-valor").textContent);
    const total = precoUnitario * quantidade;
    spanPreco.textContent = "R$ " + total.toFixed(2).replace(".", ",") // substitui parte de uma string por um novo valor, retornando uma nova string sem modificar a original
    spanPreco.style.color = total > 150 ? "#c0392b" : "#e67e22";

}

function salvarPedido(pedido){
    
    //adicionar, || "[]" evita erro quando a chave ainda não existe.
    const lista = JSON.parse(localStorage.getItem("techfood-pedidos") || [])
    
    //modificou a lista
    pedido.subtotal = pedido.preco * pedido.qtd;
    
    //é utilizada para adicionar um ou mais elementos ao final de um array (lista) existente, modificando o array original.
    //salvou todas alterações da lista
    lista.push(pedido);
    localStorage.setItem("techfood_pedidos", JSON.stringify(lista));
}

function atualizarContadorPedidos(){
    
}