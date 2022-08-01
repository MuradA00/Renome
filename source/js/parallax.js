window.addEventListener('scroll', function() {
  const parallax = document.querySelector('.home__bg');
  let scrollPosition = window.pageYOffset;

  parallax.style.transform = 'translateY(' + scrollPosition * .6 + 'px)';
});

window.addEventListener('scroll', function() {
  const parallax = document.querySelector('.home__body');
  let scrollPosition = window.pageYOffset;

  parallax.style.transform = 'translateY(' + scrollPosition * .6 + 'px)';
});

gsap.fromTo('.home', {opacity: 0}, {opacity:1}, {duration: 1, ease: Power4.easeInOout});
gsap.to('.home__info', {opacity: 1, y: 0, duration: 1, delay: .2, ease: 'Power4.inOut'});
gsap.to('.home__image', { opacity: 1, y: 0, duration: 1, delay: .8, ease: 'Power4.inOut'});
gsap.fromTo('.home__bottom', { opacity: 0, y: -50}, {opacity: 1, y: 0, duration: 1, ease: Power4.easeInOut, delay: 1.2})
