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


  var endDate = new Date("Sep 1, 2023").getTime();
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

  let gold = '';
  if($(window).width() <= '767'){
    gold = $('.header-gold')[1];
  }
  else{
    gold = $('.header-gold')[0];
  }

  $(".phone").mask("+7 (999) 999-9999");

  
  let scrollPos = 0;
  let min_top_gold = 0;
  let max_top_gold = 10;
  if($(window).width() <= '767'){
    $(gold).css('top','12%')
    min_top_gold = 12;
    max_top_gold = 16;
  }
  else{
    $(gold).css('top','0%')
  }
  let scrl = gold.style.top;
  $(window).scroll(function(){
     let st = $(this).scrollTop();
     if (st > scrollPos){
       if (parseInt(scrl) < max_top_gold) {
         scrl = parseInt(scrl) + 1;
         let stp = scrl + '%';
         $(gold).css('top',stp)
       }
     } else {
       if (parseInt(scrl) > min_top_gold) {
         scrl = parseInt(scrl) - 1;
         let stp = scrl + '%';
         $(gold).css('top',stp)
       }
     }
     scrollPos = st;
  });

  var sections = $('section');
  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
    
    sections.each(function() {
      var top = $(this).offset().top - 400,
          bottom = top + $(this).outerHeight();
      
      if (cur_pos >= top && cur_pos <= bottom) {
        let counter_sec = $(this).attr('id');
        if (counter_sec == 4) {
          $('.navagation').addClass('navagation-hidden');
        }
        else{
          $('.navagation').removeClass('navagation-hidden');
        }
        $('.navagation').find('a').removeClass('active');
        sections.removeClass('active');
        
        $(this).addClass('active');
        $('.navagation').find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
    });
  });

})