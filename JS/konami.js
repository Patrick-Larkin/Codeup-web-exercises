	"use strict";
	$(document).ready(function () {
		$(".winAlert").hide();
		$(".loseAlert").hide();


		let playing = false;
		$(document).click(function () {
			playBackgroundMusic();
		})

		function playBackgroundMusic() {
			if (!playing) {
				let audio = new Audio()
				audio.src = 'audio/konamiBackground.wav'
				audio.loop = true
				audio.play()
				playing = true;
			}
		}

		$(document).keyup(function (event) {
			console.log(event.keyCode);
		});


		let code = [];
		$(document).keyup(function (event) {
			let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
			code.push(event.keyCode)
			console.log(code)
			for (let i = 0; i <= code.length - 1; i++)
				if (code[i] === konamiCode[i]) {
					if (code[i] === konamiCode[10]) {
						if (code === konamiCode) {
							$(".default").hide();
							let winMusic = new Audio('../../Media/Audio/Doom/8-bit.mp3');
							winMusic.play();
							$(".winAlert").show();
						} else {
							$(".default").hide();
							let loseMusic = new Audio('../../Media/Audio/Doom/Doot.mp3');
							loseMusic.play()
							$(".loseAlert").show();
						}
					}
				}
		})
	})();
