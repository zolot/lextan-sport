$(document).ready(function() {

	function wResize() {
			$("#main").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize()
	});
	
	
});