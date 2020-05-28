
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

const topLeft = document.querySelector('.top-left-box');
const topMiddle = document.querySelector('.top-middle-box');
const topRight = document.querySelector('.top-right-box');
const middleLeft = document.querySelector('.middle-left-box');
const middleMiddle = document.querySelector('.middle-middle-box');
const middleRight = document.querySelector('.middle-right-box');
const bottomLeft = document.querySelector('.bottom-left-box');
const bottomMiddle = document.querySelector('.bottom-middle-box');
const bottomRight = document.querySelector('.bottom-right-box');



const sequence = [topLeft, topMiddle, middleLeft, middleRight bottomMiddle];

const flash = (box) => {
    return new Promise((resolve, reject) => {
        box.className += 'active';
        setTimeout(() => { 
            box.className = box.className.replace(
                'active', 
                ' '
                );
                resolve();
        } , 1000)
    });

}

const main = async () => {
    for (let box of sequence)
    await flash(box)
};

main();
