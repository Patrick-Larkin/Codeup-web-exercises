'use strict';
function question() {
	let skip = prompt("Enter a odd number between 1 and 50");
}

question(skip);
if(skip !== 'number') {
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
