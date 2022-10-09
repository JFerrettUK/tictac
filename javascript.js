const gameboard = (function () {

    //the array for the gameboard i.e. what should be displayed on the screen
    let gameboardArray = ['', '', '', '', '', '', '', '', '']

    //turn order variable -- who's controlling the game?
    let controller = 0;

    //has someone won the game?
    let gameWon = false

    return {
        getArray: function() { 
            return gameboardArray 
        },

        setArrayX: function(value) { 
            gameboardArray[value] = "X" 
        },

        setArrayO: function(value) { 
            gameboardArray[value] = "O" 
        },

        getTurn: function() { 
            return controller 
        },

        nextTurn: function() {
            controller += 1;
        },

        getGameStatus: function() { 
            return gameWon
        },

        finishGame: function() {
            gameWon = true;
        },

        //if input value (controller) is even, it's player 1's turn
        findPlayer1Turn: function(n) {
            return n % 2 == 0;
        },

        //function that allows players to add marks to a specific box from the array
        markArray: function(i) {
            let turnNow = gameboard.getTurn();
            let array = gameboard.getArray();
            let arrayDigit = array[i];
        
            if (gameboard.findPlayer1Turn(turnNow) == true && arrayDigit == '') {
                gameboard.setArrayX(i);
                document.getElementById(`gameText`).textContent = `${gameboard.getPlayers().player2}: Go!`;
            } else if (arrayDigit == '') {
                gameboard.setArrayO(i);
                document.getElementById(`gameText`).textContent = `${gameboard.getPlayers().player1}: Go!`;
            } else {
                return
            }
            gameboard.nextTurn()
        },

        //loop through the array to populate
        populateGameboard: function() {
            let gameScore = gameboard.getArray();
            for (var i = 0; i < gameScore.length; i++) {
                document.getElementById(`box${i}`).textContent = gameScore[i];
            }
        },

        //function to find and congratulate the winner of the game
        findWinner: function() {
            gameboardArray = gameboard.getArray()
        
            let box0 = gameboardArray[0]
            let box1 = gameboardArray[1]
            let box2 = gameboardArray[2]
            let box3 = gameboardArray[3]
            let box4 = gameboardArray[4]
            let box5 = gameboardArray[5]
            let box6 = gameboardArray[6]
            let box7 = gameboardArray[7]
            let box8 = gameboardArray[8]
          
            if (box0 == "X" && box1 == "X" && box2 == "X") {
                document.getElementById(`gameText`).textContent = `${gameboard.getPlayers().player1} wins! Game over.`;
                gameboard.finishGame()
            } else if (box3 == "X" && box4 == "X" && box5 == "X") {
                document.getElementById(`gameText`).textContent = `${gameboard.getPlayers().player1} wins! Game over.`;
                gameboard.finishGame()
            } else if (box6 == "X" && box7 == "X" && box8 == "X") {
                document.getElementById(`gameText`).textContent = `${gameboard.getPlayers().player1} wins! Game over.`;
                gameboard.finishGame()
            } else if (box0 == "X" && box3 == "X" && box6 == "X") {
                document.getElementById(`gameText`).textContent = `${gameboard.getPlayers().player1} wins! Game over.`;
                gameboard.finishGame()
            } else if (box1 == "X" && box4 == "X" && box7 == "X") {
                document.getElementById(`gameText`).textContent = `${gameboard.getPlayers().player1} wins! Game over.`;
                gameboard.finishGame()
            } else if (box2 == "X" && box5 == "X" && box8 == "X") {
                document.getElementById(`gameText`).textContent = `${gameboard.getPlayers().player1} wins! Game over.`;
                gameboard.finishGame()
            } else if (box0 == "X" && box4 == "X" && box8 == "X") {
                document.getElementById(`gameText`).textContent = `${gameboard.getPlayers().player1} wins! Game over.`;
                gameboard.finishGame()
            } else if (box2 == "X" && box4 == "X" && box6 == "X") {
                document.getElementById(`gameText`).textContent = `${gameboard.getPlayers().player1} wins! Game over.`;
                gameboard.finishGame()
            } else if (box0 == "O" && box1 == "O" && box2 == "O") {
                document.getElementById(`gameText`).textContent = `${gameboard.getPlayers().player2} wins! Game over.`;
                gameboard.finishGame()
            } else if (box3 == "O" && box4 == "O" && box5 == "O") {
                document.getElementById(`gameText`).textContent = `${gameboard.getPlayers().player2} wins! Game over.`;
                gameboard.finishGame()
            } else if (box6 == "O" && box7 == "O" && box8 == "O") {
                document.getElementById(`gameText`).textContent = `${gameboard.getPlayers().player2} wins! Game over.`;
                gameboard.finishGame()
            } else if (box0 == "O" && box3 == "O" && box6 == "O") {
                document.getElementById(`gameText`).textContent = `${gameboard.getPlayers().player2} wins! Game over.`;
                gameboard.finishGame()
            } else if (box1 == "O" && box4 == "O" && box7 == "O") {
                document.getElementById(`gameText`).textContent = `${gameboard.getPlayers().player2} wins! Game over.`;
                gameboard.finishGame()
            } else if (box2 == "O" && box5 == "O" && box8 == "O") {
                document.getElementById(`gameText`).textContent = `${gameboard.getPlayers().player2} wins! Game over.`;
                gameboard.finishGame()
            } else if (box0 == "O" && box4 == "O" && box8 == "O") {
                document.getElementById(`gameText`).textContent = `${gameboard.getPlayers().player2} wins! Game over.`;
                gameboard.finishGame()
            } else if (box2 == "O" && box4 == "O" && box6 == "O") {
                document.getElementById(`gameText`).textContent = `${gameboard.getPlayers().player2} wins! Game over.`;
                gameboard.finishGame()
            } 
        },

        playGame: function(i) {
            if (gameboard.getGameStatus() == false) {
                gameboard.markArray(i);
                gameboard.populateGameboard();
                gameboard.findWinner()
            } else {
                return
            }        
        },

        resetGame: function() {
            gameWon = false;
            controller = 0;
            gameboardArray = ['', '', '', '', '', '', '', '', ''];
            gameboard.playGame();
            document.getElementById(`gameText`).textContent = `Let the game begin... You're up, ${gameboard.getPlayers().player1}!`;;
        },

        getPlayers: function() {
            const player1 = document.getElementById('player1').value
            const player2 = document.getElementById('player2').value

            return {
                player1, player2
            }
        },

        openGame: function() {
            document.getElementById(`nameForm`).style.display = "none";  
            document.getElementById(`textGameCont`).style.display = "grid";  
        }


    }
})();

//event listeners to call functions for adding to the array, populating the board, and finding a winner

document.getElementById("box0").addEventListener("click", function(){
    gameboard.playGame(0);
});
 
document.getElementById("box1").addEventListener("click", function(){
    gameboard.playGame(1);
});
  
document.getElementById("box2").addEventListener("click", function(){
    gameboard.playGame(2);
});
  
document.getElementById("box3").addEventListener("click", function(){
    gameboard.playGame(3);
});
  
document.getElementById("box4").addEventListener("click", function(){
    gameboard.playGame(4);
});

document.getElementById("box5").addEventListener("click", function(){
    gameboard.playGame(5);
});
 
document.getElementById("box6").addEventListener("click", function(){
    gameboard.playGame(6);
});
 
document.getElementById("box7").addEventListener("click", function(){
    gameboard.playGame(7);
});
 
document.getElementById("box8").addEventListener("click", function(){
    gameboard.playGame(8);
});

//reset the game

document.getElementById("resetButton").addEventListener("click", function(){
    gameboard.resetGame();
});

// factory function to make a player object for player1 and player2
const Player = () => {
    let player1 = document.getElementById('player1').value
    let player2 = document.getElementById('player1').value

    return {
        player1Name: player1,
        player2Name: player2
    }
};

//get player names on click
const nameForm = document.getElementById("nameForm");
nameForm.addEventListener("submit", e => {
    e.preventDefault();
    if (document.getElementById('player1').value == "") {
        return
    } else if (document.getElementById('player2').value == "") { 
        return
    } else {
        gameboard.getPlayers();
        gameboard.openGame();
        gameboard.resetGame();
    }
});
