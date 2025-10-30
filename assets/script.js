// ==========================
// MENU HAMBÚRGUER
// ==========================
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// ==========================
// FORMULÁRIO DE CONTATO
// ==========================
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const alertBox = document.querySelector(".alert");
    alertBox.style.display = "block";
    alertBox.textContent = "✅ Mensagem enviada com sucesso!";
    form.reset();
  });
}
