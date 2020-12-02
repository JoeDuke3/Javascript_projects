// Write a function using +

function add() {
    var sum = 1 + 2;
    let addAnswer = "1 + 2 = " + sum;
    document.getElementById('Math').innerHTML = addAnswer;
}

// Write a function using -

function subtract() {
    var difference = 8 - 3;
    let subtractAnswer = "8 - 3 = " + difference;
    document.getElementById('Math').innerHTML = subtractAnswer;
}

// Write a function using *

function multiply() {
    var total = 2 * 3;
    let multiplyAnswer = "2 * 3 = " + total;
    document.getElementById('Math').innerHTML = multiplyAnswer;
}

// Write a function using %

function remainder() {
    var remaining = 27 % 7;
    let remainingAnswer = "When 27 is divided by 7 the remainder is " + remaining 
    document.getElementById('Math').innerHTML = remainingAnswer;
}

// Write a function using ++

function increment() {
    let someNumber = 8;
    someNumber++
    incrementAnswer = "8 incremented by one = " + someNumber;
    document.getElementById('Math').innerHTML = incrementAnswer;
}

// Write a function using --

function decrement() {
    let someNumber = 11;
    someNumber--;
    decrementAnswer = "11 decremented by one = " + someNumber;
    document.getElementById('Math').innerHTML = decrementAnswer;
}

// Write a function using Math.random()

function randomNumber() {
    document.getElementById('Math').innerHTML = Math.random() * 333;
}