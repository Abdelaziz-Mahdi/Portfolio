let hummenu = document.getElementById('menu');
let logo = document.getElementById('logo');
let menuCo = document.getElementById('mobilemenu');
let closeMenu =document.getElementById('closebtn');
let bodyCo = document.getElementById('bodyCo');
let porBtn = document.getElementById('porbtn');
let aboBtn = document.getElementById('abobtn');
let forBtn = document.getElementById('forbtn');



hummenu.addEventListener('click', () => {
    menuCo.style.display = 'flex';
    hummenu.style.display = 'none';
    logo.style.display = 'none';
    bodyCo.style.position = 'sticky';
    bodyCo.style.overflow = 'hidden';
  } )

closeMenu.addEventListener('click', () => {
    menuCo.style.display = 'none';
    hummenu.style.display = 'block';
    logo.style.display = 'block';
    bodyCo.style.position = 'static';
    bodyCo.style.overflow = 'auto';
  } )

porBtn.addEventListener('click', () => {
    menuCo.style.display = 'none';
    hummenu.style.display = 'block';
    logo.style.display = 'block';
    bodyCo.style.position = 'static';
    bodyCo.style.overflow = 'auto';
  } )

aboBtn.addEventListener('click', () => {
    menuCo.style.display = 'none';
    hummenu.style.display = 'block';
    logo.style.display = 'block';
    bodyCo.style.position = 'static';
    bodyCo.style.overflow = 'auto';
  } )
forBtn.addEventListener('click', () => {
    menuCo.style.display = 'none';
    hummenu.style.display = 'block';
    logo.style.display = 'block';
    bodyCo.style.position = 'static';
    bodyCo.style.overflow = 'auto';
  } )