let gameboard = (function () {

    //the array for the gameboard
    gameboardArray = ['', '', '', '', '', '', '', '', '']

    // turn order variable
    let controller = 0;
    
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
gameboard.nextTurn();
gameboard.nextTurn();
console.log(gameboard.getTurn());