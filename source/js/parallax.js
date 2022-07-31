window.addEventListener('scroll', function() {
  const parallax = document.querySelector('.home__bg');
  let scrollPosition = window.pageYOffset;

  parallax.style.transform = 'translateY(' + scrollPosition * .9 + 'px)';
});

window.addEventListener('scroll', function() {
  const parallax = document.querySelector('.home__body');
  let scrollPosition = window.pageYOffset;

  parallax.style.transform = 'translateY(' + scrollPosition * .9 + 'px)';
});
