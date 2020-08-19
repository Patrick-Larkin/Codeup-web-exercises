function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function returnEvenOddMessage(input) {
  if(!Number.isInteger(input)) return input + " is invalid";
  if(input%2 === 0) return input + " is even";
  else return input + " is odd";
}

console.log(returnTenEvenOddMessage(getRandomInt(1, 100)));

function returnTenEvenOddMessage() {
  let message = '';
  for(let i = 0; i < 10; i++) {
    message += returnEvenOddMessage(getRandomInt(20, 200));
    if(i < 9) message += '\n';
  }
  return message;
}

var totalCones = 50;
iceCreamStand(totalCones);
function iceCreamStand(totalCones) {
  do {
    var purchase = getRandomInt(1, 5);
    var conesLeft = totalCones -= purchase;
    if (purchase < conesLeft)  {
      console.log(purchase + " Cones Sold")
    } else if (conesLeft === 0)  {
      console.log("Yay I sold out of cones");
    } else  {
      console.log("Sorry I only have " + conesLeft + " cones left");
    }
  } while (conesLeft > 0)
}