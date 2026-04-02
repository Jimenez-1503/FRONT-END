// Missão 1: Recepção do Atleta (Date e Condicionais)
// Utilize new Date().getHours(). Capture o parágrafo #saudacao-atleta.
// Regra: Se for antes das 12h, o texto deve ser "Treino matinal liberado!". Entre 12h e 18h, "Boa tarde, foco no treino!". Após as 18h, "Descanso noturno merecido!".

const data = new Date()
const hora = data.getHours()

const saudacao = document.querySelector('#saudacao-atleta')

saudacao.textContent = hora <= 12 
? "Treino matinal liberado!"
: "Boa tarde, foco no treino!"

// Missão 2: Banner Motivacional (Eventos de Mouse)
// Capture a seção #banner-foco.
// Adicione o evento mouseover para injetar a classe .foco-total.
// Adicione o evento mouseout para retirar a classe .foco-total.

const caixaCor = document.querySelector("#banner-foco");

caixaCor.addEventListener("mouseenter", () => {
  caixaCor.style.backgroundColor = "#00cec9";
  caixaCor.style.color = "white";
});

caixaCor.addEventListener("mouseleave", () => {
  caixaCor.style.backgroundColor = "white";
  caixaCor.style.color = "black";
});


// Missão 3: Calculadora de Hidratação (Input com Tratamento)
// Capture o #peso-aluno. Adicione o evento input.
// Multiplique o .value por 35 e exiba no #meta-agua.
// Regra Extra: O número inserido pelo usuário costuma vir como "texto". Garanta o uso do comando Number() na conversão para que o cálculo matemático não corra risco de falhar.

const inputPeso = document.querySelector("#peso-aluno");
const valorTexto = document.querySelector("#meta-agua");

if (inputPeso && valorTexto) {
    inputPeso.addEventListener("input", () => {
        const pesoTotal = 35.0;
        const total = Number(inputPeso.value) * pesoTotal;
        valorTexto.textContent = total;
        
    })
}

// Missão 4: O Diário de Refeições (Click com Emojis)
// Capture o #btn-registrar, o #nome-refeicao e a div #lista-refeicoes.
// No clique do botão, adicione o card usando innerHTML +=.
// Regra de Exibição: Você deve concatenar a palavra "Prato:" antes do que o usuário digitou. Exemplo da tag: <article class="card-refeicao"><h3>🥗 Prato: [NOME DA REFEIÇÃO]</h3></article>.

// Missão 5: Dia de Jejum (Limpeza com Aviso Visual)
// Capture o botão #btn-zerar. Adicione o evento de clique.
// Esvazie a div #lista-refeicoes.
// Regra Extra: Imediatamente APÓS esvaziar a lista, dispare um window.alert("Diário reiniciado com sucesso para amanhã!") na tela do usuário.

