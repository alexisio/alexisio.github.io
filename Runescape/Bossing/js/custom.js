$('#search').on('click', function() {
  var elem = $('img[data-search="' + $('#monsters').val() + '"]')
  elem.goTo();
  elem.addClass("transition highlight")
    .delay(1750)
    .queue(function () {
      $(this).removeClass("highlight");
      $(this).dequeue();
    });
    $('#monsters').blur();
	$("#monsters").val("");
});

function clickButton(e, buttonid) {
  var evt = e ? e : window.event;
  var bt = document.getElementById(buttonid);
  if (bt) {
    if (evt.keyCode == 13) {
      bt.click();
      return false;
    }
  }
}

$("#monsters").keyup(function(event){
    if(event.keyCode == 13){
        $("#search").click();
		$("#monsters").val("");
    }
});

var lastValue = '';
$('.monsters').on('change keyup paste mouseup', function() {
  if ($(this).val() != lastValue) {
      lastValue = $(this).val();
      //find images matching the search
  }
});

(function ($) {
        $.fn.goTo = function () {
          var fromTop = 15;
          $('html, body').animate({
            scrollTop: $(this).offset().top - fromTop
          }, 'fast');
          return this; // for chaining...
        }
      })(jQuery);

// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
