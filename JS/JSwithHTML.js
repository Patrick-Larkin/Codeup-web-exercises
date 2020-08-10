"use strict";

console.log("Hello from JSwithHTML.js external file");
var name = "Patrick";
console.log("Welcome " + name + " to the website!");

var surprise = "Do I have your attention now?";
alert(surprise);

var question = "Do you like puppies?";
var answer = confirm(question);
console.log("answer = " + answer);

var question2 = "What is your sign?";
var answer2 = prompt(question2);
console.log(answer2);

var question3 = "What is your favorite number?";
var answer3 = prompt(question3);
console.log(answer3);

var question4 = "How many sibling do you have?";
var answer4 = prompt(question4);
console.log("answer = " + answer4);

var question5 = "Please don't answer?";
var answer5 = prompt(question5);
console.log(answer5);
//if ok is clicked w/o entering response, "" is returned
//if cancel is clicked null is returned

var question6 = "Dou you want to continue?";
var answer6 = confirm(question6);
console.log(answer6);