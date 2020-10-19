$(function() {


  $('.profits__carousel').owlCarousel({
    nav: true,
    dots: false,
    loop: true,
    smartSpeed: 700,
    items: 1,
    // navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
    // responsiveClass: true,
    // responsive: {},
  });
  $('.popnow__carousel').owlCarousel({
    nav: true,
    dots: false,
    // loop: true,
    smartSpeed: 700,
    items: 5,
  });

  $('.goods__button--howdeliver').on('click', function() {
    $('.goods__coll--wrap').toggleClass('collapse');
	});


});
