
document.addEventListener('DOMContentLoaded', ()=>{
  // hamburger toggle
  const burger = document.querySelector('.hamburger');
  const mobile = document.querySelector('.mobile-nav');
  if(burger) burger.addEventListener('click', ()=>{ mobile.classList.toggle('open'); mobile.style.display = mobile.classList.contains('open') ? 'block' : 'none'; });

  // dropdowns
  document.querySelectorAll('.dropdown').forEach(drop=>{
    const btn = drop.querySelector('.drop-btn');
    const menu = drop.querySelector('.dropdown-menu');
    btn.addEventListener('click', e=>{ e.preventDefault(); menu.style.display = menu.style.display==='block' ? 'none' : 'block'; });
    document.addEventListener('click', (ev)=>{ if(!drop.contains(ev.target)) menu.style.display='none'; });
  });

  // modal open/close
  document.querySelectorAll('[data-modal-open]').forEach(btn=> btn.addEventListener('click', ()=> document.body.classList.add('modal-open')));
  document.querySelectorAll('[data-modal-close]').forEach(btn=> btn.addEventListener('click', ()=> document.body.classList.remove('modal-open')));

  // toast demo
  document.querySelectorAll('[data-toast]').forEach(btn=> btn.addEventListener('click', ()=>{
    const t = document.querySelector('.toast'); t.classList.add('show');
    setTimeout(()=> t.classList.remove('show'), 2500);
  }));

  // form validation visuals
  const form = document.getElementById('form-cadastro');
  if(form){
    form.addEventListener('submit', function(e){
      if(!form.checkValidity()){
        e.preventDefault();
        form.querySelectorAll('input,select,textarea').forEach(el=>{ if(!el.checkValidity()) el.classList.add('invalid'); else el.classList.remove('invalid') });
        const first = form.querySelector(':invalid'); if(first) first.focus();
      } else {
        e.preventDefault();
        // show modal confirmation instead of real submit
        document.body.classList.add('modal-open');
      }
    });
    form.querySelectorAll('input,select,textarea').forEach(el=> el.addEventListener('input', ()=> el.classList.remove('invalid')));
  }
});
