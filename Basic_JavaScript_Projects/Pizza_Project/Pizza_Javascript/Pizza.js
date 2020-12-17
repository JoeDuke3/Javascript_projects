function getReceipt() {
    // This initializes our string so it can get passed from 
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";    // Keeps what will be displayed
    var runningTotal = 0;                   // Keeps total value of checked items
    var sizeTotal = 0;                      // Keeps total vaalue of checked size items 
    var sizeArray = document.getElementsByClassName("size");    // setting a variable to "size" class elements
    for (var i = 0; i < sizeArray.length; i++) {                // Uses that variable with "i" to iterate through sizes
        if (sizeArray[i].checked) {                             // if statement for checked size items
            var selectedSize = sizeArray[i].value;              // sets a new variable keep value of current item in sizeArray
            text1 = text1+selectedSize+"<br>";                  // Use that variable to add selectedSize and a line break to text1
        }
    }
    // These are where the size values come from
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Smalll Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;           // set new variable to current sizeTotal
    console.log(selectedSize+" = $"+sizeTotal+".00") ;
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    // these variables will get passed on to each function
    getTopping(runningTotal,text1);             // Calls getToppings function
};

function getTopping(runningTotal,text1) {       // Define getToppings function
    var toppingTotal = 0;                       // Keeps total topping items
    var selectedTopping = [];                   // list of selected toppings
    var toppingArray = document.getElementsByClassName("toppings");         // setting a variable to "toppings" class elements
    for (var j = 0; j < toppingArray.length; j++) {                         // Uses that variable with "j" to iterate through toppings
        if (toppingArray[j].checked) {                                      // if statement for checked topping items
            selectedTopping.push(toppingArray[j].value);                    // pushes selected topping to toppingArray stack
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";                     // adds each new topping to text1
        }
    }
    var toppingCount = selectedTopping.length;                              // set new "toppingCount" variable to current length of "selectTopping[]"
    if (toppingCount > 1) {                                                 // if statement to determine if there is more that 1 topping
        toppingTotal = (toppingCount - 1);                                  // if so, subtracts 1 from toppingCount (due to offer)
    } else {
        toppingTotal = 0;                                                   // if not more than one, just use zero
    }
    runningTotal = (runningTotal + toppingTotal);                           // adds toppingTotal to previous runningTotal
    console.log("total selected topping items: "+toppingCount);             // The rest concatenates various strings to make final display
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML="<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};