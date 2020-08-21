"use strict";

/** TODO: Create a function called 'sayHello' that takes a parameter 'name'. When called, the function should return a message that says hello to the passed in name. */

console.log(sayHello("codeup"));

function sayHello(name) {
	return "Hello, " + name;
}

/** TODO: Call the function 'sayHello' and pass your name as a string literal argument. store the result of the function call in a variable named 'helloMessage'. */
var helloMessage = sayHello("Patrick");
console.log(helloMessage);




/** TODO: Store your name as a string in a variable named 'myName', and pass that variable to the 'sayHello' function. You should see the same output in the console. */
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO: Create a function called 'isTwo' that takes a number as a parameter. The function should return a boolean value based on whether or not the passed number is the number 2.
 */

console.log(isTwo(1) )// returns false
console.log(isTwo(2)) // returns true
console.log(isTwo(3)) // returns false
console.log(isTwo(random));

function isTwo(input) {
 	if (input === 2) {
 		return true;
  } else {
 		return false;
  }
}

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */