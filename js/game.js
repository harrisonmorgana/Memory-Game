// Set global variables
var randomSequence = [];
var userSequence = [];

function randomizer(IDs) {
    while (randomSequence.length < 5) {
        // Select random
        var randomID = IDs[Math.floor(Math.random()*IDs.length)]
        
        // Ensure not already added 
        if (!(randomSequence.includes(randomID))) {
            // Add to array
            randomSequence.push(randomID);
        }
    }
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
    // Reset Arrays
    userSequence.length = 0;
    randomSequence.length = 0;
    
    // HARD CODED - SHOULD BE IMPROVED
    // Get div ID's
    divIDs = ['topLeft', 'topCenter', 'topRight', 'middleLeft', 'middleCenter', 'middleRight', 'bottomLeft', 'bottomCenter', 'bottomRight'];

    // Random
    randomizer(divIDs);

    // Flash boxes
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

        // Reset Arrays
        randomSequence.length = 0;
        userSequence.length = 0;
    }
}