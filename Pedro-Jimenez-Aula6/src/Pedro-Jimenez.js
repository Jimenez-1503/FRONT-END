const contadorEl = document.querySelector("#contador");
const btnCurtir = document.querySelector("#btn-curtir");

const campoTexto = document.querySelector("#campo-texto");
const previewTexto = document.querySelector("#preview-texto");

const caixaCor = document.querySelector("#caixa-cor");

let curtidas = 0;

btnCurtir.addEventListener("click", () => {
  curtidas++;
  contadorEl.textContent = curtidas;
});

campoTexto.addEventListener("input", (e) => {
  previewTexto.textContent = `Digitando: ${e.target.value}`;
});

caixaCor.addEventListener("mouseenter", () => {
  caixaCor.style.backgroundColor = "blue";
  caixaCor.style.color = "white";
});

caixaCor.addEventListener("mouseleave", () => {
  caixaCor.style.backgroundColor = "";
  caixaCor.style.color = "";
});