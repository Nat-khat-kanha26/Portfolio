// window scroll but does not working
$(window).on("scroll", function(){
  var scrollTop = $(window).scrollTop();
  if(scrollTop >= 20){
    $('body').addClass('fixed-header');
  } else {
    $('body').removeClass('fixed-header')
  }
});
//typing animation but does not working
 $(document).ready(function () {
   
   //typing anination .
   new Typed('#type-it', {
      strings: ['designer', 'developer','freelancer'],
      typeSpeed: 50,
    });
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive:{
          0:{
            items:1
          },
          600:{
            items:3
          },
          1000:{
            items:5
          }
        }
      });
      
      /// one page scroll
      $.scrollit();
   
 });
 