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

* Works Session */

worksCardArr = [
  {
    Id: 1,
    Svg: '<svg   class="d-mob"   width="342"   height="492"   viewBox="0 0 329 476"   fill="none"   xmlns="http://www.w3.org/2000/svg" >   <rect     x="0.5"     y="0.5"     width="328"     height="475"     rx="8.5"     fill="#EBF0EE"     stroke="#D0D9D4"   /> </svg> <svg   class="d-desk"   width="370"   height="476"   viewBox="0 0 370 476"   fill="none"   xmlns="http://www.w3.org/2000/svg" >   <rect     x="-0.5"     y="0.5"     width="370"     height="475"     rx="8.5"     fill="#EBF0EE"     stroke="#D0D9D4"   /> </svg>',
    Headding: "Multi-Post Stories Gain+Glory",
    Languages: ["Ruby on rails", "CSS", "JavaScript", "html"],
  },
  {
    Id: 2,
    Svg: '<svg   class="d-mob"   width="342"   height="492"   viewBox="0 0 329 476"   fill="none"   xmlns="http://www.w3.org/2000/svg" >   <rect     x="0.5"     y="0.5"     width="328"     height="475"     rx="8.5"     fill="#EBF0EE"     stroke="#D0D9D4"   /> </svg> <svg   class="d-desk"   width="370"   height="476"   viewBox="0 0 370 476"   fill="none"   xmlns="http://www.w3.org/2000/svg" >   <rect     x="-0.5"     y="0.5"     width="370"     height="475"     rx="8.5"     fill="#EBF0EE"     stroke="#D0D9D4"   /> </svg>',
    Headding: "Multi-Post Stories Gain+Glory",
    Languages: ["Ruby on rails", "CSS", "JavaScript", "html"],
  },
  {
    Id: 3,
    Svg: '<svg   class="d-mob"   width="342"   height="492"   viewBox="0 0 329 476"   fill="none"   xmlns="http://www.w3.org/2000/svg" >   <rect     x="0.5"     y="0.5"     width="328"     height="475"     rx="8.5"     fill="#EBF0EE"     stroke="#D0D9D4"   /> </svg> <svg   class="d-desk"   width="370"   height="476"   viewBox="0 0 370 476"   fill="none"   xmlns="http://www.w3.org/2000/svg" >   <rect     x="-0.5"     y="0.5"     width="370"     height="475"     rx="8.5"     fill="#EBF0EE"     stroke="#D0D9D4"   /> </svg>',
    Headding: "Multi-Post Stories Gain+Glory",
    Languages: ["Ruby on rails", "CSS", "JavaScript", "html"],
  },
  {
    Id: 4,
    Svg: '<svg   class="d-mob"   width="342"   height="492"   viewBox="0 0 329 476"   fill="none"   xmlns="http://www.w3.org/2000/svg" >   <rect     x="0.5"     y="0.5"     width="328"     height="475"     rx="8.5"     fill="#EBF0EE"     stroke="#D0D9D4"   /> </svg> <svg   class="d-desk"   width="370"   height="476"   viewBox="0 0 370 476"   fill="none"   xmlns="http://www.w3.org/2000/svg" >   <rect     x="-0.5"     y="0.5"     width="370"     height="475"     rx="8.5"     fill="#EBF0EE"     stroke="#D0D9D4"   /> </svg>',
    Headding: "Multi-Post Stories Gain+Glory",
    Languages: ["Ruby on rails", "CSS", "JavaScript", "html"],
  },
  {
    Id: 5,
    Svg: '<svg   class="d-mob"   width="342"   height="492"   viewBox="0 0 329 476"   fill="none"   xmlns="http://www.w3.org/2000/svg" >   <rect     x="0.5"     y="0.5"     width="328"     height="475"     rx="8.5"     fill="#EBF0EE"     stroke="#D0D9D4"   /> </svg> <svg   class="d-desk"   width="370"   height="476"   viewBox="0 0 370 476"   fill="none"   xmlns="http://www.w3.org/2000/svg" >   <rect     x="-0.5"     y="0.5"     width="370"     height="475"     rx="8.5"     fill="#EBF0EE"     stroke="#D0D9D4"   /> </svg>',
    Headding: "Multi-Post Stories Gain+Glory",
    Languages: ["Ruby on rails", "CSS", "JavaScript", "html"],
  },
  {
    Id: 6,
    Svg: '<svg   class="d-mob"   width="342"   height="492"   viewBox="0 0 329 476"   fill="none"   xmlns="http://www.w3.org/2000/svg" >   <rect     x="0.5"     y="0.5"     width="328"     height="475"     rx="8.5"     fill="#EBF0EE"     stroke="#D0D9D4"   /> </svg> <svg   class="d-desk"   width="370"   height="476"   viewBox="0 0 370 476"   fill="none"   xmlns="http://www.w3.org/2000/svg" >   <rect     x="-0.5"     y="0.5"     width="370"     height="475"     rx="8.5"     fill="#EBF0EE"     stroke="#D0D9D4"   /> </svg>',
    Headding: "Multi-Post Stories Gain+Glory",
    Languages: ["Ruby on rails", "CSS", "JavaScript", "html"],
  },
];
