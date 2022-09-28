const gameState = () => {
    const gameboard = (() => {

        const gameboard = []

        function displayGameboard(gameboard) {
            for (var i = 0; i < gameboard.length; i++) {
              document.getElementById(`box${i}`).textContent = gameboard[i];
            }
        }

        displayGameboard(gameboard);

        return { 
          gameboard
        };
  
    })();

    const newPlayer = () => {
      const player = []
      return { player };
    };
      
    const player1 = newPlayer();
    const player2 = newPlayer();

    return { gameboard, player1, player2 };

}

gameState();

// If turnOrder is an even number, it's player 1's turn. If it's odd, it's player 2's turn.

let turnOrder = 0;


function playerMove(i) { 

  function isEven(n) {
    return n % 2 == 0;
  }

  function playerTurn(i) {
    if (document.getElementById(`box${i}`).textContent == "" && isEven(turnOrder) == true) {
      document.getElementById(`box${i}`).textContent = "X";
      document.getElementById(`gameText`).textContent = "Player 2: Go!";
      turnOrder++
    } else if (document.getElementById(`box${i}`).textContent == "") {
      document.getElementById(`box${i}`).textContent = "O";
      document.getElementById(`gameText`).textContent = "Player 1: Go!";
      turnOrder++
    }
  }

  playerTurn(i);
}