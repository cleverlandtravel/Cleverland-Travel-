document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    const open = document.body.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      document.body.classList.remove('nav-open');
      btn.setAttribute('aria-expanded','false');
    });
  });
});
