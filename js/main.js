// Preloader
window.addEventListener('load', function() {
  var preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});

// Testimonials
(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();

// Form
$('.form__btn').click(function() {
  $('.mail__letter').toggleClass('move');
  $('.mail__top').toggleClass('closed');
  $('.form__btn--invisible').toggleClass('visible');
  $('.form__btn--visible').toggleClass('invisible');
});

$('input').focus(function() {
  $(this).parent().addClass('active');
  $('input').focusout(function() {
    if($(this).val() == '') { $(this).parent().removeClass('active');
    } else { $(this).parent().addClass('active');
    }
  })
});

// Gallery
   
    var containerEl = document.querySelector(".portfolio-item");
    var mixer = mixitup(containerEl, {
      animation: {
        effects: "fade translateZ(-100px)",
        effectsIn: "fade translateY(-100%)",
        easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
      }
    });
  
    $("[data-fancybox]").fancybox({
      loop: true,
      hash: true,
      transitionEffect: "slide",

      clickContent: function(current, event) {
        return current.type === "image" ? "next" : false;
      }
    });

  //  animation
