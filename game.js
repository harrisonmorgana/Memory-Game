function flash(id) {
    
}

//const flash = (box) => {
//    return new Promise((resolve, reject) => {
//        box.className += 'active';
//        setTimeout(() => { 
//            box.className = box.className.replace(
//                'active', 
//                ' '
//                );
//                resolve();
//        } , 1000)
//    });
//}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


function main() {
    var sequence = ["topLeft", "topCenter", "middleLeft", "middleRight", "bottomCenter"];

    for (box in sequence) {
        element = document.getElementById(sequence[box]);
        
        element.classList.add("active");
    }

    sleep(1000);

    for (box in sequence) {
        element = document.getElementById(sequence[box]);
        
        element.classList.remove("active");
    }
}