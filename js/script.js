$(".menu").on('click', function () {

    var selector = $(".body")

    if (selector.hasClass('open')) {

        selector.removeClass('open');
    } else {

        selector.addClass('open');
    }
});

$(document).ready(function(){
    $('.responsive').slick({
        dots: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // Event handler for slide change
        onAfterChange: function(slickSlider, currentSlide){
            var slideText = $(slickSlider.$slides[currentSlide]).find('.slide-text').text();
            $('.custom_head_right').text(slideText);
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const customSelects = document.querySelectorAll('.custom-select');

    customSelects.forEach(select => {
        const optionsContainer = select.nextElementSibling;
        const optionsList = optionsContainer.querySelectorAll('.custom-option');

        select.addEventListener('click', function () {
            optionsContainer.classList.toggle('open');
        });

        optionsList.forEach(option => {
            option.addEventListener('click', function () {
                select.textContent = option.textContent;
                optionsContainer.classList.remove('open');
            });
        });

        document.addEventListener('click', function (e) {
            if (!select.contains(e.target)) {
                optionsContainer.classList.remove('open');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const customSelects = document.querySelectorAll('.custom-select');

    customSelects.forEach(select => {
      const optionsContainer = select.nextElementSibling;
      const optionsList = optionsContainer.querySelectorAll('.custom-option');

      select.addEventListener('click', function() {
        optionsContainer.classList.toggle('active');
      });

      optionsList.forEach(option => {
        option.addEventListener('click', function() {
          select.textContent = option.textContent;
          select.setAttribute('data-selected', option.getAttribute('data-value'));
          optionsContainer.classList.remove('active');
        });
      });
    });

    // Close select when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.custom-select-wrapper')) {
        const allSelects = document.querySelectorAll('.custom-select');
        allSelects.forEach(select => {
          select.nextElementSibling.classList.remove('active');
        });
      }
    });
  });