// Menu hambúrguer
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('header .menu ul');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Formulário simples
const form = document.getElementById('form-contato');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Mensagem enviada com sucesso!');
  form.reset();
});

