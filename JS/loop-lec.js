'use strict'
var i = 0;
while(i <= 10) {
    console.log("I loop iteration #" + i);
    i++;
}

var o = 10
do {
    console.log("O loop iteration #" + o);
    o++;
} while (o < 10)

// for (initialization; condition; increment)

for (var p = 0; p < 10; p++) {
    console.log("P loop iteration #" + p);
}

var countDown = 25;
do {
    console.log("Count Down: " + countDown);
    countDown--;
} while (countDown >= 0)


var oddCount = 3;
do {
    console.log("Odd Count: " + oddCount);
    oddCount+=3;
} while (oddCount <= 30);


// let numberToStopAt = 4;
// let n = 1;
// while (n < 10) {
//     console.log('Loop counter is: ' + n);
//
//     if (n === numberToStopAt) {
//         console.log('We have reached the stopping point: break!');
//         break;
//     }
// }

for (var i = 1; i < 100; i++) {
    if (i%3 !== 0) {
        // number isn't even
        // odd numbers aren't as cool
        // skip the rest of the loop and continue with the next iteration
        continue;
    }
    console.log('Here is a lovely number: ' + i);
}

// for (var hr = 0; hr < 24; hr++) {
//     for (var min = 0; min < 60; min++) {
//         for (var sec = 0; sec < 60; sec++) {
//             console.log(hr + ":" + min + ":" + sec);
//         }
//     }
// }