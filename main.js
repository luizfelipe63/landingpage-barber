/*===============MENU RESPONSIVO=======================*/

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const div of toggle) {
  div.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const link = document.querySelectorAll('nav ul li a')

for (const links of link) {
  links.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*===============BOX SHADOWN SCROLL=============*/
function boxShandonwScrool() {
  const header = document.getElementById('header')
  const navheigth = header.offsetHeight
  if (window.scrollY >= navheigth) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/*===============TESTEMONNIALS SLIDERS=============*/
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/*===============SCROLLREVEAL=============*/
const scrollreavel = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollreavel.reveal(
  `
#home .image,#home .text,
#about .image,#about .text,
#services header, #services .card,
#testimonial header, #testimonial .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social
`,
  { interval: 100 }
)

/*===============BACK-TO-TOP=============*/
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/*===========AGRUPAMENTO DE FUNÇÕES==========*/
window.addEventListener('scroll', function () {
  activateMenuAtCurrentSection()
  boxShandonwScrool()
  backToTop()
})
