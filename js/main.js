$(function($) {

  "use strict";

  /*=========================== preloader ===========================*/
  // Wait for window load
  $(window).on('load', function() {
     $(".se-pre-con").fadeOut("slow");;
  });

/*=========================== preloader ===========================*/







$('.hover').hover(function(){
      $(this).addClass('flip');
    },function(){
      $(this).removeClass('flip');
    });




  $('.click-btn.1').on('click', function(e){
      $('.show-content.one').addClass('d-none');
      $('.click-to-show-content.one').removeClass('d-none');
    });

    $('.clickOnHide').on('click', function(e){
      $('.click-to-show-content.one').addClass('d-none');
      $('.show-content.one').removeClass('d-none');
    });

  $('.click-btn.2').on('click', function(e){
      $('.show-content.two').addClass('d-none');
      $('.click-to-show-content.two').removeClass('d-none');
    });
    $('.clickOnHide').on('click', function(e){
      $('.click-to-show-content.two').addClass('d-none');
      $('.show-content.two').removeClass('d-none');
    });

    
  $('.click-btn.3').on('click', function(e){
      $('.show-content.three').addClass('d-none');
      $('.click-to-show-content.three').removeClass('d-none');
    });
    $('.clickOnHide').on('click', function(e){
      $('.click-to-show-content.three').addClass('d-none');
      $('.show-content.three').removeClass('d-none');
    });
    
  $('.click-btn.4').on('click', function(e){
      $('.show-content.four').addClass('d-none');
      $('.click-to-show-content.four').removeClass('d-none');
    });
    $('.clickOnHide').on('click', function(e){
      $('.click-to-show-content.four').addClass('d-none');
      $('.show-content.four').removeClass('d-none');
    });
    
  $('.click-btn.5').on('click', function(e){
      $('.show-content.five').addClass('d-none');
      $('.click-to-show-content.five').removeClass('d-none');
    });
    $('.clickOnHide').on('click', function(e){
      $('.click-to-show-content.five').addClass('d-none');
      $('.show-content.five').removeClass('d-none');
    });

    
  $('.click-btn.6').on('click', function(e){
      $('.show-content.six').addClass('d-none');
      $('.click-to-show-content.six').removeClass('d-none');
    });
    $('.clickOnHide').on('click', function(e){
      $('.click-to-show-content.six').addClass('d-none');
      $('.show-content.six').removeClass('d-none');
    });




  $('.click-btnP.1').on('click', function(e){
      $('.show-content.one').addClass('d-none');
      $('.click-to-show-content.one').removeClass('d-none');
    });
    $('.clickOnHide.1').on('click', function(e){
      $('.click-to-show-content.one').addClass('d-none');
      $('.show-content.one').removeClass('d-none');
    });


    $('.click-btnP.1').on('click', function(e){
      $('.single_project_list_im.one').addClass('color_bg');
    });
    $('.clickOnHide.1').on('click', function(e){
      $('.single_project_list_im.one').removeClass('color_bg');
    });




  $('.click-btnP.2').on('click', function(e){
      $('.show-content.two').addClass('d-none');
      $('.click-to-show-content.two').removeClass('d-none');
    });
    $('.clickOnHide.2').on('click', function(e){
      $('.click-to-show-content.two').addClass('d-none');
      $('.show-content.two').removeClass('d-none');
    });


    $('.click-btnP.2').on('click', function(e){
      $('.single_project_list_im.two').addClass('color_bg');
    });
    $('.clickOnHide.2').on('click', function(e){
      $('.single_project_list_im.two').removeClass('color_bg');
    });


  $('.click-btnP.3').on('click', function(e){
      $('.show-content.three').addClass('d-none');
      $('.click-to-show-content.three').removeClass('d-none');
    });
    $('.clickOnHide.3').on('click', function(e){
      $('.click-to-show-content.three').addClass('d-none');
      $('.show-content.three').removeClass('d-none');
    });


    $('.click-btnP.3').on('click', function(e){
      $('.single_project_list_im.three').addClass('color_bg');
    });
    $('.clickOnHide.3').on('click', function(e){
      $('.single_project_list_im.three').removeClass('color_bg');
    });

  $('.click-btnP.4').on('click', function(e){
      $('.show-content.four').addClass('d-none');
      $('.click-to-show-content.four').removeClass('d-none');
    });
    $('.clickOnHide.4').on('click', function(e){
      $('.click-to-show-content.four').addClass('d-none');
      $('.show-content.four').removeClass('d-none');
    });


    $('.click-btnP.4').on('click', function(e){
      $('.single_project_list_im.four').addClass('color_bg');
    });
    $('.clickOnHide.4').on('click', function(e){
      $('.single_project_list_im.four').removeClass('color_bg');
    });

  $('.click-btnP.5').on('click', function(e){
      $('.show-content.five').addClass('d-none');
      $('.click-to-show-content.five').removeClass('d-none');
    });
    $('.clickOnHide.5').on('click', function(e){
      $('.click-to-show-content.five').addClass('d-none');
      $('.show-content.five').removeClass('d-none');
    });


    $('.click-btnP.5').on('click', function(e){
      $('.single_project_list_im.five').addClass('color_bg');
    });
    $('.clickOnHide.5').on('click', function(e){
      $('.single_project_list_im.five').removeClass('color_bg');
    });

  $('.click-btnP.6').on('click', function(e){
      $('.show-content.six').addClass('d-none');
      $('.click-to-show-content.six').removeClass('d-none');
    });
    $('.clickOnHide.6').on('click', function(e){
      $('.click-to-show-content.six').addClass('d-none');
      $('.show-content.six').removeClass('d-none');
    });


    $('.click-btnP.6').on('click', function(e){
      $('.single_project_list_im.six').addClass('color_bg');
    });
    $('.clickOnHide.6').on('click', function(e){
      $('.single_project_list_im.six').removeClass('color_bg');
    });

  $('.click-btnP.7').on('click', function(e){
      $('.show-content.seven').addClass('d-none');
      $('.click-to-show-content.seven').removeClass('d-none');
    });
    $('.clickOnHide.7').on('click', function(e){
      $('.click-to-show-content.seven').addClass('d-none');
      $('.show-content.seven').removeClass('d-none');
    });


    $('.click-btnP.7').on('click', function(e){
      $('.single_project_list_im.seven').addClass('color_bg');
    });
    $('.clickOnHide.7').on('click', function(e){
      $('.single_project_list_im.seven').removeClass('color_bg');
    });



    // $('.click-btnP').on('click', function(e){
    //   $('.single_project_list_im').addClass('color_bg');
    // });
    // $('.clickOnHide').on('click', function(e){
    //   $('.single_project_list_im').removeClass('color_bg');
    // });





});

