// 1ST ASSIGNMENT

// function Ride_Function() {
//     var Height, Can_ride;
//     Height = document.getElementById("Height").value;
//     Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
//     document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
// }

                                // 1ST CHALLENGE
// create a basic program that outputs whether or not a user is old enough to vote.

// function votingAge() {
//     var age, oldEnough;
//     age = document.getElementById("age").value;
//     oldEnough = (age < 18) ? "You are not old enough":"You are old enough";
//     document.getElementById("vote").innerHTML = oldEnough + " to vote.";
// }

                            // 2ND ASSIGNMENT

// function Vehicle(Make, Model, Year, Color) {
//     this.Vehicle_Make = Make;
//     this.Vehicle_Model = Model;
//     this.Vehicle_Year = Year;
//     this.Vehicle_Color = Color;
// }
// var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
// var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
// var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
// function myFunction() {
//     document.getElementById("Keywords_and_Constructors").innerHTML = 
//     "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
//     " manufactured in " + Erik.Vehicle_Year;
// }
                            // 3RD ASSIGNMENT

function Dog(Breed, Color, Age, Personality) {
    this.Dog_Breed = Breed;
    this.Dog_Color = Color;
    this.Dog_Age = Age;
    this.Dog_Personality = Personality;
}
var Matilda = new Dog("Chug", "Apricot/Fawn", 5, "playful");
function theTomato() {
    document.getElementById("New_and_This").innerHTML = 
    "Matilda is an " + Matilda.Dog_Color + " " + Matilda.Dog_Breed + " who is very " + 
    Matilda.Dog_Personality + " at the age of " + Matilda.Dog_Age + " years old."
}