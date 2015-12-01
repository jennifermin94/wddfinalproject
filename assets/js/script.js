$(document).ready(function() {

$("#sidebar-button") .click(function() {
    if ($(".sidebar-container") .hasClass("sidebar-active")) {
       $('body') .removeClass('no-scroll');
       $("#sidebar-button") .removeClass("button-active");
       $(".sidebar-container") .removeClass("sidebar-active");
       $(".page-wrapper") .removeClass("wrapper-active");
     }    
    else {
      $("#sidebar-button") .addClass("button-active");
      $(".sidebar-container") .addClass("sidebar-active");
      $(".page-wrapper") .addClass("wrapper-active");
      setTimeout(function() {  
      }, 300);
    }
});

$("#team-next") .click(function() {
  var curr_margin = parseInt($('#team-all').css('margin-left').replace("px",""));
  if (curr_margin == -6720) {
    return false;
  } 
  else {
    curr_margin -= 960;
    curr_margin = curr_margin.toString()+"px"; 
    $("#team-all").css('margin-left', curr_margin);
  }
});
  //Implement the "slide to right" when the user clicks on #carousel-prev here
 $("#team-prev") .click(function() {
  var curr_margin = parseInt($('#team-all').css('margin-left').replace("px",""));
  if (curr_margin == 0) {
    return false;
  } 
  else {
    curr_margin += 960;
    curr_margin = curr_margin.toString()+"px"; 
    $("#team-all").css('margin-left', curr_margin);
  }
});


$(".picture").css("opacity", 1.0);
$(".picture").hover(function() {
  	$(this).animate({opacity:0.6}, 500); },
  	function () {
  		$(this).animate({opacity:1.0}, 500)
});



$(".name1").hide();
$(".picture").hover(function() {
	$(".name1").toggle();
});



});