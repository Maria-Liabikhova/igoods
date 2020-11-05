$(function() {


  $('.profits__carousel').owlCarousel({
    nav: true,
    dots: false,
    loop: true,
    smartSpeed: 700,
    items: 1,
  });
  $('.popnow__carousel').owlCarousel({
    nav: true,
    dots: false,
    smartSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1280: {
        items: 5
      },
    }
  });

  $('.goods__button--howdeliver').on('click', function() {
    $('.goods__coll--wrap').toggleClass('collapse');

    if(this.innerHTML == "Узнать больше") 
    {
      this.innerHTML = "Свернуть";
      return;
    }
    else this.innerHTML = "Узнать больше";
  });

  $(".hamburger").click(function() {
    $(".h-menu").addClass('active');
    $(".h-menu__wrap").addClass('active')
  });
  $(".h-menu__button--close").click(function() {
    $(".h-menu").removeClass('active');
    $(".h-menu__wrap").removeClass('active')
  });
  
});