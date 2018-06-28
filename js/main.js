/*function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
*/

$(document).ready(
	function(){
		$(".menu").click(function(){
			$(".menu").toggleClass("menu-after");
			$("#mainNav").toggleClass("overlay-after");
			$(".job-name").toggleClass("job-name-after");
			$('body').toggleClass("noscroll");


		});
	})
