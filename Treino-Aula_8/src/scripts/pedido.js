document.addEventListener("DOMContentLoaded", function () {
    renderizarPedidos();
})

function renderizarPedidos(){
    const lista = document.querySelector("#lista-pedido");
    const spanTotal = document.querySelector("#valor-total");
    const spanResumo = document.querySelector("#valor-total-resumo");
    const spanContador = document.querySelector("#contador-itens");

    if(lista) return

    //adicionar, || "[]" evita erro quando a chave ainda não existe.
    const pedidos = JSON.parse(localStorage.getItem("techfood-pedidos") || "[]");
    
    if(pedidos.length === 0){
        //é uma propriedade do JavaScript usada para obter ou definir (alterar) o conteúdo HTML interno de um elemento DOM
        lista.innerHTML =
        "<li class='pedido-vazio'>Nenhum pedido ainda. Acesse o " +
        "<a href='index.html'>Cardápio</a> para adicionar! 😊</li>";

    //Zerar todos os itens da lista do HTML: 
     if (spanTotal) spanTotal.textContent = "R$ 0,00";
     if (spanResumo) spanResumo.textContent = "R$ 0,00";
     if (spanContador) spanContador.textContent = "0 itens";

     return;
  }

  lista.innerHTML = ""
  let total = 0

   // Informações - TEXTO

    const textoSpan = document.createElement("span")
    textoSpan.innerHTML

    // Criando botão para remover prato

    const btnRemover = document.createElement("button")
    btnRemover.textContent = "✕"
    btnRemover.classList.add("btn-remover")

    btnRemover.addEventListener("click",() =>{
        itemLi.remove()

        const badge = cardOrigem.querySelector(".badge-adicionado")

        if(badge) badge.remove()

        if(listaResumo.children.length === 0)
            secaoResumo.style.display = "none"
    })

    // iserido na página (parte VISUAL)
    itemLi.appendChild(textoSpan)
    itemLi.appendChild(btnRemover)
    listaResumo.appendChild(itemLi)

    }

   


