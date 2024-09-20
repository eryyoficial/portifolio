// Inicialização do SwiperJS para o carrossel de feedbacks
const swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
