// "use strict";
//
// /** TODO: Create an array of 4 people's names and store it in a variable called 'names'. */
// let family = ["Patrick", "Jeff", "Sean", "Eileen"];
//
//
// /** TODO: Create a log statement that will log the number of elements in the names array. */
// console.log(family.length);
//
//
// /** TODO: Create log statements that will print each of the names individually by accessing each element's index. */
// console.log(family[0]);
// console.log(family[1]);
// console.log(family[2]);
// console.log(family[3]);
//
//
// /** TODO: Write some code that uses a for loop to log every item in the names array.*/
// for (let i = 0; i < family.length; i++) {
// 	console.log(family[i]);
// }
//
//
// /** TODO: Refactor your above code to use a `forEach` loop */
// family.forEach(function (names) {
// 	console.log(names);
// })
//
// //anonymous function for repetition purposes
// let callback = function (names) {
// 	console.log(names);
// }
// family.forEach(callback);
//
//
// let pop = family.pop();
// console.log(pop);
//
//
// /** TODO: Create the following three functions, each will accept an array and return an an element from it
//    - first: returns the first item in the array
//    - second: returns the second item in the array
//    - last: returns the last item in the array
//  */
//
// let numbers = [1, 2, 3, 4, 5];
// console.log(returnFirstIndex(numbers));
// console.log(returnSecondIndex(numbers));
// console.log(returnLastIndex(numbers));
// lineQue(numbers);
//
//
// function returnFirstIndex() {
// 	return numbers[0];
// }
//
// function returnSecondIndex() {
// 	return numbers[1];
// }
//
// function returnLastIndex() {
// 	return numbers[numbers.length - 1];
// }
//
// function lineQue() {
// 	numbers.shift();
// 	console.log(numbers.push(7));
// }



//
// var star = ["Twinkle, twinkle, little star How I wonder what you are! Up above the world so high Like a diamond in the sky."];
// console.log(star);