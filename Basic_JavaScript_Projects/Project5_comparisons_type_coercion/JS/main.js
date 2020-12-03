// ===~========================================================================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//     EXERCISES REQUIRED BY PROJECT ON PAGE 116 MAKES UP THE FIRST BLOCK
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//                  ~~~document.write EXERCISE~~~

// Write the “document.write()” method and “type of” operator (number)
// Small fontsize at the end of the document
document.write(typeof 3.33);


//                  ~~~document.getElementById EXERCISES~~~

// Write an expression combining a string and a number
// as well as utilize type coercion 
// (displays number 333, large fontsize)
document.getElementById('coercion').innerHTML = "3" + 33;


//                  Blue fontcolor

// Utilize == to return “true”
document.getElementById('isItTrue').innerHTML = "False" == "False";

// Utilize == to return “false”
document.getElementById('isItFalse').innerHTML = "True" == "true";


//                  Cyan fontcolor

// Utilize === to return true by ensuring to match the data type and value.
document.getElementById('tripleEquals3').innerHTML = 3 === 3;

// Utilize === to return false by writing a different data type and different value.
document.getElementById('tripleEquals33').innerHTML = "three" === 33;
    
// Utilize === to return false by writing a different data type but the same value for both.
document.getElementById('tripleEquals333').innerHTML = "3" === 3;
    
// Utilize === to return false by writing the same data type but a different value for both. 
document.getElementById('tripleEquals3333').innerHTML = 3 === 33;


//                  Magenta fontcolor

// Utilize the AND operator to display true
document.getElementById('AND').innerHTML = (3 == 3 && 33 == 33);

// Utilize the AND operator to display false
document.getElementById('and').innerHTML = (3 == 3 && 33 !== 33);

// Utilize the OR operator to display true
document.getElementById('OR').innerHTML = (3 !== 3 || 33 == 33);

// Utilize the OR operator to display false
document.getElementById('or').innerHTML = (3 !== 3 || 33 !== 33);


//                  Yellow fontcolor

// Utilize the NOT operator to display true
document.getElementById('isNot').innerHTML = !(3 < 3);

// Utilize the NOT operator to display false
document.getElementById('isntNot').innerHTML = !(3 < 33);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                      END OF REQUIRED EXERCISES
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ============================================================================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                      OTHER CHAPTER EXERCISES
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




//                      ~~~console.log EXERCISES~~~


// Perform a math operation with the console.log() function
console.log(((3 * 3E3) / 3) + 333);

// Display “false” in the console using 
// Boolean logic and the console.log() method
console.log(3 != 3);


//                     ~~~document.write EXERCISES~~~


//                     Small fontsize at the end of the document

// Make the browser display NaN
document.write((0 * 3) / (3 * 0));

// Utilize the isNaN() function to make the browser display “false”.
document.write(isNaN (3.33));

// Utilize the isNaN() function to make the browser display “true”.
document.write(isNaN("Three"));


//                     ~~~document.getElementById EXERCISES~~~


//                     Green fontcolor

// using the document.getElementById() method, write 
// a large enough number to display “Infinity”
document.getElementById('id').innerHTML = 3E333;

// using the document.getElementById() method, write 
// a large enough negative number to display “-Infinity”
document.getElementById('ID').innerHTML = -3E333;


//                    Red fontcolor

// Use Boolean logic to display true
document.getElementById('true').innerHTML = 333 > 3.33;

// Use Boolean logic to display false
document.getElementById('false').innerHTML = 333 < 3.33;
