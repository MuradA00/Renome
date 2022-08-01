
function init() {
  new SmoothScroll(document, 120, 15);
}

function SmoothScroll(target, speed, smooth) {
  if (target === document)
    target =
      document.scrollingElement ||
      document.documentElement ||
      document.body.parentNode ||
      document.body; // cross browser support for document scrolling

  var moving = false;
  var pos = target.scrollTop;
  var frame =
    target === document.body && document.documentElement
      ? document.documentElement
      : target; // safari is the new IE

  target.addEventListener("mousewheel", scrolled, { passive: false });
  target.addEventListener("DOMMouseScroll", scrolled, { passive: false });

  function scrolled(e) {
    e.preventDefault(); // disable default scrolling

    var delta = normalizeWheelDelta(e);

    pos += -delta * speed;
    pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)); // limit scrolling

    if (!moving) update();
  }

  function normalizeWheelDelta(e) {
    if (e.detail) {
      if (e.wheelDelta)
        return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1);
      // Opera
      else return -e.detail / 3; // Firefox
    } else return e.wheelDelta / 120; // IE,Safari,Chrome
  }

  function update() {
    moving = true;

    var delta = (pos - target.scrollTop) / smooth;

    target.scrollTop += delta;

    if (Math.abs(delta) > 0.5) requestFrame(update);
    else moving = false;
  }

  var requestFrame = (function () {
    // requestAnimationFrame cross browser
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (func) {
        window.setTimeout(func, 1000 / 50);
      }
    );
  })();
}

window.addEventListener("DOMContentLoaded", init);


const modalTrigger = document.querySelectorAll('.footer__btn')
const modalQuest = document.querySelector('.modal')
const closeModal = document.querySelector('.modal__close-icon')


modalTrigger.forEach(modalBtn => {
  modalBtn.addEventListener('click', () => {
    modalQuest.classList.add('--show-modal')
    body.classList.add('--body-locked')
  })
})

closeModal.addEventListener('click', function() {
  modalQuest.classList.remove('--show-modal')
  body.classList.remove('--body-locked')
})



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
    500: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 'auto',
    },
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
      spaceBetween: 70
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


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {

  const elements = document.querySelectorAll('[data-mask="phone"]') // ищем все поля с атрибутом data-mask="phone"
  if (!elements) return
  const phoneOptions = {
    mask: '+{7}(000)000-00-00' // задаем единственный параметр mask
  }
  elements.forEach(el => { // для каждого найденного поля с атрибутом [data-mask="phone"]
    IMask(el, phoneOptions)
  })

})
