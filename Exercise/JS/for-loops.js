
// returnMultiplicationTable function
function returnMultiplicationTable(num) {
    timesTable = '';
    for (let i = 1; i < 11; i++) {
        let product = num * i;
        timesTable += num + " x " + i + " = " + product
        if (i !== 10) timesTable += "\n"
    }
    return timesTable
}

// returnEvenOddMessage function
function returnEvenOddMessage(num) {
    if (!Number.isInteger(num)) return num + " is invalid"
    if (num%2 === 0) return num + " is even"
    else return num + " is odd"
}

// returnTenEvenOddMessages function
function returnTenEvenOddMessages() {
    let output = '';
    for (let i = 0; i < 10; i++) {
        output += returnEvenOddMessage(getRandomInt(20, 200))
        if (i < 9) output += '\n'
    }
    return output
}

// returnNumberSail function
function returnNumberSail() {
    let output = '';
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j <= i; j++) {
            output += i
        }
        if (i < 9) output += '\n'
    }
    return output
}

// returnCountDownFrom100InFives function
function returnCountDownFrom100InFives() {
    let output = '';
    for (let i = 100; i > 0; i -= 5) {
        output += i
        if (i !== 5) output += '\n'
    }
    return output
}