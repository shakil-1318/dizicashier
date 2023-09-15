


// Slider owl carousel
jQuery(document).ready(function ($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $('#customers-package-mobile').owlCarousel({
    loop: true,
    center: true,
    items: 1,
    margin: 0,
    dots: true,
    autoplayTimeout: 4500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1170: {
        items: 1
      }
    }
  });
});

// Slider owl carousel
jQuery(document).ready(function ($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $('#customers-testimonials').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 4500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    }
  });
});

// Video Popup
$(document).ready(function () {
  $('.popup-youtube').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    // removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
});


// Footer Current Year
var year = document.getElementById('currentYear');
year.innerHTML = new Date().getFullYear();
