// Initialize variables and button
const Boxes = document.querySelectorAll('.box');
let clickSfx = document.querySelector('.clickSfx');
let win = document.querySelector('.win');
let gameText = document.querySelector('.gameText');
let container = document.querySelector('.container');
let turn = 2;
let counter = 0;
for (box of Boxes) {
    box.used = false;

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

        if (checkWin()) {
            container.classList.add('unclick');
        };
    })
}


// Reset button
let reset = document.querySelector('button');
reset.addEventListener("click", (e) => {
    counter = 0;
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

function checkWin () {

    // Case 1
    if (Boxes[0].used == true && Boxes[1].used == true && Boxes[2].used == true) {
        if (Boxes[0].contain == 'circle' && Boxes[1].contain == 'circle' && Boxes[2].contain == 'circle') {
            gameText.innerText = 'Player 1 wins';
            gameText.classList.add('player1');
            Boxes[0].classList.add('yellow');
            Boxes[1].classList.add('yellow');
            Boxes[2].classList.add('yellow');
            return true;
        }
        else if (Boxes[0].contain == 'cross' && Boxes[1].contain == 'cross' && Boxes[2].contain == 'cross') {
            gameText.innerText = 'Player 2 wins';
            gameText.classList.add('player2');
            Boxes[0].classList.add('yellow');
            Boxes[1].classList.add('yellow');
            Boxes[2].classList.add('yellow');
            return true;
        }
    }

    // Case 2
    if (Boxes[3].used == true && Boxes[4].used == true && Boxes[5].used == true) {
        if (Boxes[3].contain == 'circle' && Boxes[4].contain == 'circle' && Boxes[5].contain == 'circle') {
            gameText.innerText = 'Player 1 wins';
            gameText.classList.add('player1');
            Boxes[3].classList.add('yellow');
            Boxes[4].classList.add('yellow');
            Boxes[5].classList.add('yellow');
            return true;
        }
        else if (Boxes[3].contain == 'cross' && Boxes[4].contain == 'cross' && Boxes[5].contain == 'cross') {
            gameText.innerText = 'Player 2 wins';
            gameText.classList.add('player2');
            Boxes[3].classList.add('yellow');
            Boxes[4].classList.add('yellow');
            Boxes[5].classList.add('yellow');
            return true;
        }
    }

    // Case 3
    if (Boxes[6].used == true && Boxes[7].used == true && Boxes[8].used == true) {
        if (Boxes[6].contain == 'circle' && Boxes[7].contain == 'circle' && Boxes[8].contain == 'circle') {
            gameText.innerText = 'Player 1 wins';
            gameText.classList.add('player1');
            Boxes[6].classList.add('yellow');
            Boxes[7].classList.add('yellow');
            Boxes[8].classList.add('yellow');
            return true;
        }
        else if (Boxes[6].contain == 'cross' && Boxes[7].contain == 'cross' && Boxes[8].contain == 'cross') {
            gameText.innerText = 'Player 2 wins';
            gameText.classList.add('player2');
            Boxes[6].classList.add('yellow');
            Boxes[7].classList.add('yellow');
            Boxes[8].classList.add('yellow');
            return true;
        }
    }

    // Case 4
    if (Boxes[0].used == true && Boxes[3].used == true && Boxes[6].used == true) {
        if (Boxes[0].contain == 'circle' && Boxes[3].contain == 'circle' && Boxes[6].contain == 'circle') {
            gameText.innerText = 'Player 1 wins';
            gameText.classList.add('player1');
            Boxes[0].classList.add('yellow');
            Boxes[3].classList.add('yellow');
            Boxes[6].classList.add('yellow');
            return true;
        }
        else if (Boxes[0].contain == 'cross' && Boxes[3].contain == 'cross' && Boxes[6].contain == 'cross') {
            gameText.innerText = 'Player 2 wins';
            gameText.classList.add('player2');
            Boxes[0].classList.add('yellow');
            Boxes[3].classList.add('yellow');
            Boxes[6].classList.add('yellow');
            return true;
        }
    }

    // Case 5
    if (Boxes[1].used == true && Boxes[4].used == true && Boxes[7].used == true) {
        if (Boxes[1].contain == 'circle' && Boxes[4].contain == 'circle' && Boxes[7].contain == 'circle') {
            gameText.innerText = 'Player 1 wins';
            gameText.classList.add('player1');
            Boxes[1].classList.add('yellow');
            Boxes[4].classList.add('yellow');
            Boxes[7].classList.add('yellow');
            return true;
        }
        else if (Boxes[1].contain == 'cross' && Boxes[4].contain == 'cross' && Boxes[7].contain == 'cross') {
            gameText.innerText = 'Player 2 wins';
            gameText.classList.add('player2');
            Boxes[1].classList.add('yellow');
            Boxes[4].classList.add('yellow');
            Boxes[7].classList.add('yellow');
            return true;
        }
    }

    // Case 6
    if (Boxes[2].used == true && Boxes[5].used == true && Boxes[8].used == true) {
        if (Boxes[2].contain == 'circle' && Boxes[5].contain == 'circle' && Boxes[8].contain == 'circle') {
            gameText.innerText = 'Player 1 wins';
            gameText.classList.add('player1');
            Boxes[2].classList.add('yellow');
            Boxes[5].classList.add('yellow');
            Boxes[8].classList.add('yellow');
            return true;
        }
        else if (Boxes[2].contain == 'cross' && Boxes[5].contain == 'cross' && Boxes[8].contain == 'cross') {
            gameText.innerText = 'Player 2 wins';
            gameText.classList.add('player2');
            Boxes[2].classList.add('yellow');
            Boxes[5].classList.add('yellow');
            Boxes[8].classList.add('yellow');
            return true;
        }
    }

    // Case 7
    if (Boxes[0].used == true && Boxes[4].used == true && Boxes[8].used == true) {
        if (Boxes[0].contain == 'circle' && Boxes[4].contain == 'circle' && Boxes[8].contain == 'circle') {
            gameText.innerText = 'Player 1 wins';
            gameText.classList.add('player1');
            Boxes[0].classList.add('yellow');
            Boxes[4].classList.add('yellow');
            Boxes[8].classList.add('yellow');
            return true;
        }
        else if (Boxes[0].contain == 'cross' && Boxes[4].contain == 'cross' && Boxes[8].contain == 'cross') {
            gameText.innerText = 'Player 2 wins';
            gameText.classList.add('player2');
            Boxes[0].classList.add('yellow');
            Boxes[4].classList.add('yellow');
            Boxes[8].classList.add('yellow');
            return true;
        }
    }

    // Case 8
    if (Boxes[2].used == true && Boxes[4].used == true && Boxes[6].used == true) {
        if (Boxes[2].contain == 'circle' && Boxes[4].contain == 'circle' && Boxes[6].contain == 'circle') {
            gameText.innerText = 'Player 1 wins';
            gameText.classList.add('player1');
            Boxes[2].classList.add('yellow');
            Boxes[4].classList.add('yellow');
            Boxes[6].classList.add('yellow');
            return true;
        }
        else if (Boxes[2].contain == 'cross' && Boxes[4].contain == 'cross' && Boxes[6].contain == 'cross') {
            gameText.innerText = 'Player 2 wins';
            gameText.classList.add('player2');
            Boxes[2].classList.add('yellow');
            Boxes[4].classList.add('yellow');
            Boxes[6].classList.add('yellow');
            return true;
        }
    }

    return false;
}
