// =========================
// MENU HAMBURGUER MOBILE
// =========================
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// =========================
// SUBMENU DROPDOWN
// =========================
const submenuParents = document.querySelectorAll("nav ul li a");

submenuParents.forEach((link) => {
  const submenu = link.nextElementSibling;
  if (submenu && submenu.classList.contains("submenu")) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      submenu.classList.toggle("show");
    });
  }
});

// =========================
// ALERT DE FORMULÁRIO (EXEMPLO)
// =========================
const form = document.querySelector("form");
const alertBox = document.querySelector(".alert");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alertBox.style.display = "block";
    alertBox.textContent = "Formulário enviado com sucesso!";
    setTimeout(() => {
      alertBox.style.display = "none";
    }, 3000);
  });
}

