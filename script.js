const hummenu = document.getElementById('menu');
const logo = document.getElementById('logo');
const menuCo = document.getElementById('mobilemenu');
const closeMenu = document.getElementById('closebtn');
const bodyCo = document.getElementById('bodyCo');
const porBtn = document.getElementById('porbtn');
const aboBtn = document.getElementById('abobtn');
const forBtn = document.getElementById('forbtn');
const nav = document.getElementById('nav-id');

hummenu.addEventListener('click', () => {
  menuCo.style.display = 'flex';
  hummenu.style.display = 'none';
  logo.style.display = 'none';
  bodyCo.style.position = 'sticky';
  bodyCo.style.overflow = 'hidden';
  nav.style.width = '100%';
});

closeMenu.addEventListener('click', () => {
  menuCo.style.display = 'none';
  hummenu.style.display = 'block';
  logo.style.display = 'block';
  bodyCo.style.position = 'static';
  bodyCo.style.overflow = 'auto';
  nav.style.width = 'auto';
});

porBtn.addEventListener('click', () => {
  menuCo.style.display = 'none';
  hummenu.style.display = 'block';
  logo.style.display = 'block';
  bodyCo.style.position = 'static';
  bodyCo.style.overflow = 'auto';
  nav.style.width = 'auto';
});

aboBtn.addEventListener('click', () => {
  menuCo.style.display = 'none';
  hummenu.style.display = 'block';
  logo.style.display = 'block';
  bodyCo.style.position = 'static';
  bodyCo.style.overflow = 'auto';
  nav.style.width = 'auto';
});
forBtn.addEventListener('click', () => {
  menuCo.style.display = 'none';
  hummenu.style.display = 'block';
  logo.style.display = 'block';
  bodyCo.style.position = 'static';
  bodyCo.style.overflow = 'auto';
  nav.style.width = 'auto';
});
