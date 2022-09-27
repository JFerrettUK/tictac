const gameState = () => {
    const gameboard = (() => {

        const gameboard = ["X", "O"]

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

function xMarks(i) {
  if (document.getElementById(`box${i}`).textContent == "") {
    document.getElementById(`box${i}`).textContent = "X";
  } else {
    return;
  }
}