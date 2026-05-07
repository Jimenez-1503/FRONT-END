document.addEventListener("DOMContentLoaded", function () {
    renderizarPedidos();
})

function renderizarPedidos(){
    const lista = document.querySelector("#lista-pedido");
    const spanTotal = document.querySelector("#valor-total");
    const spanResumo = document.querySelector("#valor-total-resumo");
    const spanContador = document.querySelector("#contador-itens");

    if(!lista) return

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

  pedidos.forEach(function(pedido, indice){

    const li = document.createElement("li")
    li.classList.add("item-pedido")

   // Informações - TEXTO

    const textoSpan = document.createElement("span")
    textoSpan.innerHTML = '<strong>' + pedidos.nome + '</strong>' + '-' + pedidos.qtd + 'x' + pedidos.preco.toFixed(2).replace(".", ",") + + " = <span class='subtotal-item'>R$ " + pedido.subtotal.toFixed(2).replace(".", ",") + "</span>"

    // Criando botão para remover prato

    const btnRemover = document.createElement("button")
    btnRemover.textContent = "✕"
    btnRemover.classList.add("btn-remover")

    btnRemover.addEventListener("click",() =>{
        const lista = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]")
        lista.splice(indice, 1) //splice usado para remoção
        localStorage.setItem("techfood_pedidos", JSON.stringify(lista)) //usar setItem sempre pra atualizar (adicionar ou excluir)
        renderizarPedidos()
    
    // iserido na página (parte VISUAL)
    li.appendChild(textoSpan)
    li.appendChild(btnRemover)
    lista.appendChild(li)
    total += pedido.subtotal

    const totalFmt = "R$" + total.toFixed(2).replace

    }) // Fim btn-remover

}) // Fim pedidos.forEach

}

function configurarPedidos(){
    const btn = document.querySelector("#btn-limpar-pedidos")
    if(btn)
        return

    btn.addEventListener("click", function(){
        localStorage.removeItem("techfood_pedidos");
        renderizarPedidos(); // não será necessario o setItem pois é só chamar rederizarPedidos que já tem uma função de setItem
  });

}

   


