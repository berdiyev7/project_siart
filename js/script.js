function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

//$(document).ready(function () {
//   $('.header-burger').click(function (event) {
//      $('.header-burger,.header-menu').toggleClass('active');
//      $('.body').toggleClass('lock');
//   });
//});

$('.btn__clean').on('click', function () {
   $('.disabled').remove();
});


$(document).ready(function () {
   $('.catalog').slick({
      arrows: true,
      dots: false,
      slidesToShow: 3,
      infinite: false,
      swipe: false,
      prevArrow: $('.slider__back'),
      nextArrow: $('.slider__next'),
      responsive: [
         {
            breakpoint: 837,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 426,
            settings: {
               slidesToShow: 2
            }
         }
      ]
   });
});

$('.catalog__btn').on('click', function () {
   $(this).parent().remove();
});
