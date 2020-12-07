            // SUBMISSION REQUIREMENT
            // Add comments throughout your JavaScript explaining your code

                    // 1ST ASSIGNMENT
                    // Write a global variable.

            // SUBMISSION REQUIREMENT
            // Assign a local variable and a global variable

var g = 1;                                                  // Assign a global variable

                    // 1ST ASSIGNMENT
                    // Write a local variable.

function fun1 () {                                          // Declare and name a function
    let l = 3;                                              // Assign a local variable
    return l;                                               // State a return value
}                                                           // End function

                    // 1ST ASSIGNMENT
                    // Intentionally write a function with an error in it 
            // SUBMISSION REQUIREMENT
            // Intentionally write a function with an error in it 
            // and use the console.log() method to debug it 
            // within the console in the Chrome Dev Tools

function err_1() {                                          // Declare and name a function
    var x = 3;                                              // Assign a local variable
    return x;                                               // State a return value
}                                                           // End a function

function err_2() {                                          // Declare and name a function
    var y = 5;                                              // Assign a local variable
    var z = x * y;                                          // Assign a local variable
    return z;                                               // State a return value
}                                                           // End a function

                // and use console.log() method to debug it 
                // within the console in Chrome Dev Tools.

console.log(err_1());                                       // log a function to the console
console.log(err_2());                                       // log a function to the console
console.log(z);                                             // log a variable to the console

var fix_x = 3;                                              // log a variable to the console
var fix_y = 5;                                              // log a variable to the console

function fix_function() {                                   // Declare and name a function
    var fix_z= fix_x + fix_y;                               // Assign a local variable
    return fix_z;                                           // State a return value
}                                                           // End a function

console.log(fix_function());                                // log a function to the console
console.log(fix_z);                                         // log a variable to the console

                    // 2ND ASSIGNMENT
                    // Write out a function with an if statement 
                    // that utilizes the new Date().getHours() method.

            // SUBMISSION REQUIREMENT
            // Write a function that includes an if statement

function alarmClock() {                                     // Declare and name a function
    if (new Date().getHours() > 7) {                        // Begin and set arguments to an if statement

                    // Write out a document.getElementById() method 
                    // as covered in the previous course step 
                    // and reference the id attribute in the HTML file.

        document.getElementById('Alert')                    // Refer to an HTML element using it's ID
        .innerHTML = "WAKE UP!!!";                          // Assign text to an HTML element
    }                                                       // End an if statement
}                                                           // End a function

                    // 3RD ASSIGNMENT
                    // Write your own if statement.

function Duh() {                                            // Declare and name a function
    var larger = 5;                                         // Assign a local variable
    var smaller =3;                                         // Assign a local variable
    if (larger > smaller) {                                 // Begin and set arguments to an if statement
        document.getElementById('isIt')                     // Refer to an HTML element using it's ID
        .innerHTML = "Of course it is!"                     // Assign text to an HTML element
    }                                                       // End an if statement
}                                                           // End a function

                    // 4TH ASSIGNMENT
                    // Write a function that includes 
                    // an if statement and an else statement.

function negotiateOffer() {                                 // Declare and name a function
    var offer = document.getElementById('offer').value;     // Assign a local variable to a specified HTML element's value
    if (offer >= 100) {                                     // Begin and set arguments to an if statement

                    // Write the relevant document.getElementById() methods 
                    // as covered in the previous course step.

        document.getElementById('answer')                   // Refer to an HTML element using it's ID
        .innerHTML = "You're on!";                          // Assign text to an HTML element
                }                                           // End an if statement
    else {                                                  // Begin an else statement

                    // Write the relevant document.getElementById() methods 
                    // as covered in the previous course step.

        document.getElementById('answer')                   // Refer to an HTML element using it's ID
        .innerHTML = "Get outta here..."                    // Assign text to an HTML element
    }                                                       // End an else statement
}                                                           // End a function

                    // 5TH ASSIGNMENT
                    // Write out all code from the previous course step 
                    // and successfully execute it in the browser. 
            // SUBMISSION REQUIREMENT
            // Write the Time_function() outlined in previous slides

function Time_function() {                                  // Declare and name a function
    var Time = new Date().getHours();                       // Get the time from the system and assign it to a local variable
    var Reply;                                              // Name a local variable
    if (Time < 12 == Time > 0) {                            // Begin and set arguments to an if statement
        Reply = "It is morning time!";                      // Assign text to the value of a local variable
    }                                                       // End an if statement
    else if (Time > 12 == Time < 18) {                      // Begin and set arguments to an else if statement
        Reply = "It is the afternoon";                      // Assign text to the value of a local variable
    }                                                       // End an else if statement
    else {                                                  // Begin an else statement
        Reply = "It is evening time";                       // Assign text to the value of a local variable
    }                                                       // End an else statement
    document.getElementById("Time_of_day")                  // Refer to an HTML element using it's ID
    .innerHTML = Reply;                                     // Assign the value of an HTML element with a local variable
}                                                           // End a function