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
function inTheBeginning() {
    var Prophecy = "Our nations grew weak and cities fell to slums while evil stood strong.";
    var Cause = Prophecy.slice(53, 57);
    document.getElementById("Fear").innerHTML = Cause;
}