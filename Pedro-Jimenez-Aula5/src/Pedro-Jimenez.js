const nome = document.querySelector("#nome-usuario");
nome.textContent = "Pedro Jimenez";


const foto = document.querySelector("#foto-perfil");
foto.src = "src/img/pedro.jpg";

const container = document.querySelector("#container-perfil");
container.style.backgroundColor = "#b6d9fc";


const status = document.querySelector("#status");
status.classList.add("online");
status.textContent = "Status: Ativo";


const skills = document.querySelectorAll(".skill");
console.log("Total de skills:", skills.length);