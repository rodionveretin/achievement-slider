import Swiper, { Autoplay, Navigation, Pagination, Scrollbar, EffectCoverflow } from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination, Scrollbar, EffectCoverflow]);

const slider = new Swiper('.slider__inner', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1.3,
  spaceBetween: 150,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    depth: 300,
    slideShadows : false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const switcher = new Swiper('.switch__inner', {
  loop: true,
  slidesPerView: 10,
  spaceBetween: 12,
  navigation: {
    nextEl: '.switch__next',
    prevEl: '.switch__prev',
  },
});



const switchSlides = document.querySelectorAll('.switch__slide');

for (let item of switchSlides) {
  item.addEventListener('click', () => {
    for (let i of switchSlides) {
      i.classList.remove('switch__slide--active');
    }
    item.classList.add('switch__slide--active');
    console.log(switcher.slides)
    for (let i = 0; i < slider.slides.length; i++) {
      if (item.closest('.swiper-slide').getAttribute('slide-id') == slider.slides[i].attributes[1].value) {
         slider.slideToLoop(slider.slides[i].dataset.swiperSlideIndex, 800);
      }
    }
  });
}
