// Define and name a function
function kylesAnswer() {
// Declare a variable
    var kyleSays = "you ";
// Redeclare a variable by concatenating a string to it
    kyleSays += "bastard";
// Declare a new variable by changing the case of a previous
// variable and concatenating a string to it
    var kyleShouts = (kyleSays.toUpperCase() + "!");
// Add the content of a variable to an HTML element
// when a specified event happens
    document.getElementById('kyle').innerHTML = kyleShouts;
}