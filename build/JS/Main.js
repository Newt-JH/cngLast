$(document).ready(function(){

 
  ////////////////////////////////////
  
  function onScroll() {
    if ($(window).scrollTop() > $(".main").height() - '35') {
      $('header,.main').addClass('on');
      $('.main').css({"position": "inherit", "top": "auto"});
    } else {
      $('header,.main').removeClass('on');
      $('.main').css({"position": "sticky", "top": "0"});

    }
  }

  
  if ($(window).width() < 960) {
    $(window).scroll(onScroll);
  } else {
    $(window).off("scroll", onScroll);
  }

  $(window).resize(function() {
    if ($(window).width() < 960) {
      $(window).scroll(onScroll);
      $('.main').css({"position": "sticky", "top": "0"});

      
    } else {
      $(window).off("scroll", onScroll);
      onScroll();
      $('.main').css({"position": "inherit", "top": "auto"});

    }
  });


  //메인 스와이퍼 
  var swiper = new Swiper(".mySwiper",{
    spaceBetween: 30,
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });





  

  

});

