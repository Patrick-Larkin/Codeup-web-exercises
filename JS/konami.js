(function () {
	"use strict";
	$().ready(function () {
		$(".winAlert").hide();
		$(".loseAlert").hide();

		$(document).keyup(function(event){
			console.log(event.keyCode);
		});

		function konamiDecoder() {
			var userInput = ''
			var code = "3838404037393739666513"
			var winMusic = new Audio('../Media/8-bit.mp3');
			var loseMusic = new Audio('../Media/Doot.mp3');
			$(document).keydown(function () {
				userInput += ("" + event.keyCode);
				if (userInput === code) {
					winMusic.play();
					$(".winAlert").show();
				} else if (userInput.length > 22){
					loseMusic.play()
					$(".loseAlert").show();
				}
			});
		}
		konamiDecoder();
	});
})();