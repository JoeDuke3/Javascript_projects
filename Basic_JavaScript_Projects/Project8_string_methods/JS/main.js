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

