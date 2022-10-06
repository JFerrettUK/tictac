// If turnOrder is an even number, it's player 1's turn. If it's odd, it's player 2's turn.
let turnOrder = 0;
let gameWon = false;
const gameboardArrayBase = ["", "", "", "", "", "", "", "", ""]

const nameForm = document.getElementById("nameForm");
nameForm.addEventListener("submit", e => {
  e.preventDefault();
  const players = makePlayers()
  console.log(players)
  return players;
});

function makePlayers() {
  const player1 = document.getElementById('player1').value;
  const player2 = document.getElementById('player2').value;
  return { player1, player2}
}


const gameboard = (i) => { 

  const isEven = (n) => {
    return n % 2 == 0;
  }

  const gameState = (i) => {
    if (gameWon == true) {
      return;
    } else if (document.getElementById(`box${i}`).textContent == "" && isEven(turnOrder) == true) {
      document.getElementById(`box${i}`).textContent = "X";
      gameboardArrayBase[`${i}`] = "X"
      document.getElementById(`gameText`).textContent = "Player 2: Go!";
      turnOrder++
    } else if (document.getElementById(`box${i}`).textContent == "") {
      document.getElementById(`box${i}`).textContent = "O";
      document.getElementById(`gameText`).textContent = "Player 1: Go!";
      gameboardArrayBase[`${i}`] = "O"
      turnOrder++
    }
  }

  const findWinner = () => {
    let box0 = gameboardArrayBase[0]
    let box1 = gameboardArrayBase[1]
    let box2 = gameboardArrayBase[2]
    let box3 = gameboardArrayBase[3]
    let box4 = gameboardArrayBase[4]
    let box5 = gameboardArrayBase[5]
    let box6 = gameboardArrayBase[6]
    let box7 = gameboardArrayBase[7]
    let box8 = gameboardArrayBase[8]
  
    if (box0 == "X" && box1 == "X" && box2 == "X") {
      document.getElementById(`gameText`).textContent = "Player 1 wins! Game over.";
      gameWon = true;
    } else if (box3 == "X" && box4 == "X" && box5 == "X") {
      document.getElementById(`gameText`).textContent = "Player 1 wins! Game over.";
      gameWon = true;
    } else if (box6 == "X" && box7 == "X" && box8 == "X") {
      document.getElementById(`gameText`).textContent = "Player 1 wins! Game over.";
      gameWon = true;
    } else if (box0 == "X" && box3 == "X" && box6 == "X") {
      document.getElementById(`gameText`).textContent = "Player 1 wins! Game over.";
      gameWon = true;
    } else if (box1 == "X" && box4 == "X" && box7 == "X") {
      document.getElementById(`gameText`).textContent = "Player 1 wins! Game over.";
      gameWon = true;
    } else if (box2 == "X" && box5 == "X" && box8 == "X") {
      document.getElementById(`gameText`).textContent = "Player 1 wins! Game over.";
      gameWon = true;
    } else if (box0 == "X" && box4 == "X" && box8 == "X") {
      document.getElementById(`gameText`).textContent = "Player 1 wins! Game over.";
      gameWon = true;
    } else if (box2 == "X" && box4 == "X" && box6 == "X") {
      document.getElementById(`gameText`).textContent = "Player 1 wins! Game over.";
      gameWon = true;
    } else if (box0 == "O" && box1 == "O" && box2 == "O") {
      document.getElementById(`gameText`).textContent = "Player 2 wins! Game over.";
      gameWon = true;
    } else if (box3 == "O" && box4 == "O" && box5 == "O") {
      document.getElementById(`gameText`).textContent = "Player 2 wins! Game over.";
      gameWon = true;
    } else if (box6 == "O" && box7 == "O" && box8 == "O") {
      document.getElementById(`gameText`).textContent = "Player 2 wins! Game over.";
      gameWon = true;
    } else if (box0 == "O" && box3 == "O" && box6 == "O") {
      document.getElementById(`gameText`).textContent = "Player 2 wins! Game over.";
      gameWon = true;
    } else if (box1 == "O" && box4 == "O" && box7 == "O") {
      document.getElementById(`gameText`).textContent = "Player 2 wins! Game over.";
      gameWon = true;
    } else if (box2 == "O" && box5 == "O" && box8 == "O") {
      document.getElementById(`gameText`).textContent = "Player 2 wins! Game over.";
      gameWon = true;
    } else if (box0 == "O" && box4 == "O" && box8 == "O") {
      document.getElementById(`gameText`).textContent = "Player 2 wins! Game over.";
      gameWon = true;
    } else if (box2 == "O" && box4 == "O" && box6 == "O") {
      document.getElementById(`gameText`).textContent = "Player 2 wins! Game over.";
      gameWon = true;
    } 
  }

  gameState(i);
  findWinner();
}

const resetGame = () => {
  document.getElementById(`gameText`).textContent = "Player 1: Go!";
  gameWon = false;

  const resetGameboard = (gameboardArrayBase) => {
    for (var i = 0; i < gameboardArrayBase.length; i++) {
      document.getElementById(`box${i}`).textContent = "";
      gameboardArrayBase[i] = "";
    }
  }
  resetGameboard(gameboardArrayBase)
}