// Initialize variables and button
const Boxes = document.querySelectorAll('.box');
let turn = 2;
let counter = 0;
for (box of Boxes) {
    box.used = false;

    box.addEventListener("click", (e) => {
        if (e.target.used === false){
            e.target.used = true;

            if (turn % 2 == 0) {
                let circle = document.createElement('div');
                circle.classList.add('circle');
                circle.classList.add('center');
                let smallCircle = document.createElement('div');
                smallCircle.classList.add('small-circle');
                e.target.appendChild(circle);
                circle.appendChild(smallCircle);
                box.contain = 'circle';
    
                turn++
            }
            else {
                let cross = document.createElement('div');
                cross.classList.add('cross');
                e.target.appendChild(cross);
                box.contain = 'cross'
                turn++;
            }
    
            
        }
    })
}


// Reset button
let reset = document.querySelector('button');
reset.addEventListener("click", (e) => {
    counter = 0;
    for (box of Boxes) {
        box.innerText = '';
        box.used = false;
        box.contain = '';
    }
})
