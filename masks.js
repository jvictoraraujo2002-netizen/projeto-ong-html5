// Máscaras simples para telefone e CPF
function mascaraTelefone(event) {
  const input = event.target;
  let valor = input.value.replace(/\D/g, "");
  if(valor.length > 10){
    valor = valor.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else {
    valor = valor.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  }
  input.value = valor;
}

function mascaraCPF(event) {
  const input = event.target;
  let valor = input.value.replace(/\D/g, "");
  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  input.value = valor;
}

// Validação simples do formulário
function validarForm(event) {
  event.preventDefault();
  const form = event.target;
  const alertBox = document.querySelector('.alert');
  let valido = true;

  form.querySelectorAll('input[required], textarea[required]').forEach(input => {
    if(!input.value) valido = false;
  });

  if(valido) {
    alertBox.style.display = 'block';
    alertBox.textContent = 'Formulário enviado com sucesso!';
    setTimeout(() => { alertBox.style.display = 'none'; }, 3000);
    form.reset();
  } else {
    alertBox.style.display = 'block';
    alertBox.textContent = 'Por favor, preencha todos os campos!';
    setTimeout(() => { alertBox.style.display = 'none'; }, 3000);
  }
}

// Adicionando eventos
document.addEventListener('DOMContentLoaded', () => {
  const telefone = document.querySelectorAll('.telefone');
  telefone.forEach(input => input.addEventListener('input', mascaraTelefone));

  const cpf = document.querySelectorAll('.cpf');
  cpf.forEach(input => input.addEventListener('input', mascaraCPF));

  const forms = document.querySelectorAll('form');
  forms.forEach(form => form.addEventListener('submit', validarForm));
});
