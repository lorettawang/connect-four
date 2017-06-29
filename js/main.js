/*----- constants -----*/


/*----- app's state (variables) -----*/
var players = [
{
    name: "token a"
},
{
    name: "token b"
}
];

/*----- cached element references -----*/
var board = document.querySelector(".board");

var count = 0;
var spaces = 42;
var currentPlayer = players[1]; // token a starts game
var button = document.querySelector("button");

/*----- event listeners -----*/

board.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);

/*----- functions -----*/
var playerTurn = function() {
    var lisa = document.querySelector(".lisa");
    var bart = document.query seector(".bart");
    if currentPlayer.name === "token a" {
        lisa.class
    }
}