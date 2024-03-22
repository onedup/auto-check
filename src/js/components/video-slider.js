import Swiper from "swiper/bundle";

const swiper = new Swiper(".video-swiper", {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".video-swiper-button-next",
    prevEl: ".video-swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px 700
    320: {
      slidesPerView: 1,
      allowTouchMove: true,
    },
    // when window width is >= 480px 1024
    700: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 1330px 1330
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      allowTouchMove: false,
    },
    1330: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
  },
});
