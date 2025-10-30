// ==========================
// MÁSCARAS DE FORMULÁRIO
// ==========================

// Máscara de CPF
function cpfMask(input) {
  let value = input.value.replace(/\D/g, "");
  if (value.length > 11) value = value.slice(0,11);
  value = value.replace(/(\d{3})(\d)/,"$1.$2");
  value = value.replace(/(\d{3})(\d)/,"$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
  input.value = value;
}

// Máscara de Telefone
function phoneMask(input) {
  let value = input.value.replace(/\D/g, "");
  if (value.length > 11) value = value.slice(0,11);
  if(value.length > 10) {
    value = value.replace(/^(\d{2})(\d{5})(\d{4})$/,"($1) $2-$3");
  } else {
    value = value.replace(/^(\d{2})(\d{4})(\d{4})$/,"($1) $2-$3");
  }
  input.value = value;
}

// Evento para aplicar máscara automaticamente
document.addEventListener("DOMContentLoaded", () => {
  const cpfInput = document.querySelector("#cpf");
  if(cpfInput) cpfInput.addEventListener("input", () => cpfMask(cpfInput));

  const phoneInput = document.querySelector("#telefone");
  if(phoneInput) phoneInput.addEventListener("input", () => phoneMask(phoneInput));
});
