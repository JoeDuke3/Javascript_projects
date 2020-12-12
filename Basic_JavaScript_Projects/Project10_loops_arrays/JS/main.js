// Minimum project requirements:
// 1ST ASSIGNMENT
// Create a while loop.
// THIS FUNCTION DISPLAYS A NEW LINE THAT ADDS
// 3 TO THE PREVIOUS LINE
function Call_Loop() {
    var n = "";
    var c = 0;
    while (c < 12) {
        n += c * 3 + "<br>";
        c++;
    }
    document.getElementById("Loop").innerHTML = n;
}

// 1ST CHALLENGE
// Use the JavaScript string length property.
function getLength() {
    document.getElementById("ID1")
    .innerHTML = "One is  " + "wn".length;
    document.getElementById("ID2")
    .innerHTML = "Two is " + "toow".length;
    document.getElementById("ID3")
    .innerHTML = "Three is " + "threey".length;
}

// 2ND ASSIGNMENT
// Write a for loop

var Drums = ["Kick", "Snare", "Rack-Tom", "Floor-Tom", "Timpani", "Kettle", "Steel", "Bongo", "Oil", "Brake", "Ear"];
var Kit = "";
var D;

function drumList() {
    for(D = 0; D < Drums.length; D++) {
        Kit += Drums[D] + "<br>";
    }
    document.getElementById("DrumKit").innerHTML = Kit;
}

// 3RD ASSIGNMENT
// Write an array within a function to be called.

// Utilize a function with the 
// document.getElementById().innerHTML method 
// to display a value (or values) of your array.

function powersOf3() {
    var exponent = [];
    exponent[0] = 1;
    exponent[1] = 3;
    exponent[2] = 9;
    exponent[3] = 27;
    document.getElementById("3Cubed")
    .innerHTML = "3 to power of 3 is " + exponent[3] + 
    ".";
}

// 4TH ASSIGNMENT
// Create an object through utilization of the const keyword.
// Include Properties with values.
// Create 'Constant_Function; to be called from HTML that will
// display a string using 'getId"Constant" that includes
// a property value(s) of the object.

// const sideArm = {brand="Remington", type="1911", color="black", status="not loaded"};
// function backUpPlan() {
//     document.getElementById("pistol").innerHTML = "My Plan B is my " + sideArm.color + sideArm.brand + sideArm.type + ",don't worry, it's " + sideArm.status + ".";
// }

// function update() {
//     sideArm.capacity = "9 rounds";
//     sideArm.status = "loaded";
//     document.getElementById("pistol").innerHTML = "Now it is " + sideArm.status + "with" + sideArm.capacity + "...";
// }


// Change a property's value

// Add a property with a value

// Display a string that includes 
// the added property value 
// and the changed property value using 
// document.getElementById("Constant").innerHTML method.




// 5TH ASSIGNMENT
// Utilize the let keyword
let F = 3;
let B = 5;

function letItBe() {
    let F = 4;
    let B = 6;
    return F * B;
}

document.getElementById("block")
.innerHTML = letItBe();

document.getElementById("global")
.innerHTML = F * B;




// 2ND CHALLENGE
// Use the JavaScript return statement.

function makeGross() {
    let G = 12 ** 2;
    return G;
}

function displayGross() {
    document.getElementById("gross")
    .innerHTML = (makeGross());
}

// 6TH ASSIGNMENT

// Create an object using the let keyword. 
// Ensure your object includes properties and a method.

let Motorcycle = {
    make: "Honda ",
    model: "CR500R ",
    year: "1995 ",
    color: "red/white ",
    description : function() {
        return "The Motorcycle is a " + this.color + this.year + this.make + this.model;
    }
};
document.getElementById("Motorcycle_Object").innerHTML = Motorcycle.description();

// 3RD CHALLENGE

// Define and learn how to utilize the break statement.
// THE BREAK STATEMENT EXITS A SWITCH STATEMENT OR A LOOP.

// Write a loop that includes at least one break statement.

var j = 0;

function takeFive() {
        while (j < 10) {
        if (j === 5) {
            break;
        }
        j = j + 1;
    }
    document.getElementById("take").innerHTML = j;
}


// Define and learn how to utilize the continue statement.
// THE CONTINUE STATEMENT BREAKS ONE ITERATION IN THE LOOP
// IF A SPECIFIED CONDITION OCCURS, AND CONTINUES
// WITH THE NEXT ITERATION IN THE LOOP.

// Write a loop that includes at least one continue statement.

let l = '';

function leaveOne() {
    for (let k = 0; k < 10; k++) {
        if (k === 1) {
            continue;
        }
        l = l + k;
    }
    document.getElementById("leave").innerHTML = l;
}

// ASSIGNMMENT SUBMISSION
// Minimum project requirements:
// Write a function that utilizes a while loop

// Write a function that utilizes a for loop

// Write a function that utilizes an array

// Create an object using the “let” keyword

// Add comments throughout your JavaScript explaining your code

// Submit Page 205

