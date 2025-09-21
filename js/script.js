//ESTO ES EL MODAL

const btnAbrir = document.getElementById("btn-abrir-modal");
const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrar-modal");

btnAbrir.addEventListener("click", () => {
  modal.style.display = "block";
});

cerrarModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const logoContainer = document.querySelector(".container-logo");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  logoContainer.classList.toggle("move-logo");
});

document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    logoContainer.classList.remove("move-logo");
  });
});
