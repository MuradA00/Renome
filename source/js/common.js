
// const burger = document.querySelector('.burger');
// const mobileMenu = document.querySelector('.header__nav');

// burger.onclick = addClassForMenu;
// function addClassForMenu() {
//   burger.classList.toggle('active');
//   mobileMenu.classList.toggle('active');
//   document.body.classList.toggle('active')
// }

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       document.querySelectorAll('.header__nav-link').forEach((link) =>{

//         if (link.getAttribute('href').replace('#', '') == entry.target.id) {
//           link.classList.add('active');
//         } else {
//           link.classList.remove('active');
//         }
//       })
//     }
//   });
// }, {
//   threshold: 0.4
// });

// document.querySelectorAll('.section-observe').forEach((section) => observer.observe(section))

// if (document.querySelector('.header__nav-list--index')) {
//   document.querySelector('.header__nav-list--index').addEventListener('click', function(e){
//     if (e.target.classList.contains('header__nav-link')) {
//       e.preventDefault();
//       const id = e.target.getAttribute('href').replace('#', '');
//       let headerHeight = document.querySelector('header').clientHeight;
//       window.scrollTo({
//         top: document.getElementById(id).offsetTop - headerHeight,
//         behavior:"smooth"
//       })
//     }
//   })
// }

// AOS.init();


const newsRow = new Swiper('.journal__inner', {
  slidesPerView: 1,
  speed: 500,
  noSwiping: true,
  breakpoints: {
    800: {
      spaceBetween: 34.5,
      slidesPerView: 'auto'
    }
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.journal__btn-next',
    prevEl: '.journal__btn-prev',
  },
});

const stockRow = new Swiper('.stock__inner', {
  slidesPerView: 1,
  speed: 500,
  noSwiping: true,
  breakpoints: {
    800: {
      spaceBetween: 34.5,
      slidesPerView: 'auto'
    }
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.stock__btn-next',
    prevEl: '.stock__btn-prev',
  },
});


const diplomaRow = new Swiper('.achiev__slider-wrapper', {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 500,
  // loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.achiev__next',
    prevEl: '.achiev__prev',
  },
});

const employeesaRow = new Swiper('.empl__list', {
  slidesPerView: 1,
  speed: 500,
  breakpoints: {
    900: {
      slidesPerView: 5
    }
  },
  // loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.empl__next',
    prevEl: '.empl__prev',
  },
});

const clientRow = new Swiper('.client__list', {
  speed: 600,
  slidesPerView: 'auto',
  initialSlide:0,
  loopedSlides:10,
  visibilityFullFit: true,
  autoResize: false,
  spaceBetween: 25,
  grabCursor: true,
  paginationClickable: true,
  mousewheelReleaseOnEdges: true,
  breakpoints: {
    500: {
      spaceBetween: 56
    }
  },
  // loop: true,
  navigation: {
    nextEl: '.client__btn-next',
    prevEl: '.client__btn-prev',
  },
});

const clientText = new Swiper('.review__wrapper', {
  slidesPerView: 'auto',
  speed: 300,
  draggable: false,
  preventInteractionOnTransition: false,
  allowTouchMove: false,
  // loop: true,
  navigation: {
    nextEl: '.pag-next',
    prevEl: '.pag-prev',
  },
});

const clientName = new Swiper('.review__inner', {
  slidesPerView: 'auto',
  speed: 300,
  preventInteractionOnTransition: false,
  allowTouchMove: false,
  // loop: true,
  navigation: {
    nextEl: '.pag-next',
    prevEl: '.pag-prev',
  },
});

const structureRow = new Swiper('.structure__inner', {
  slidesPerView: 1,
  setWrapperSize: true,
  speed: 300,
  // loop: true,
  navigation: {
    nextEl: '.structure__btn-next',
    prevEl: '.structure__btn-prev',
  },
});

if (menuLinks.length > 0) {
  menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener("click", function (event) {
      mobMenu.classList.remove('--open-menu');
      body.classList.remove('--body-locked')
      burger.classList.remove('--burger-active')
    });
  });
}

var elem = document.querySelector('.gallery-inner');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-inner__photo',
  columnWidth: 200
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
  // options
});
