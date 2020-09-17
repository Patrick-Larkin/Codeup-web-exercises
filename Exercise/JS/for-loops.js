showMultiplicationTable(7);

function showMultiplicationTable(input) {
    for(var i = 0; i <= 10; i++) {
        total = input * i;
        console.log(input + " x " + (i) + " = " + (total));
    }
}

evenOrOdd();

function evenOrOdd() {
    for(var i = 0; i <= 10; i++) {
        var random = Math.floor(Math.random() * 200) + 20;
        if (random%2 === 0) {
            console.log(random + " is Even");
        } else {
            console.log(random + " is Odd");
        }
    }
}

console.log(repeat());

function repeat() {
    var output = '';
    for(var i = 1; i < 10; i++) {
        for(var r = 1; r <= i; r++) {
            output += i;
        }
        if (i < 9) {
            output += "\n";
        }
    } return output
}

console.log(countDown());

function countDown() {
    var output = "";
    for(var i = 100; i > 0; i-=5) {
        output += i;
        if (i !== 5) {
            output += "\n"
        }
    } return output
}
