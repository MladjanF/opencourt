// Navigation Bar Color Change on Scroll

$(document).ready(function(){
    $(window).scroll(function() { 
      if ($(document).scrollTop() > 50) {
        $(".navigation").css("background-color", "rgba(34, 34, 34, 0.95");
        $(".navigation").css("transition", "all 0.8s ease-in-out"); 
      } else {
        $(".navigation").css("background-color", "transparent");
      }
    });
  });

// HOME TEXT

  var TEXTS = ["Career Development & Placement", "Contract Negotiations", "Legal Services", "Client Representation"];

  var index = 0;
  
  $(function() {
    setInterval(function() {
      $('#header-text-change').fadeOut(2600, function() {
        $(this).text(TEXTS[index++]).fadeIn(1000);
        if (index === TEXTS.length)
          index = 0
      });
    }, 3600);
  });

// SCROLL ROCK 'N' ROLL

var sections = $('section')
  , nav = $('.navigation')
  , nav_height = nav.innerHeight();
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).innerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
 
  $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 500);
 
  return false;
});