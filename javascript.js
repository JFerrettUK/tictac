const gameboard = (function () {

    //the array for the gameboard i.e. what should be displayed on the screen
    let gameboardArray = ['', '', '', '', '', '', '', '', '']

    // turn order variable -- who's controlling the game?
    let controller = 0;

    //players as objects
    
    return {
        getArray: function() { return gameboardArray },

        setArrayX: function(value) { gameboardArray[value] = "X" },
        setArrayO: function(value) { gameboardArray[value] = "O" },

        getTurn: function() { return controller },

        nextTurn: function() {
            controller += 1;
        },

        resetTurns: function() {
            controller = 0;
        }
    }
})();

// factory function to make a player object for player1 and player2
const Player = (name) => {
    const getName  = () => name;
    return { getName };
};
const player1 = Player('jim');
const player2 = Player('jeff');

//if input value (controller) is even, it's player 1's turn
const findPlayer1Turn = (n) => {
    return n % 2 == 0;
}

//loop through the array to populate
const populateGameboard = function(i) {
    let gameScore = gameboard.getArray();
    for (var i = 0; i < gameScore.length; i++) {
        document.getElementById(`box${i}`).textContent = gameScore[i];
    }
}

// functions that allow players to add marks to a specific mark on the array
const markArray = function(i) {
    let turnNow = gameboard.getTurn();
    let array = gameboard.getArray();
    let arrayDigit = array[i];

    if (findPlayer1Turn(turnNow) == true && arrayDigit == '') {
        gameboard.setArrayX(i);
    } else {
        gameboard.setArrayO(i);
    }
    gameboard.nextTurn()
}

