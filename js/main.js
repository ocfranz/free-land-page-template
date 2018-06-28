function showmenu(){
	$(".menu").toggleClass("menu-after");
	$("#mainNav").toggleClass("overlay-after");
	$(".job-name").toggleClass("job-name-after");
	$('body').toggleClass("noscroll");
}

$(document).ready(
	function(){
		$(".menu").click(function(){
			showmenu();
		});
		$("#wk-menu").click(function(){
			showmenu();
		});
		$("#ser-menu").click(function(){
			showmenu();
		});
	})
