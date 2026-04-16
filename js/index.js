const mainVisualSwiper = new Swiper('.main-visual__swiper', {
  // オプション
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var works__swiper;

function activateWorksSwiper() {
  if (!works__swiper) {
    works__swiper = new Swiper('.works__swiper', {
      direction: 'horizontal',
      loop: false,
      autoplay: false,
      slidesPerView: 'auto',
      scrollbar: {
        el:  '.works__swiper-scrollbar',
        dragClass: 'works__swiper-scrollbar-drag',
        draggable: true,
      },
});};}

function switchByWidth() {
  if (window.matchMedia('(max-width: 810px)').matches) {
    activateWorksSwiper();
  }
  else {
    works__swiper.destroy();
    works__swiper = undefined;
  };
};

window.addEventListener('load', switchByWidth);
window.addEventListener('resize', switchByWidth);


