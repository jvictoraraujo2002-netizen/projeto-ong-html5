function maskTelefone(input){
  let v = input.value.replace(/\D/g,"");
  v=v.replace(/^(\d{2})(\d)/g,"($1) $2");
  v=v.replace(/(\d{4,5})(\d{4})$/,"$1-$2");
  input.value=v;
}
function maskCPF(input){
  let v = input.value.replace(/\D/g,"");
  v=v.replace(/(\d{3})(\d)/,"$1.$2");
  v=v.replace(/(\d{3})(\d)/,"$1.$2");
  v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
  input.value=v;
}
function maskCEP(input){
  let v = input.value.replace(/\D/g,"");
  v=v.replace(/^(\d{5})(\d)/,"$1-$2");
  input.value=v;
}
document.addEventListener("DOMContentLoaded",()=>{
  const tel=document.getElementById("telefone");
  const cpf=document.getElementById("cpf");
  const cep=document.getElementById("cep");
  if(tel) tel.addEventListener("input",()=>maskTelefone(tel));
  if(cpf) cpf.addEventListener("input",()=>maskCPF(cpf));
  if(cep) cep.addEventListener("input",()=>maskCEP(cep));
});
