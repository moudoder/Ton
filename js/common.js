$(document).ready(function () {
  $(".scroll-to").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  AOS.init();


  var $element = $('.road-list--1');
  let counter = 0;
  $(window).scroll(function() {
    var scroll = $(window).scrollTop() + $(window).height();
    //Если скролл до конца елемента
    //var offset = $element.offset().top + $element.height();
    //Если скролл до начала елемента
    var offset = $element.offset().top
    if (scroll > offset && counter == 0) {
      $('.road-list').addClass('animate-road');
      counter = 1;
    }
  });


  var endDate = new Date("2023").getTime();
  var timer = setInterval(function() {
      let now = new Date().getTime();
      let t = endDate - now;
      
      if (t >= 0) {
      
          let days = Math.floor(t / (1000 * 60 * 60 * 24));
          let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
          let secs = Math.floor((t % (1000 * 60)) / 1000);
      
          document.getElementById("day").innerHTML = days;
      
          document.getElementById("hour").innerHTML = ("0"+hours).slice(-2);
      
          document.getElementById("minuts").innerHTML = ("0"+mins).slice(-2);
      
          document.getElementById("second").innerHTML = ("0"+secs).slice(-2);
      
      } else {
          //document.getElementById("timer").innerHTML = "The countdown is over!";
      
      }
      
  }, 1000);

  $('.navagation__link').on('click', function() {
  	$('.navagation__link').removeClass('active');
  	$(this).addClass('active');
  	return false;
  })

  if($(window).width() <= '767'){
    
  }

  $(".phone").mask("+7 (999) 999-9999");

  var block_show1 = null;
  var block_show2 = null;
  var block_show3 = null;
  var block_show4 = null;

  function scrollTracking_1(){
    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $('#header').offset().top;
    var eh = $('#header').outerHeight();
    if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
      if (block_show1 == null || block_show1 == false) {
        $('.nav-1').addClass('active');
      }
      block_show1 = true;
    } else {
      if (block_show1 == null || block_show1 == true) {
        $('.nav-1').removeClass('active');
      }
      block_show1 = false;
    }
  }
  function scrollTracking_2(){
    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $('#about').offset().top;
    var eh = $('#about').outerHeight();
    if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
      if (block_show2 == null || block_show2 == false) {
        $('.nav-2').addClass('active');
      }
      block_show2 = true;
    } else {
      if (block_show2 == null || block_show2 == true) {
        $('.nav-2').removeClass('active');
      }
      block_show2 = false;
    }
  }
  function scrollTracking_3(){
    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $('#road').offset().top;
    var eh = $('#road').outerHeight();
    if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
      if (block_show3 == null || block_show3 == false) {
        $('.nav-3').addClass('active');
      }
      block_show3 = true;
    } else {
      if (block_show3 == null || block_show3 == true) {
        $('.nav-3').removeClass('active');
      }
      block_show3 = false;
    }
  }
  function scrollTracking_4(){
    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $('#last').offset().top;
    var eh = $('#last').outerHeight();
    if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
      if (block_show4 == null || block_show4 == false) {
        $('.nav-4').addClass('active');
        $('.navagation').addClass('navagation-hidden')
      }
      block_show4 = true;
    } else {
      if (block_show4 == null || block_show4 == true) {
        $('.nav-4').removeClass('active');
        $('.navagation').removeClass('navagation-hidden')
      }
      block_show4 = false;
    }
  }
  $(window).scroll(function(){
    scrollTracking_1();
    scrollTracking_2();
    scrollTracking_3();
    scrollTracking_4();
  });
    
  $(document).ready(function(){ 
    scrollTracking_1();
    scrollTracking_2();
    scrollTracking_3();
    scrollTracking_4();
  });
})