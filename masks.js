// Máscaras para formulário
function maskTelefone(input) {
  let v = input.value.replace(/\D/g, "");
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
  v = v.replace(/(\d{4,5})(\d{4})$/, "$1-$2");
  input.value = v;
}

function maskCPF(input) {
  let v = input.value.replace(/\D/g, "");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  input.value = v;
}

function maskCEP(input) {
  let v = input.value.replace(/\D/g, "");
  v = v.replace(/^(\d{5})(\d)/, "$1-$2");
  input.value = v;
}

document.addEventListener("DOMContentLoaded", () => {
  const telefoneInput = document.getElementById("telefone");
  const cpfInput = document.getElementById("cpf");
  const cepInput = document.getElementById("cep");

  if (telefoneInput) telefoneInput.addEventListener("input", () => maskTelefone(telefoneInput));
  if (cpfInput) cpfInput.addEventListener("input", () => maskCPF(cpfInput));
  if (cepInput) cepInput.addEventListener("input", () => maskCEP(cepInput));
});
