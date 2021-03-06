                    // 1ST ASSIGNMENT 
                    // Write the following code
                    // Successfully execute the index.html file in the browser

function Ride_Function() {                                                                  // Declare and name a function.
    var Height, Can_ride;                                                                   // Declare and name two variables.
    Height = document.getElementById("Height").value;                                       // Give value to the first variable by using the value of an HTML element.
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";                   // Give value to the second variable, which is a ternary operator.
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";                      // Pass the second variable's returned value to an HTML element.
}

                    // 1ST CHALLENGE
                    // create a basic program that outputs 
                    // whether or not a user is old enough to vote.

function votingAge() {                                                                      // Declare and name a function
    var age, oldEnough;                                                                     // Declare and name two variables.
    age = document.getElementById("age").value;                                             // Give value to the first variable by using the value of an HTML element.
    oldEnough = (age < 18) ? "You are not old enough":"You are old enough";                 // Give value to the second variable, which is a ternary operator.
    document.getElementById("vote").innerHTML = oldEnough + " to vote.";                    // Pass the second variable's retuned value to an HTML element.
}

                    // 2ND ASSIGNMENT
                    // Write and execute the HTML and JavaScript code 
                    // exactly as laid out in the previous course step.

function Vehicle(Make, Model, Year, Color) {                                                // Declare and name a function, which will act as an object constructor.
    this.Vehicle_Make = Make;                                                               // Use 'this' on the function keys to build the constructor.
    this.Vehicle_Model = Model;                                                             // Use 'this' on the function keys to build the constructor.
    this.Vehicle_Year = Year;                                                               // Use 'this' on the function keys to build the constructor.
    this.Vehicle_Color = Color;                                                             // Use 'this' on the function keys to build the constructor.
} 
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");                                      // Use 'new', which is tied to 'this' to create a new object.
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");                     // Use 'new', which is tied to 'this' to create a new object.
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");                                   // Use 'new', which is tied to 'this' to create a new object.

                    // 3RD ASSIGNMENT
                    // Utilize the new keyword. 

var Joe = new Vehicle("Danner", "Boots", 2018, "Black");

function myFunction() {                                                                     // Declare and name a funcion.
    document.getElementById("Keywords_and_Constructors").innerHTML =                        // The function passes concatenated strings/values to an HTML element.
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}

                    // Successfully run index.html in the browser.

function paidOff() {                                                                        // Declare and name a function.
    document.getElementById("New_and_This").innerHTML =                                     // The function passes some concatenated strings and values to an HTML element.
    "My favorite transportation is a pair of " + Joe.Vehicle_Color + " " + 
    Joe.Vehicle_Make + " " + Joe.Vehicle_Model + " that I got in " + 
    Joe.Vehicle_Year + ".";
};

                    // 2ND CHALLENGE
                    // Assign a variable the value of a reserved word. 
                    // Attempt to display this in the browser.

// function extends(short, long) {
//     var class = package;
//     getElementById("goto")private + function + interface;
// };

                    // Write an object constructor function.

function Dog(Breed, Color, Age, Personality) {                                              // Declare and name a function, which will act as an object constructor.
    this.Dog_Breed = Breed;                                                                 // Use 'this' on the function keys to build the constructor.
    this.Dog_Color = Color;                                                                 // Use 'this' on the function keys to build the constructor.
    this.Dog_Age = Age;                                                                     // Use 'this' on the function keys to build the constructor.
    this.Dog_Personality = Personality;                                                     // Use 'this' on the function keys to build the constructor.
}
var Matilda = new Dog("Chug", "Apricot/Fawn", 5, "playful");                                // Use 'new', which is tied to 'this' to create a new object.
function theTomato() {                                                                      // Declare and name a funcion.
    document.getElementById("Gooby").innerHTML =                                            // The function passes concatenated strings/values to an HTML element.
    "Matilda is an " + Matilda.Dog_Color + " " + Matilda.Dog_Breed + " who is very " + 
    Matilda.Dog_Personality + " at the age of " + Matilda.Dog_Age + " years old."
}

                    // 4TH CHALLENGE
                    // Write a nested function.
                    // Successfully execute index.html in the browser.

function bottlesOnWall() {                                                                      // Declare and name a function.
    document.getElementById('Wall').innerHTML =                                                 // The function passes a returned value to an HTML element.
    takeOneDown() + " bottles of beer on the wall.";
    function takeOneDown() {                                                                    // Declare and name a nested function.
        bottlesLeft = 100;                                                                      // The function sets a number value to a variable.
        function passItAround() {                                                               // Declare and name a nested function.
            bottlesLeft -= 1;                                                      // The function decreases the parent function variable by one.
        }
        passItAround();                                                                         // Call the most nested function.
        return bottlesLeft                                                                      // Return the variable with a new value.
    }
}

// do {
//     function bottlesOnWall() {
//         document.getElementById('Wall').innerHTML = 
//         takeOneDown() + " bottles of beer on the wall.";
//         function takeOneDown() {
//             bottlesLeft = 100;
//             function passItAround() {
//                 bottlesLeft -= 1;
//             }
//             passItAround();
//             return bottlesLeft
//         }
//     }
// }
// while (bottlesLeft > 0);