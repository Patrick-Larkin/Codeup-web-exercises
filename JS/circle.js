(function() {
	"use strict";

	// create a circle object
	let circle = {
		radius: 3,

		getArea: function (radius) {
			// TODO: complete this method
			return Math.PI * (Math.pow(this.radius, 2));
		},

		logInfo: function (doRounding, getArea) {
			// TODO: complete this method.
			if (doRounding) {
				console.log("Area of a circle with radius: " + Math.round(this.radius) + ", is: " + Math.round(this.getArea()));
			} else {
				// If doRounding is true, round the result to the nearest integer.
				// Otherwise, output the complete value
				console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
			}
		}
	};


	// log info about the circle
	console.log("Raw circle information");
	circle.logInfo(false);
	console.log("Circle information rounded to the nearest whole number");
	circle.logInfo(true);

	console.log("===\t// TODO: Change the radius of the circle to 5.====================================================");

	circle.radius = 5;
	// log info about the circle
	console.log("Raw circle information");
	circle.logInfo(false);
	console.log("Circle information rounded to the nearest whole number");
	circle.logInfo(true);
	console.log("===\t// TODO: Change the radius of the circle to 5.====================================================");

	circle.radius = 7.554;
	// log info about the circle
	console.log("Raw circle information");
	circle.logInfo(false);
	console.log("Circle information rounded to the nearest whole number");
	circle.logInfo(true);
	console.log("===\t// TODO: Change the radius of the circle to 5.====================================================");

	circle.radius = 9;
	// log info about the circle
	console.log("Raw circle information");
	circle.logInfo(false);
	console.log("Circle information rounded to the nearest whole number");
	circle.logInfo(true);
	console.log("===\t// TODO: Change the radius of the circle to 5.====================================================");

	circle.radius = 12.8;
	// log info about the circle
	console.log("Raw circle information");
	circle.logInfo(false);
	console.log("Circle information rounded to the nearest whole number");
	circle.logInfo(true);
})();