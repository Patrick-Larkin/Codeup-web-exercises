"use strict";

/* ########################################################################## *//* ########################################################################## */

function analyzeColor(color) {
    if(color === "blue") {
        return "blue is the color of the sky";
    } else if (color === "red"){
        return "Strawberries are red";
    } else if (color === "cyan") {
        return "I don't know anything about cyan";
    } else {
    return "I dont know anything about that color";
    }
}
var colorAnswer = prompt("Whats your favorite color?")
console.log(analyzeColor(colorAnswer));

/* ########################################################################## *//* ########################################################################## */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
console.log(analyzeColorTwo(randomColor));

function analyzeColorTwo(randomColor) {
    switch (randomColor) {
        case "blue":
            return "blue is the color of the sky";
        case "red":
            return "Strawberries are red";
        case "cyan":
            return "I'm colorblind and don't know what cyan looks like";
        case "orange":
            return "Orange is the color of safety cones";
        case "yellow":
            return "Bee's who like jazz are yellow";
        case "green":
            return "Green is the color of money"
        case "indigo":
            return "Like Indigogo inc."
        case "violet":
            return "Violet from the Incredibles";
    }
}

/* ########################################################################## *//* ########################################################################## */

var luckyNumber = Math.floor(Math.random() * 5);
var totalAmount = prompt("How much is the total?");

calculateTotal(luckyNumber, totalAmount);
function calculateTotal(luckNumber, totalAmount) {
    switch (luckNumber) {
        case 0:
            alert("Wah Wah, unlucky #0 no discount this time. Total is: $" + totalAmount);
            break;
        case 1:
            var lucky1 = totalAmount - (totalAmount * .10);
            alert("Lucky #1: After the discount your total is $" + lucky1);
            break;
        case 2:
            var lucky2 = totalAmount - (totalAmount * .25);
            alert("Lucky #2: After the discount your total is $" + lucky2);
            break;
        case 3:
            var lucky3 = totalAmount - (totalAmount * .35);
            alert("Lucky #3: After the discount your total is $" + lucky3);
            break;
        case 4:
            var lucky4 = totalAmount - (totalAmount * .50);
            alert("Lucky #4: After the discount your total is $" + lucky4);
            break;
        case 5:
            alert("Lucky #5: Its your lucky day, you get it all for free");
            break;
    }
}
/* ########################################################################## *//* ########################################################################## */
var numberAnswer = confirm("Would you like to enter a number?")
if (numberAnswer === true) {
    getNumber();
} else {
    alert("No? ok goodbye...");
}

function getNumber() {
    var userNumber = prompt("Enter your favorite number");
    userNumber = parseFloat(userNumber);
    if (typeof userNumber === typeof 'number') {
        var oddOrEven = (userNumber % 2 == 0) ? alert("The number is even!") : alert("The number is odd!");
        alert("The random number: " + userNumber + " + 100 is: " + (userNumber + 100));
        var posOrNeg = (userNumber < 0) ? alert("The number is negative!") : alert("The number is positive!");
    } else {
        alert("This is not a number, enter a valid number this time");
        getNumber();
    }
}