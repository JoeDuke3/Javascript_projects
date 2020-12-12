// Minimum project requirements:
// Write a function that utilizes a while loop
// 1ST ASSIGNMENT
// Create a while loop.
                                                            // 
function Call_Loop() {                                      // Declare a function
    var n = "";                                             // Assign a variable
    var c = 0;                                              // Assign a variable
    while (c < 12) {                                        // Create a while loop
        n += c * 3 + "<br>";                                // Reassign a variable
        c++;                                                // Iterate a variable
    }
    document.getElementById("Loop")                         // Reference an element by using it's ID
    .innerHTML = n;                                         // Give value to referenced element.
}

// 1ST CHALLENGE
// Use the JavaScript string length property.
function getLength() {                                      // Declare a function
    document.getElementById("ID1")                          // Reference an element by using it's ID
    .innerHTML = "One is  " + "wn".length;                  // Give value to referenced element.
    document.getElementById("ID2")                          // Reference an element by using it's ID
    .innerHTML = "Two is " + "toow".length;                 // Give value to referenced element.
    document.getElementById("ID3")                          // // Reference an element by using it's ID
    .innerHTML = "Three is " + "threey".length;             // Give value to referenced element.
}

// Minimum project requirements:
// Write a function that utilizes a for loop
// 2ND ASSIGNMENT
// Write a for loop

var Drums = ["Kick", "Snare", "Rack-Tom",                   // Assign an array
"Floor-Tom", "Timpani", "Kettle", "Steel", 
"Bongo", "Oil", "Brake", "Ear"];
var Kit = "";                                               // Assign a variable
var D;                                                      // Assign a variable

function drumList() {                                       // Declare a function
    for(D = 0; D < Drums.length; D++) {                     // Create a for loop
        Kit += Drums[D] + "<br>";                           // Reassign a variable
    }
    document.getElementById("DrumKit")                      // Reference an element by using it's ID
    .innerHTML = Kit;                                       // Give value to referenced element.
}

// Minimum project requirements:
// Write a function that utilizes an array
// 3RD ASSIGNMENT
// Write an array within a function to be called.

// Utilize a function with the 
// document.getElementById().innerHTML method 
// to display a value (or values) of your array.

function powersOf3() {                                      // Declare a function
    var exponent = [];                                      // Assign an array
    exponent[0] = 1;                                        // Add an element to an array
    exponent[1] = 3;                                        // Add an element to an array
    exponent[2] = 9;                                        // Add an element to an array
    exponent[3] = 27;                                       // Add an element to an array
    document.getElementById("3Cubed")                       // Reference an element by using it's ID
    .innerHTML = "3 to power of 3 is " + exponent[3] +      // Give value to referenced element.
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


// Minimum project requirements:
// Create an object using the “let” keyword
// 5TH ASSIGNMENT
// Utilize the let keyword
let F = 3;                                                  // Assign an variable
let B = 5;                                                  // Assign an variable

function letItBe() {                                        // Declare a function
    let F = 4;                                              // Assign an variable
    let B = 6;                                              // Assign an variable
    return F * B;                                           // Use a return statement
}

document.getElementById("block")                            // Reference an element by using it's ID
.innerHTML = letItBe();                                     // Give value to referenced element.

document.getElementById("global")                           // Reference an element by using it's ID
.innerHTML = F * B;                                         // Give value to referenced element.




// 2ND CHALLENGE
// Use the JavaScript return statement.

function makeGross() {                                      // Declare a function
    let G = 12 ** 2;                                        // Assign a variable
    return G;                                               // Use a return statement
}

function displayGross() {                                   // Declare a function
    document.getElementById("gross")                        // Reference an element by using it's ID
    .innerHTML = (makeGross());                             // Give value to referenced element.
}

// 6TH ASSIGNMENT

// Create an object using the let keyword. 
// Ensure your object includes properties and a method.

let Motorcycle = {                                          // Create an object
    make: "Honda ",                                         // Add a value to an object
    model: "CR500R ",                                       // Add a value to an object
    year: "1995 ",                                          // Add a value to an object
    color: "red/white ",                                    // Add a value to an object
    description : function() {                              // Declare a function
        return "The Motorcycle is a " + this.color + this.year + this.make + this.model;
    }                                                       // Use a return statement (previous line)
};
document.getElementById("Motorcycle_Object")                // Reference an element by using it's ID
.innerHTML = Motorcycle.description();                      // Give value to referenced element.

// 3RD CHALLENGE

// Define and learn how to utilize the break statement.
// THE BREAK STATEMENT EXITS A SWITCH STATEMENT OR A LOOP.

// Write a loop that includes at least one break statement.

var j = 0;                                                  // Assign a variable

function takeFive() {                                       // Declare a function
        while (j < 10) {                                    // Create a while loop
        if (j === 5) {                                      // Use an if statement
            break;                                          // Use a break statement
        }
        j = j + 1;                                          // Reassign a variable
    }
    document.getElementById("take")                         // Reference an element by using it's ID
    .innerHTML = j;                                         // Give value to referenced element.
}


// Define and learn how to utilize the continue statement.
// THE CONTINUE STATEMENT BREAKS ONE ITERATION IN THE LOOP
// IF A SPECIFIED CONDITION OCCURS, AND CONTINUES
// WITH THE NEXT ITERATION IN THE LOOP.

// Write a loop that includes at least one continue statement.

let l = '';                                                 // Assign a variable

function leaveOne() {                                       // Declare a function
    for (let k = 0; k < 10; k++) {                          // Create a for loop
        if (k === 1) {                                      // Use an if statement
            continue;                                       // Use a return statement
        }
        l = l + k;                                          // Reassign a variable
    }
    document.getElementById("leave")                        // Reference an element by using it's ID
    .innerHTML = l;                                         // Give value to referenced element.
}