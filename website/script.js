$(document).ready(function(){
	$("#menuButton").click(function(){
		$("#menuButton").hide();
		$("#closeButton").show("fast");
		$("#navS").fadeTo("fast", 1);
	});
	$("#closeButton").click(function(){
		$(this).hide("fast");
		$("#menuButton").show();
		$("#navS").fadeTo("fast", 0);
		$("#navS").hide("fast");
	});
	$(".button").click(function(){
		$("#closeButton").hide("fast");
		$("#menuButton").show();
		$("#navS").fadeTo("fast", 0);
		$("#navS").hide("fast");
	});
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});