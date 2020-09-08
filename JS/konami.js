(function () {
	"use strict";
	$(document).ready(function () {
		$(".winAlert").hide();
		$(".loseAlert").hide();


		$(document).keyup(function(event){
			console.log(event.keyCode);
		});

		function konamiDecoder() {
			var userInput = ''
			var konamiCode = "3838404037393739666513"
			var winMusic = new Audio('../Media/8-bit.mp3');
			var loseMusic = new Audio('../Media/Doot.mp3');
			$(document).keydown(function () {
				userInput += ("" + event.keyCode);
				if (userInput === konamiCode) {
					$(".default").hide();
					winMusic.play();
					$(".winAlert").show();
				} else if (userInput !== konamiCode){
					// $(".default").hide();
					// loseMusic.play()
					// $(".loseAlert").show();
					$(".default").hide();
					winMusic.play();
					$(".winAlert").show();
				}
			});
		}
		konamiDecoder();
	});
})();



//Todo: Start Build interactive remote
//Todo: Start Real code comparison loop
//Todo: Catch up