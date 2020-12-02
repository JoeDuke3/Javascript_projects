function matildaRose() {                // Defining/naming a function
    var Pet = {                         // Declaring/naming a dictionary
        Species:"Dog",                  // KVP of her species
        Name:"Matilda",                 // KVP of her name
        Breed:"Chug",                   // KVP of her breed
        Color:"Apricot/cream",          // KVP of her color
        Weight:"12 lbs",                // KVP of her weight
        Nicknames:"Gooby, Tomato",      // KVP of her nicknames
        Birthday:"May 23",              // KVP of her birthday
        Birthyear:"2015",               // KVP of her birthyear
        Disposition:"Spaz"              // KVP of her disposition
    }                                   // Closing a dictionary
    delete Pet.Nicknames;               // Deleting nicknames KVP
    // \/ Attempting to pass nicknames KVP to Element ID Dictionary
    document.getElementById('Dictionary').innerHTML = Pet.Nicknames;
}                                       // Closing a function