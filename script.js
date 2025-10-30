// MENU HAMBURGUER
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('show');
});

// SUBMENU DROPDOWN (funciona também no mobile)
const submenuParents = document.querySelectorAll('nav ul li > a');

submenuParents.forEach(parent => {
  parent.addEventListener('click', (e) => {
    const next = parent.nextElementSibling;
    if(next && next.classList.contains('submenu')) {
      e.preventDefault();
      next.classList.toggle('show');
    }
  });
});
