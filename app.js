let cells = document.querySelectorAll(".row > div");
let turnCounter = 0;
let winningCombos = [
    [cells [0], cells[1], cells[2],
    [cells [3], cells[4], cells[5],
    [cells [6], cells[7], cells[8],
    [cells [0], cells[3], cells[6],
    [cells [1], cells[4], cells[7],
    [cells [2], cells[5], cells[8],
    [cells [0], cells[4], cells[8],
    [cells [2], cells[4], cells[6],
]

cells[2].textContent,

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);

}

function cellClicked (ev) {
if (ev.target.textContent = "")
    if (turnCouner % 2 == 0) {
    ev.target.textContent = "X";
    }   else {
    ev.target.textContent = "O"

    turnCounter++
    checkWin();
    }


function checkWin() {
    for (let i = 0; i < winningCombos[i].length; i++) {
        let xCount = 0
        let oCount = 0
    }

    if (cells[0].textContent == "X" && cells[1].textContent == "X" && cells[2].textContent == "X") {
        alert ("X Wins")
    }
    if (cells[0].textContent == "X" && cells[1].textContent == "X" && cells[2].textContent == "X") {
        alerta ("X Wins")
    }

    if (xCount == )
}
//hints cells[0].textContent text content of specific cell

//if else important
//=== important ex if(conditionOne && conditionTwo) {} -->logical and operator 
// conditionOne || conditionTwo -->logical or  operator

//else if () {} can add on as many as needed 