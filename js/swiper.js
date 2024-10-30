const swiperGalerry = new Swiper('.swiper-container', {
  loop: true, // Зацикливание слайдов
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Сделать пагинацию кликабельной
  },
  autoplay: {
    delay: 3000, // Автоматическое пролистывание каждые 3 секунды
  },
  slidesPerView: 1, // Сколько слайдов показывать одновременно
  spaceBetween: 30, // Расстояние между слайдами (в пикселях)
});

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });
