$(document).ready(function(){

    $("#top_btn").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, '500');
      return false;
    });
    // #top_btn
    $(window).scroll(function () {
      if ($(this).scrollTop() > 80) {
        $('#top_btn').fadeIn('slow');
      } else {
        $('#top_btn').fadeOut('slow');
      }
    });

    $(window).scroll(function () {
      if ($(this).scrollTop() > 80) {
        $('header').addClass('on');
      } else {
        $('header').removeClass('on');
      }

    });

  // header 
  // if ($(window).width() > 960) {
  //   $(window).scroll(function () {
  //     if ($(this).scrollTop() > 100) {
  //       $('header').addClass('on');
  //     } else {
  //       $('header').removeClass('on');
  //     }

  //   });
  // } else {
  //   $(window).off("scroll");
  // }  

  // $(window).resize(function() {

  //   if ($(window).width() > 960) {
  //   $(window).scroll(function () {
  //     if ($(this).scrollTop() > 100) {
  //       $('header').addClass('on');
  //     } else {
  //       $('header').removeClass('on');
  //       }
  //     }); 
  //   } else {
  //     $(window).off("scroll");
  //   }  
  
  // });

 
  // 모바일 버튼 클릭
  function toggleMenu() {
    $(".menu").toggleClass("on");
    $(".menu_close").stop().fadeToggle();
    $(".btn_menu_btn").toggleClass("on");
  }
  
  $(".btn_menu_btn").click(function() { 
    toggleMenu();
  });
  
  $(window).resize(function() {
    if ($(window).width() >= 768) {
      $(".menu").removeClass("on");
      $(".menu_close").fadeOut();
      $(".btn_menu_btn").removeClass("on");
    }
  });
  
  $('.menu').click(function(e) { 
    $(this).removeClass("on");
    $(".menu_close").fadeOut();
    $(".btn_menu_btn").removeClass("on");

  });

  //tab
  $('#tabs-nav li:first-child').addClass('active');
  $('.tab-content').hide();
  $('.tab-content:first').show();

  // Click function
  $('#tabs-nav li').click(function(){
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();
    
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });


  //sub2_1
  // function onScroll() {
  //   if ($(window).scrollTop() > $(".product").height()) {
  //     $('.product_bar').addClass('on');
  //     // $('.main').css({"position": "inherit", "top": "auto"});
  //   } else {
  //     $('.product_bar').removeClass('on');
  //    // $('.main').css({"position": "sticky", "top": "0"});

  //   }
  // }

  $(window).scroll(function () {
    if ($(this).scrollTop() > $(".product").height() ) {
      $('.product_bar').addClass('on');
      $('.product_bar').css({"position": "fixed","width": "310px"});

    } else {
      $('.product_bar').removeClass('on');
      $('.product_bar').css({"position": "inherit","width": "auto"});

    }

  });


});

