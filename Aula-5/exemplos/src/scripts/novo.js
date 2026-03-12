// // --- SELEÇÃO COM QUERY SELECTOR (O padrão moderno) ---

// // 1. Especificidade total: Buscando o h3 apenas dentro de um ID específico
// // Isso evita pegar o h3 da Lasanha por engano.
// const tituloNhoque = document.querySelector('#card-nhoque h3');

// // 2. Selecionando múltiplos elementos: Todos os botões que têm a classe .btn-pedido
// // Diferente do getElementsByClassName, este retorna uma NodeList (mais moderna que HTMLCollection)
// const botoesCompra = document.querySelectorAll('.btn-pedido');

// // 3. Selecionando por atributo (Ex: pegar a imagem pelo 'alt')
// const imgLasanha = document.querySelector('img[alt="Lasanha Tech"]');

// // 4. Selecionando o checkbox do menu pelo ID (Sintaxe de CSS #)
// const checkMenu = document.querySelector('#bt_menu');


// // --- EXEMPLOS PRÁTICOS PARA MOSTRAR AOS ALUNOS ---

// console.log("=== TESTES COM QUERY SELECTOR ===");

// // 5. Verificando o texto do elemento específico
// if (tituloNhoque) {
//     console.log("Título capturado:", tituloNhoque.innerText);
// }

// // 6. Manipulando a lista de botões (querySelectorAll)
// // Podemos ver quantos botões existem na página
// console.log("Quantidade de botões de pedido:", botoesCompra.length);

// // 7. Pegando o primeiro botão da lista e mudando o texto via JS
// if (botoesCompra.length > 0) {
//     botoesCompra[0].textContent = "Comprar Agora!";
//     console.log("Texto do primeiro botão alterado com sucesso.");
// }

// // 8. Seleção combinada (Descendente)
// // Pega o preço (span) que está dentro do card de lasanha
// const precoLasanha = document.querySelector('.card .preco');
// console.log("Preço da Lasanha:", precoLasanha.innerText);

// // 9. Verificando se o seletor falhou (Segurança para o código)
// const elementoInexistente = document.querySelector('.classe-que-nao-existe');
// console.log("Resultado de seletor inexistente:", elementoInexistente); // Retorna null

const tituloNhoque = document.querySelector('#sessao_massas .card:nth-child(2) h3')
const botoesCompra = document.querySelectorAll('.btn-pedido')
const terceiroCard = document.querySelector('.card:nth-child(3)')
const imgLasanha = document.querySelector('#foto-destaque')
const card_lasanha = document.querySelector('#card-lasanha')

const data = new Date()
const hora = data.getHours()

const saudacao = document.querySelector('#boas-vindas')
const seuNome = document.querySelector('#nome')

console.log("1. Mostrando o título NHOQUE:", tituloNhoque.innerText)
console.log("2. Quantidade de botões de pedido:", botoesCompra.length)
console.log("3. O terceiro card:", terceiroCard)

saudacao.textContent = hora < 18 
? "Bem-vindo e Boa tarde!"
: "Bem-vindo e Boa noite!"

seuNome.innerHTML = "Meu <strong>nome</strong> é <em>Pedro</em>"

// imgLasanha.src = "./src/images/nhoque.png"

// tituloNhoque.style.color = "blue"
