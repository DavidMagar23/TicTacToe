// Initialize variables and button
const Boxes = document.querySelectorAll('.box');
let clickSfx = document.querySelector('.clickSfx');
let win = document.querySelector('.win');
let gameText = document.querySelector('.gameText');
let container = document.querySelector('.container');
let turn = 2;
const WINNINGCOMB = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

for (box of Boxes) {
    box.used = false;
    box.contain = '';

    box.addEventListener("click", boxEvent = (e) => {

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
                e.target.contain = 'circle';
                clickSfx.play();
                turn++
            }
            else {
                let cross = document.createElement('div');
                cross.classList.add('cross');
                e.target.appendChild(cross);
                e.target.contain = 'cross'
                clickSfx.play();
                turn++;
            }
        }

        if (checkWin1()) {
            gameText.innerText = "Player 1 wins";
            gameText.classList.add('player1');
            container.classList.add('unclick');
        }
        else if (checkWin2()) {
            gameText.innerText = "Player 2 wins";
            gameText.classList.add('player2');
            container.classList.add('unclick');
        }
    })
}


// Reset button
let reset = document.querySelector('button');
reset.addEventListener("click", (e) => {
    turn = 2;
    gameText.innerText = '';
    gameText.classList = 'gameText';
    container.classList.remove('unclick');
    for (box of Boxes) {
        box.innerText = '';
        box.used = false;
        box.contain = '';
        box.classList.remove('yellow');
    }
})

function checkWin1 () {
    return WINNINGCOMB.some((combination) => {
        if (combination.every(boxNumber => {
            if (Boxes[boxNumber].contain =='circle') {
                return true;
            }
            return false;
        }) == true )  {
            for (index of combination) {
                Boxes[index].classList.add('yellow');
            }
            return true;
        }
        return false;
    })
}

function checkWin2 () {
    return WINNINGCOMB.some((combination) => {
        if (combination.every(boxNumber => {
            if (Boxes[boxNumber].contain =='cross') {
                return true;
            }
            return false;
        }) == true )  {
            for (index of combination) {
                Boxes[index].classList.add('yellow');
            }
            return true;
        }
        return false;
    })
}