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


  // Statistics
  $(document).ready(function($) {
    $('.count-number').counterUp({
        delay: 10,
        time: 10000
    });
});

// Slider

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  var element = document.getElementById("animationTrigger");
  if (isElementInViewport(element)) {
    element.classList.add("animate");
  }
}

window.addEventListener("scroll", handleScroll);


  // Function to change the navigation menu and logo background color on scroll
  window.addEventListener('scroll', function() {
    var navigationMenu = document.querySelector('.main-navigation');
    var logoContained = document.getElementById('logo-contained');
    var scrollTop = window.scrollY;

    // Change the background color when the user scrolls down
    if (scrollTop > 0) {
        navigationMenu.style.backgroundColor = 'black';
        logoContained.style.backgroundColor = 'black';
    } else {
        navigationMenu.style.backgroundColor = 'transparent';
        logoContained.style.backgroundColor = 'transparent';
    }
});