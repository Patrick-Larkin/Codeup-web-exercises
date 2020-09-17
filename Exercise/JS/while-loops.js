powTwo();

function powTwo() {
  var num = 2;
  while(num <= 65536) {
    console.log(num);
    num*= 2;
  }
}


sellCones();
function sellCones() {
  var totalCones = Math.floor(Math.random() * 50) + 50;
  do {
    var purchase = Math.floor(Math.random() * 5) + 1;
    if (purchase <= totalCones)  {
      console.log(purchase + " Cones Sold") ;
      totalCones -= purchase;
    } else {
      console.log("Sorry I only have " + totalCones + " cones left");
    }
  } while (totalCones > 0)
  console.log("Yay I sold out of cones");
}






//
// var work = "I can't believe I have to go to work on a Saturday";
// var number = 696969;
// var bool = true;
// var typeArray = [work, number , bool];
// console.log(typeArray[2]);
// console.log(typeof typeArray[0]);
//
// Any value you can put in a variable you can put in an array.
//
//
// var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// // console.log(daysOfTheWeek[4]);
//
//
// var shapes = ['square', 'rectangle', 'circle', 'triangle'];
// //
// // // loop through the array and log the values
// // for (var i = 0; i < daysOfTheWeek.length; i++) {
// //   console.log('Today is: ' + daysOfTheWeek[i]);
// // }
//
// var callback = function (item,index, array) {
//   console.log((index+1) + ": Today is " + item);
// }
//
// daysOfTheWeek.forEach(callback)
// shapes.forEach(callback)