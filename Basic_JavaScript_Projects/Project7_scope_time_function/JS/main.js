                    // 1ST ASSIGNMENT
                    // Write a global variable.

var g = 1;

                    // 1ST ASSIGNMENT
                    // Write a local variable.

function fun1 () {
    let l = 3;
    return l;
}

                    // 1ST ASSIGNMENT
                    // Intentionally write a function with an error in it 

function err_1() {
    var x = 3;
    return x;
}


function err_2() {
    var y = 5;
    var z = x * y;
    return z;
}

// and use console.log() method to debug it 
// within the console in Chrome Dev Tools.

console.log(err_1());
console.log(err_2());
console.log(z);

var fix_x = 3;
var fix_y = 5;

function fix_function() {
    var fix_z= fix_x + fix_y;
    return fix_z;
}

console.log(fix_function());
console.log(fix_z);


                    // 2ND ASSIGNMENT
                    // Write out a function with an if statement that utilizes the new Date().getHours() method
function alarmClock() {
    if (new Date().getHours() > 7) {
        document.getElementById('Alert').innerHTML = "WAKE UP!!!";
    }
}
                    // Write out a document.getElementById() method as covered in the previous course step 
                    // and reference the id attribute in the HTML file.



                    // 3RD ASSIGNMENT
                    // Write your own if statement.

                    // 4TH ASSIGNMENT
                    // Write a function that includes an if statement and an else statement.
                    // Write the relevant document.getElementById() methods as covered in the previous course step.

                    // 5TH ASSIGNMENT
                    // Write out all code from the previous course step and successfully execute it in the browser. 
                    // Remember to add in the <script> element and reference your JavaScript file.

                    // ASSIGNMENT SUBMISSION
                    // Assign a local variable and a global variable
                    // Write a function that includes an if statement
                    // Intentionally write a function with an error in it 
                    // and use the console.log() method to debug it within the console in the Chrome Dev Tools
                    // Write the Time_function() outlined in previous slides
                    // Add comments throughout your JavaScript explaining your code