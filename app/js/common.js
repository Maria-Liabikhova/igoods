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
    items: 5,
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
  
});
