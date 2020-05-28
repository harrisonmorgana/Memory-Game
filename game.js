// Set global variables
var randomSequence = ["topLeft", "topCenter", "middleLeft", "middleRight", "bottomCenter"];
var userSequence = [];

function randomizer() {
    // Set random Numbers Array
    randomNumbers = [];

    // Set int i = 0
    i=0;

    // Loop 5 times
    while (i < 6) {
        // Get number
        number = Math.floor(Math.random() * 6) + 1;
        alert(number);
        // Add to array
        randomNumbers.push(number);

        //Increment i
        i++;
    }

    // return Numbers
    return randomNumbers;
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function flashRed(sequence) {
    for (box in sequence) {
        element = document.getElementById(sequence[box]);
        
        element.classList.add("active");
    }
}

function flashNormal(sequence) {
    for (box in sequence) {
        element = document.getElementById(sequence[box]);
        
        element.classList.remove("active");
    }
}

function flashSequence(sequence) {
    
    //Get random numbers
    randomNumbers = randomizer();

    alert(randomNumbers);



    // Reset userSequence
    userSequence.length = 0;

    flashRed(randomSequence);
    
    sleep(1000);
    setTimeout(function(){ flashNormal(randomSequence); }, 1000);

}

function clicked(id) {
    userSequence.push(id);
}

function compareResults() {
    // Sort both global array into alphabetical order
    userSequence.sort();
    randomSequence.sort();


    //Debuging - Ensure Play has been pressed and user has selected information
    if (randomSequence.length < 1) {
        alert("Press Play First!");
    } else if (userSequence.length < 1) {
        alert("Select your boxes first!");
    } else {
        // Convert to string -- Easier to run compare
        stringUser = userSequence.toString();
        stringRandom = randomSequence.toString();

        // Check they match
        if (stringUser == stringRandom) {
            //MATCH 
            alert("Congratulations! You Win.");
        } else {
            // No Match
            alert("Better luck next time!");
        }
    }
}