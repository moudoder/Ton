$(document).ready(function () {
  $(".scroll-to").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $('.navagation__link').on('click', function() {
  	$('.navagation__link').removeClass('active');
  	$(this).addClass('active');
  	return false;
  })

  $(".phone").mask("+7 (999) 999-9999");
})