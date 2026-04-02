const contador = document.querySelector("#contador");
const btnCurtir = document.querySelector("#btn-curtir");

const campoTexto = document.querySelector("#campo-texto");
const previewTexto = document.querySelector("#preview-texto");

const caixaCor = document.querySelector("#caixa-cor");

let curtidas = 0;

btnCurtir.addEventListener("click", () => {
  curtidas++;
  contador.textContent = curtidas;
});

campoTexto.addEventListener("input", (texto) => {
  previewTexto.textContent = `Digitando: ${texto.target.value}`;
});

caixaCor.addEventListener("mouseenter", () => {
  caixaCor.style.backgroundColor = "blue";
  caixaCor.style.color = "white";
});

caixaCor.addEventListener("mouseleave", () => {
  caixaCor.style.backgroundColor = "white";
  caixaCor.style.color = "black";
});