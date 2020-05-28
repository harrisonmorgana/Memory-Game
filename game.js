var randomSequence = [];
var userSequence = [];

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
    
    // Hardcode set Random Sequence -- needs automating
    sequence = ["topLeft", "topCenter", "middleLeft", "middleRight", "bottomCenter"];
    
    // Reset userSequence
    randomSequence = "";

    flashRed(sequence);
    
    sleep(1000);
    setTimeout(function(){ flashNormal(sequence); }, 1000);

}

function clicked(id) {
    userSequence.push(id);
    alert(userSequence);
}
