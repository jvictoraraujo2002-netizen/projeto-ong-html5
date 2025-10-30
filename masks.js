// masks.js - lightweight input masks for CPF, phone, CEP
document.addEventListener('DOMContentLoaded', function(){
  const cpfEl = document.getElementById('cpf');
  const phoneEl = document.getElementById('telefone');
  const cepEl = document.getElementById('cep');

  function setCursorToEnd(el){
    if (el.setSelectionRange){
      const len = el.value.length;
      el.setSelectionRange(len, len);
    }
  }

  function maskCPF(v){
    return v
      .replace(/\D/g,'')
      .replace(/(\d{3})(\d)/,'$1.$2')
      .replace(/(\d{3})(\d)/,'$1.$2')
      .replace(/(\d{3})(\d{1,2})$/,'$1-$2')
      .slice(0,14);
  }
  function maskPhone(v){
    v = v.replace(/\D/g,'');
    if (v.length <= 10){
      return v.replace(/(\d{2})(\d{4})(\d{0,4})/,'($1) $2-$3').trim();
    } else {
      return v.replace(/(\d{2})(\d{5})(\d{0,4})/,'($1) $2-$3').trim();
    }
  }
  function maskCEP(v){
    return v.replace(/\D/g,'').replace(/(\d{5})(\d)/,'$1-$2').slice(0,9);
  }

  if (cpfEl){
    cpfEl.addEventListener('input', e => {
      const val = maskCPF(e.target.value);
      e.target.value = val;
      setCursorToEnd(e.target);
    });
  }
  if (phoneEl){
    phoneEl.addEventListener('input', e => {
      const val = maskPhone(e.target.value);
      e.target.value = val;
      setCursorToEnd(e.target);
    });
  }
  if (cepEl){
    cepEl.addEventListener('input', e => {
      const val = maskCEP(e.target.value);
      e.target.value = val;
      setCursorToEnd(e.target);
    });
  }

  // Example: progressive enhancement — if browser supports constraint validation, show custom message
  const form = document.getElementById('form-cadastro');
  if(form){
    form.addEventListener('submit', function(e){
      if(!form.checkValidity()){
        // Let browser show native UI; prevent form submission to allow user to fix
        e.preventDefault();
        form.reportValidity();
      }
    });
  }
});
