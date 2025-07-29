(function ($) {
  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $(".preloader").fadeOut(1000); // set duration in brackets
  });

  //Navigation Section
  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // PARALLAX EFFECT
  $.stellar();

  // SMOOTHSCROLL
  $(function () {
    $(".navbar-default a, #home a, footer a").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  // WOW ANIMATION
  new WOW({ mobile: false }).init();
})(jQuery);

// Owl Carousel
$(document).ready(function () {
  $(".owl-two").owlCarousel({
    margin: 10,
    // nav: true,
    dots: true,
    dotsEach: true,
    autoplay: true,
    autoplayTimeout: 2000,
    loop: true,
    responsive: {
      0: {
        items: 1.65,
      },
      600: {
        items: 3.35,
      },
      1000: {
        items: 5,
      },
    },
  });

  $(".owl-one").owlCarousel({
    autoplay: true,
    autoplayTimeout: 8000,
    animateOut: "fadeOut",
    items: 1,
    loop: true,
  });
});
