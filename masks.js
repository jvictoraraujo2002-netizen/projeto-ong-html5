// =========================
// MÁSCARAS DE INPUT
// =========================

// Telefone: (XX) XXXXX-XXXX
function maskPhone(input) {
  input.addEventListener("input", () => {
    let value = input.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{5})(\d{1,4})$/, "$1-$2");
    input.value = value;
  });
}

// CPF: XXX.XXX.XXX-XX
function maskCPF(input) {
  input.addEventListener("input", () => {
    let value = input.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    input.value = value;
  });
}

// APLICAR MÁSCARAS
document.addEventListener("DOMContentLoaded", () => {
  const phoneInput = document.querySelector("input[type='tel']");
  const cpfInput = document.querySelector("input[name='cpf']");
  if (phoneInput) maskPhone(phoneInput);
  if (cpfInput) maskCPF(cpfInput);
});
