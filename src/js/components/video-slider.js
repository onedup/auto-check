import Swiper from "swiper/bundle";

const swiper = new Swiper(".video-swiper", {
  slidesPerView: 4,
  spaceBetween: 60,
  
  // Navigation arrows
  navigation: {
    nextEl: ".video-swiper-button-next",
    prevEl: ".video-swiper-button-prev",
  },

});
