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
var board = jQuery(".board");

var count = 0;
var spaces = 42;
var currentPlayer = players[1];
var button = document.querySelector("button");

/*----- event listeners -----*/

board.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);

/*----- functions -----*/
