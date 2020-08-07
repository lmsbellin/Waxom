let menu = $(".menu");
$(window).resize(function () {
	$(".menu-toggle").removeClass("active");
	if ($(window).innerWidth() > 786) {
		menu.show();
		return false;
	} else {
		menu.hide();

	}
});

$(".menu-toggle").click(function () {


	$(this).toggleClass("active");
	menu.slideToggle();

})






$(".open-submenu").click(function () {
	$(this).toggleClass("active");
	$(this).next("ul").slideToggle();
	$(this).children(".arrow").toggleClass("down up");
});



// Scrolling Effect menu  


$(window).scroll(function () {
	if ($(window).scrollTop() > 50) {
		$('.header1').fadeIn();
		return false;
	} else {
		$('.header1').fadeOut(0);
		return false;
	}
});

