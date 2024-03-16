import {Carousel} from "../vendor/carousel.esm.js";
import {Fancybox} from "../vendor/fancybox.esm.js";
import {Thumbs} from "../vendor/carousel.thumbs.esm.js";


Fancybox.bind('[data-fancybox="gallery"]', {
  // Your custom options
});
const container = document.getElementById("myCarousel");
const options = {
  Dots: false,
  Navigation: false,
  Thumbs: {
    type: "classic",
  },
};

new Carousel(container, options, {Thumbs});
