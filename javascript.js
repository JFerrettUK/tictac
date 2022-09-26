const gameState = string => {
    const gameboard = (() => {

        const gameboard = []
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

