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

/* Works Session */

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

const cardGenrator = () => {
  const workSection = document.getElementById('works-section');
  workSection.innerHTML += `
  <header class="title">
        <h2 class="Neutrals">My Recent Works</h2>
  </header>
  <ul id="cards">`;
  const cardsList = document.getElementById('cards');
  worksCardArr.forEach((card) => {
    const workCard = document.createElement('li');
    workCard.classList.add('card-con');
    workCard.innerHTML += `
    ${card.Svg}
  <ul class="card-data place-over border">
    <li>
      <h4 class="dgreenB">
        Multi-Post Stories <br />
        Gain+Glory
      </h4>
    </li>
    <li>
      <ul class="language-list">
        <li class="language grayBG dgreenB">Ruby on rails</li>
        <li class="language grayBG dgreenB">CSS</li>
        <li class="language grayBG dgreenB">JavScript</li>
        <li class="language grayBG dgreenB">html</li>
      </ul>
    </li>
    <li class="card-action">
      <a
        class="see-project open-pop-btn white greenBG"
        aria-label="action-btn"
        href="#dialog-container"
        type="button"
      >
        See Project
      </a>
    </li>
  </ul>`;
    cardsList.appendChild(workCard);
  });
}

window.onload = () => {
  cardGenrator();
  cardGenrato()
};

/* Detail Popup Window */
const cardGenrato = () => {
const opnPopBtn = document.querySelectorAll('.open-pop-btn');
const dialogContainer = document.getElementById('dialog-container');
const dialogBtnCtr = document.getElementById('dialog-btn-ctr');
const popupWin = document.querySelectorAll('.dialog-container');
opnPopBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    bodyCo.style.position = '';
    bodyCo.style.overflow = '';
    document.body.classList.add('no-scroll');
    dialogContainer.style.overflow = '';
    dialogContainer.style.display = 'flex';
    dialogContainer.innerHTML = `
    <div class="dialog-card flex">
      <div id="dialog-btn-ctr" class="dialog-btn-ctr relative">
        <img
          class="d-mob"
          src="./img/m-Snapshoot-Portfolio.svg"
          alt="project picture"
        />
        <img
          class="d-desk"
          src="./img/Snapshoot-Portfolio.svg"
          alt="project picture"
        />
        <button
          class="absolute btn-noBg"
          type="button"
          title="closing button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="white"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>
      <div class="dialog-card-data">
        <div class="flex-row">
          <h5 class="dgreenB">Keeping track of hundreds of components</h5>
          <ul class="pop-btn dsp-d">
            <li>
              <button
                class="see-project white greenBG"
                aria-label="action-btn"
                type="button"
              >
                <span>See Live</span>
    
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z"
                    fill="white"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                class="see-project white greenBG"
                aria-label="action-btn"
                type="button"
              >
                See Source
                <i
                  ><svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_34_3031)">
                      <path
                        d="M17.9991 7.46114C17.9991 6.32124 17.6331 5.25043 16.9344 4.31779C17.2006 3.41969 17.2671 2.27979 17.2006 0.967185C17.1673 0.414508 16.7348 0 16.2024 0C15.903 0 13.3743 0.0345423 11.9104 1.38169C10.6461 1.1399 9.3152 1.1399 8.0176 1.38169C6.58692 0.0345423 4.05826 0 3.72555 0C3.1932 0 2.76067 0.414508 2.7274 0.967185C2.62758 2.27979 2.7274 3.41969 2.99357 4.31779C2.29486 5.28497 1.92887 6.35579 1.92887 7.46114C1.92887 9.8791 3.72555 12.0553 6.45383 13.0915C6.35401 13.2988 6.28747 13.5406 6.22093 13.7824C3.32629 13.4715 1.96215 10.7427 1.8956 10.639C1.6627 10.1209 1.06381 9.91364 0.564734 10.19C0.0656586 10.4318 -0.133972 11.0535 0.132202 11.5717C0.198745 11.7444 2.02869 15.4404 6.05457 15.8549V18.9637C6.05457 19.5509 6.4871 20 7.05272 20H12.8753C13.4409 20 13.8734 19.5509 13.8734 18.9637V14.8532C13.8734 14.2314 13.7403 13.6442 13.5074 13.1261C16.2024 12.0553 17.9991 9.91364 17.9991 7.46114Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_34_3031">
                        <rect width="18" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </i>
              </button>
            </li>
          </ul>
        </div>
        <ul class="language-list">
          <li class="language grayBG dgreenB">Ruby on rails</li>
          <li class="language grayBG dgreenB">CSS</li>
          <li class="language grayBG dgreenB">JavScript</li>
          <li class="language grayBG dgreenB">html</li>
        </ul>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it 1960s with the releaLorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it
          1960s with the relea
        </p>
        <ul class="pop-btn d-mob">
          <li>
            <button
              class="see-project white greenBG"
              aria-label="action-btn"
              type="button"
            >
              <span>See Live</span>
    
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z"
                  fill="white"
                />
              </svg>
            </button>
          </li>
          <li>
            <button
              class="see-project white greenBG"
              aria-label="action-btn"
              type="button"
            >
              See Source
              <i
                ><svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_34_3031)">
                    <path
                      d="M17.9991 7.46114C17.9991 6.32124 17.6331 5.25043 16.9344 4.31779C17.2006 3.41969 17.2671 2.27979 17.2006 0.967185C17.1673 0.414508 16.7348 0 16.2024 0C15.903 0 13.3743 0.0345423 11.9104 1.38169C10.6461 1.1399 9.3152 1.1399 8.0176 1.38169C6.58692 0.0345423 4.05826 0 3.72555 0C3.1932 0 2.76067 0.414508 2.7274 0.967185C2.62758 2.27979 2.7274 3.41969 2.99357 4.31779C2.29486 5.28497 1.92887 6.35579 1.92887 7.46114C1.92887 9.8791 3.72555 12.0553 6.45383 13.0915C6.35401 13.2988 6.28747 13.5406 6.22093 13.7824C3.32629 13.4715 1.96215 10.7427 1.8956 10.639C1.6627 10.1209 1.06381 9.91364 0.564734 10.19C0.0656586 10.4318 -0.133972 11.0535 0.132202 11.5717C0.198745 11.7444 2.02869 15.4404 6.05457 15.8549V18.9637C6.05457 19.5509 6.4871 20 7.05272 20H12.8753C13.4409 20 13.8734 19.5509 13.8734 18.9637V14.8532C13.8734 14.2314 13.7403 13.6442 13.5074 13.1261C16.2024 12.0553 17.9991 9.91364 17.9991 7.46114Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_34_3031">
                      <rect width="18" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </i>
            </button>
          </li>
        </ul>
      </div>
    </div>`;});
  });
};
