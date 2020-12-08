                    // 1ST ASSIGNMENT
                    // utilize the concat() method to 
                    // connect two or more strings.
function startProject() {
    var strA = "This is ";
    var strB = "the start of ";
    var strC = "Project 8!";
    var wholeSentence = strA.concat(strB, strC);
    document.getElementById("concatenate").innerHTML = wholeSentence;
}

                    // 2ND ASSIGNMENT
                    // write a slice() method 
                    // that displays a section of a string.
var Prophecy = 
"Our nations grew weak and our cities fell to slums while evil stood strong.";
function inTheBeginning() {
    var Cause = Prophecy.slice(57, 61);
    document.getElementById("Fear").innerHTML = Cause;
}

                    // 1ST CHALLENGE
                    // Successfully write and execute 
                    // the toUpperCase() method.
                    // Successfully write and execute 
                    // the search() method.
function capsIt() {
    var loud = Prophecy.toUpperCase();
    document.getElementById("Challenge1a").innerHTML = loud;
}

function findIt() {
    var found = Prophecy.search("strong");
    document.getElementById("Challenge1b").innerHTML = found;
}

                    // 3RD ASSIGNMENT
                    // utilize the toString() method 
                    // to return a number as a string.
function stringTheBeast() {
    var beast = 666;
    document.getElementById("strungBeast").innerHTML = beast.toString();
}

                    // 4TH ASSIGNMENT
                    // Utilize the toPrecision() method to return 
                    // a string as a number of a specified length.

function shortenGross () {
    var gross = 144.144144144144144;
    document.getElementById("shortGross").innerHTML = gross.toPrecision(9);
}

                    // 2ND CHALLENGE
                    // Successfully write and execute 
                    // the toFixed() method.

function fixPi() {
    var p = 3.14159;
    document.getElementById("fixedPi").innerHTML = p.toFixed(2);
}

                    // 2ND CHALLENGE
                    // Successfully write and execute 
                    // the valueOf() method.

function workForIt() {
    var d = "A Dollar";
    document.getElementById("valued").innerHTML = d.valueOf();
}