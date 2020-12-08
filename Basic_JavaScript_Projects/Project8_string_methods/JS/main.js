            // REQUIRED: concat()
                    // 1ST ASSIGNMENT
                    // utilize the concat() method to 
                    // connect two or more strings.
function startProject() {                                   // Declare a function
    var strA = "This is ";                                  // Assign a local variable
    var strB = "the start of ";                             // Assign a local variable
    var strC = "Project 8!";                                // Assign a local variable
    var wholeSentence = strA.concat(strB, strC);            // Assign a local variable value by concatenating multiple strings
    document.getElementById("concatenate")                  // Refer to an HTML element using it's ID
    .innerHTML = wholeSentence;                             // Assign value to an HTML element
}

        // REQUIRED: slice()
                    // 2ND ASSIGNMENT
                    // write a slice() method 
                    // that displays a section of a string.
var Prophecy =                                              // Assign a global variable
"Our nations grew weak and our cities fell to slums while evil stood strong.";
function inTheBeginning() {                                 // Declare a function
    var Cause = Prophecy.slice(57, 61);                     // Assign a local variable
    document.getElementById("Fear")                         // Refer to an HTML element using it's ID
    .innerHTML = Cause;                                     // Assign a value to an HTML elememt
}

                    // 1ST CHALLENGE
                    // Successfully write and execute 
                    // the toUpperCase() method.
                    // Successfully write and execute 
                    // the search() method.
function capsIt() {                                         // Declare a function
    var loud = Prophecy.toUpperCase();                      // Assign a local variable
    document.getElementById("Challenge1a")                  // Refer to an HTML element using it's ID
    .innerHTML = loud;                                      // Assign a value to an HTML elememt
}

function findIt() {                                         // Declare a function
    var found = Prophecy.search("strong");                  // Assign a local variable
    document.getElementById("Challenge1b")                  // Refer to an HTML element using it's ID
    .innerHTML = found;                                     // Assign a value to an HTML elememt
}

            // REQUIRED: toString()
                    // 3RD ASSIGNMENT
                    // utilize the toString() method 
                    // to return a number as a string.
function stringTheBeast() {                                 // Declare a function
    var beast = 666;                                        // Assign a local variable
    document.getElementById("strungBeast")                  // Refer to an HTML element using it's ID
    .innerHTML = beast.toString();                          // Assign a value to an HTML elememt
}

            // REQUIRED: toPrecision()
                    // 4TH ASSIGNMENT
                    // Utilize the toPrecision() method to return 
                    // a string as a number of a specified length.

function shortenGross () {                                  // Declare a function
    var gross = 144.144144144144144;                        // Assign a local variable
    document.getElementById("shortGross")                   // Refer to an HTML element using it's ID
    .innerHTML = gross.toPrecision(9);                      // Assign a value to an HTML elememt
}

                    // 2ND CHALLENGE
                    // Successfully write and execute 
                    // the toFixed() method.

function fixPi() {                                          // Declare a function
    var p = 3.14159;                                        // Assign a local variable
    document.getElementById("fixedPi")                      // Refer to an HTML element using it's ID
    .innerHTML = p.toFixed(2);                              // Assign a value to an HTML elememt
}

                    // 2ND CHALLENGE
                    // Successfully write and execute 
                    // the valueOf() method.

function workForIt() {                                      // Declare a function
    var d = "A Dollar";                                     // Assign a local variable
    document.getElementById("valued")                       // Refer to an HTML element using it's ID
    .innerHTML = d.valueOf();                               // Assign a value to an HTML elememt
}