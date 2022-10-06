let gameboard = (function () {

    //the array for the gameboard i.e. what should be displayed on the screen
    gameboardArray = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']

    // turn order variable -- who's controlling the game?
    let controller = 0;

    //players as objects
    
    return {
        getArray: function() { return gameboardArray },

        getTurn: function() { return controller },

        setTurn: function(value) { controller = value },

        nextTurn: function() {
            controller += 1;
        },

        resetTurns: function() {
            controller = 0;
        }
    }
})();

gameboard.nextTurn();
console.log(gameboard.getTurn());

// factory to make a player object for player1 and player2

const Player = (name) => {
    const getName  = () => name;
    return { getName };
};
  
const player1 = Player('jim');
const player2 = Player('jeff');
  
// write a JavaScript function that will render the contents of the gameboard array to the webpage


//loop through the array to populate
const populateGameboard = function(i) {
    console.log(gameboard.getArray())
    document.getElementById(`box${i}`).textContent = i;
}
