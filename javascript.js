// const gameboard = (() => {

//     const gameboardArray = ["X", "", "O", "", "", "", "", "", ""]

//     function displayGameboard(gameboardArray) {
//         for (var i = 0; i < gameboardArray.length; i++) {
//           document.getElementById(`box${i}`).textContent = gameboardArray[i];
//         }
//     }

//     displayGameboard(gameboardArray);

//     return { 
//       gameboardArray
//     };

// })();

const box1 = "test";
const box2 = "test";

const gameboard = (() => {
  const gameboardArray = (val1, val2) => [val1, val2]
  return {
    gameboardArray
  }
})();

const newPlayer = () => {
  const player = []
  return { player };
};
  
const player1 = newPlayer();
const player2 = newPlayer();

// If turnOrder is an even number, it's player 1's turn. If it's odd, it's player 2's turn.

let turnOrder = 0;
const gameboardArrayBase = ["", "", "", "", "", "", "", "", ""]

function playerMove(i) { 

  function isEven(n) {
    return n % 2 == 0;
  }

  function playerTurn(i) {
    if (document.getElementById(`box${i}`).textContent == "" && isEven(turnOrder) == true) {
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

  playerTurn(i);
}
