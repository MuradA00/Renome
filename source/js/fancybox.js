// $('[data-fancybox]').fancybox({
//   // Options will go here
//   buttons : [
//     'close'
//   ],
//   wheel : false,
//   transitionEffect: "slide",
//    thumbs          : true,
//   hash            : true,
//   loop            : true,
//   // keyboard        : true,
//   toolbar         : false,
//   arrows          : true,
//   clickContent    : false
// });


const myCarousel = new Carousel(document.querySelector(".gallery-inner"), {
  preload: 1
  });

  Fancybox.assign('[data-fancybox="gallery"]', {
  closeButton: "top",
  Carousel: {
  on: {
  change: (that) => {
  myCarousel.slideTo(myCarousel.getPageforSlide(that.page), {
  friction: 0
  });
  }
  }
  }
  });

