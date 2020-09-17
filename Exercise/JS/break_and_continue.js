'use strict';

function question() {
	return prompt("Enter a odd number between 1 and 50");
}

question();
if(number !== "number") {
	question();
} else {
	for (var i = 1; i < 50; i++) {
		if (i % 2 !== 1)  {
			continue;
		} else if(number == i) {
			console.log("Yikes! Skipping number: " + i)
			continue;
		}
		console.log('Here is a lovely odd number: ' + i);
	}
}
