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
			var audio = new Audio('../IMG/8-bit.mp3');
			var audioLose = new Audio('audio/smb_gameover.wav')
			$(document).keydown(function () {
				userInput += ("" + event.keyCode);
				if (userInput === code) {
					audio.play();
					$(".winAlert").show();
				} else if (userInput.length > 22){
					audioLose.play()
					$(".loseAlert").show();
				}
			});
		}
		konamiDecoder();
	});
})();