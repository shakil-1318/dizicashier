


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




// Scroll back to top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

// Footer Current Year
var year = document.getElementById('currentYear');
year.innerHTML = new Date().getFullYear();


// $(document).ready(function () {
//   $(window).scroll(function (event) {
//     var scroll = $(window).scrollTop();
//     if (scroll > 100) {
//       $("#demo").show();
//     } else {
//       $("#demo").hide();
//     }
//     // Do something
//   });
//   $(window).on("load", function () {
//     var windowSize = $(window).width();
//     if (windowSize < 481) {
//       $(".data-section").addClass("mobileView");
//     } else {
//       $(".data-section").addClass("webView");
//     }
//   });



// });