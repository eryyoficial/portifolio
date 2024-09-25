const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.nav_header');


hamburger.addEventListener("click", () =>
header.classList.toggle('active'));

const navLinks = document.querySelectorAll('.linkhamb');

// Itera sobre os nav-links usando um loop for
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
        // Seleciona o elemento com a classe nav-list
        const navList = document.querySelector('.listhamb');

        // Altera a propriedade left para 0
        if (navList) {

          navList.classList.toggle('active');
          navList.style.left = '-100%';

            // // Verifica se a classe active está presente
            // if (header.classList.contains('active')) {
            //     header.classList.remove('active'); // Remove a classe active
            // } else {
            //   navList.style.left = '0';
            //     header.classList.add('active'); // Adiciona a classe active
            // }
        }
    });
}
// Inicialização do SwiperJS para o carrossel de feedbacks
const swiper = new Swiper('.mySwiper', {
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
