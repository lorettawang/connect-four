/*----- constants -----*/


/*----- app's state (variables) -----*/
var players = [
{
    name: 'lisa'
},
{
    name: 'bart'
}
];

/*----- cached element references -----*/
var board = document.querySelector('.board');

var count = 0;
var spaces = 42;
var currentPlayer = players[1];
var button = document.querySelector('button');

/*----- event listeners -----*/
board.addEventListener('click', handleClick);

button.addEventListener('click', newGame);

/*----- functions -----*/

// changes and selects player
var playerTurn = function() {
"use strict";
  var lisa = document.querySelector('.lisa');
  var bart = document.querySelector('.bart');
  if (currentPlayer.name === 'lisa') {
    currentPlayer = players[1];
    var h3 = document.querySelector('h3');
    h3.innerHTML = "It's Bart's turn!";
    } else {
    currentPlayer = players[0];
    var h3 = document.querySelector('h3');
    h3.innerHTML = "It's Lisa's turn!";
  }
};

// board is created with innerHTML and runs addEventListeners
var renderBoard = function() {
"use strict";
  var html = '';
  for (var i = 0; i < 6; i++) {
    html += '<div class="row">';
    for (var j = 0; j < 7; j++) {
      html += '<div class="token open" data-row="' + i + '" data-col="' + j + '">' + '</div>';
    }
    html += '</div>';
  }
  board.innerHTML = html;
};

// originally added color based off player but when code was removed, the divs were broken
var handleClick = function(event) {
"use strict";
  if (event.target.classList.contains('open')) {
    var row = event.target.dataset.row;
    var col = event.target.dataset.col;
    row = parseInt(row);
    col = parseInt(col);
    checkSquares(row, col);
    scanBoard();
    if (count > 3) return;
    else playerTurn();
  }
};

// checks the bottom of the board using input from rows
// is the square open or not open?
// are the squares empty? re-loop down row until it is not at the bottom
// adds class
var checkSquares = function(row, col) {
"use strict";
  var aToken = document.querySelectorAll('.token[data-row="' + row + '"]' );
  var aOneBelow = document.querySelectorAll('.token[data-row="' + (row + 1) + '"]' );
  if (aToken[col].classList.contains('open') && !aOneBelow[col]) {
    if (currentPlayer.name === 'lisa') {
      aToken[col].classList.remove('open');
      aToken[col].classList.add('lisa');
    } else {
      aToken[col].classList.remove('open');
      aToken[col].classList.add('bart');
    }
    return;
  } else if (aToken[col].classList.contains('open') && aOneBelow[col].classList.contains('open') ) {
    return checkSquares(row + 1, col);
  } else {
    if (currentPlayer.name === 'lisa') {
      aToken[col].classList.remove('open');
      aToken[col].classList.add('lisa');
  } else {
    aToken[col].classList.remove('open');
    aToken[col].classList.add('bart');
  }
    return;
  }
};


// winning combinations start here (10 combos)
// vertical scan - calls function with same arguments but with row decrements
// when return true, stop loop
var checkVerticalB = function(row, col) {
"use strict";
  var token = document.querySelectorAll('.token');
  var i = (row*7 + col);
    if (count > 3) {
    return gameWinner();
  } else if (row < 0 || row > 5 || col < 0 || col > 6) {
    count = 0;
    return;
  } else if (token[i] && token[i].classList.contains('bart')) {
    count = count + 1;
    return checkVerticalB(row - 1, col);
  } else
    count = 0;
    return;
};

var checkVerticalA = function(row, col) {
"use strict";
  var token = document.querySelectorAll('.token');
  var i = (row*7 + col);
    if (count > 3) {
    return gameWinner();
  } else if (row < 0 || row > 5 || col < 0 || col > 6) {
    count = 0;
    return;
  } else if (token[i] && token[i].classList.contains('lisa')) {
    count = count + 1;
    return checkVerticalA(row - 1, col);
  } else
    count = 0;
    return;
};

var checkRHorizontalB = function(row, col) {
"use strict";
  var token = document.querySelectorAll('.token');
  var i = (row*7 + col);
    if (count > 3) {
    return gameWinner();
  } else if (row < 0 || row > 5 || col < 0 || col > 6) {
    count = 0;
    return;
  } else if (token[i] && token[i].classList.contains('bart')) {
    count = count + 1;
    return checkRHorizontalB(row, col + 1);
  } else
    count = 0;
    return;
};

var checkLHorizontalB = function(row, col) {
"use strict";
  var token = document.querySelectorAll('.token');
  var i = (row*7 + col);
    if (count > 3) {
    return gameWinner();
  } else if (row < 0 || row > 5 || col < 2 || col > 5) {
    count = 0;
    return;
  } else if (token[i] && token[i].classList.contains('bart')) {
    count = count + 1;
    return checkLHorizontalB(row, col - 1);
  } else
    count = 0;
    return;
};

var checkRHorizontalA = function(row, col) {
"use strict";
  var token = document.querySelectorAll('.token');
  var i = (row*7 + col);
    if (count > 3) {
    return gameWinner();
  } else if (row < 0 || row > 5 || col < 0 || col > 6) {
    count = 0;
    return;
  } else if (token[i] && token[i].classList.contains('lisa')) {
    count = count + 1;
    return checkRHorizontalA(row, col + 1);
  } else
    count = 0;
    return;
};

var checkLHorizontalA = function(row, col) {
"use strict";
  var token = document.querySelectorAll('.token');
  var i = (row*7 + col);
if (count > 3) {
    return gameWinner();
  } else if (row < 0 || row > 5 || col < 2 || col > 5) {
    count = 0;
    return;
  } else if (token[i] && token[i].classList.contains('lisa')) {
    count = count + 1;
    return checkLHorizontalA(row, col - 1);
  } else
    count = 0;
    return;
};

var checkRDiagonalB = function(row, col) {
"use strict";
  var token = document.querySelectorAll('.token');
  var i = (row*7 + col);
    if (count > 3) {
    return gameWinner();
  } else if (row < 0 || row > 5 || col < 0 || col > 5) {
    count = 0;
    return;
  } else if (token[i] && token[i].classList.contains('bart')) {
    count = count + 1;
    return checkRDiagonalB(row - 1, col + 1);
  } else
    count = 0;
    return;
};

var checkRDiagonalA = function(row, col) {
"use strict";
  var token = document.querySelectorAll('.token');
  var i = (row*7 + col);
if (count > 3) {
    return gameWinner();
  } else if (row < 0 || row > 5 || col < 0 || col > 5) {
    count = 0;
    return;
  } else if (token[i] && token[i].classList.contains('lisa')) {
    count = count + 1;
    return checkRDiagonalA(row - 1, col + 1);
  } else
    count = 0;
    return;
};

var checkLDiagonalB = function(row, col) {
"use strict";
  var token = document.querySelectorAll('.token');
  var i = (row*7 + col);
if (count > 3) {
    return gameWinner();
  } else if (row < 0 || row > 5 || col < 0 || col > 6) {
    count = 0;
    return;
  } else if (token[i] && token[i].classList.contains('bart')) {
    count = count + 1;
    return checkLDiagonalB(row - 1, col - 1);
  } else
    count = 0;
    return;
};

var checkLDiagonalA = function(row, col) {
"use strict";
  var token = document.querySelectorAll('.token');
  var i = (row*7 + col);
if (count > 3) {
    return gameWinner();
  } else if (row < 0 || row > 5 || col < 0 || col > 6) {
    count = 0;
    return;
  } else if (token[i] && token[i].classList.contains('bart')) {
    count = count + 1;
    return checkLDiagonalA(row - 1, col - 1);
  } else
    count = 0;
    return;
};

// scan the whole board and return all the winning combinations
var scanBoard = function() {
"use strict";
  var token = document.querySelectorAll('.token');
  for (var i = 0; i < token.length; i++) {
  var row = parseInt(i / 7);
  var col = parseInt(i % 7);
  checkRHorizontalA(row, col);
  checkLHorizontalA(row, col);
  checkRHorizontalB(row, col);
  checkLHorizontalB(row, col);
  checkVerticalA(row, col);
  checkVerticalB(row, col);
  checkRDiagonalA(row, col);
  checkRDiagonalB(row, col);
  checkLDiagonalA(row, col);
  checkLDiagonalB(row, col);
  }
  spaces -= 1;
  if (spaces === 0) tieGame();
};

// if the count is greater than 3, the game will end and the winner is announced in innerHTML
var gameWinner = function() {
"use strict";
  var h3 = document.querySelector('h3');
  h3.innerHTML = currentPlayer.name + " wins! Ha-Ha!";
  board.removeEventListener('click', handleClick);
  return;
};

// when spaces open count is at 0, the game will end and a tie game is announced in innerHTML
// original count of spaces is at 42
var tieGame = function() {
"use strict";
  board.removeEventListener('click', handleClick);
  var h3 = document.querySelector('h3');
  h3.innerHTML = "It's a tie game! Doh!";
  return;
};

// new game
// board resets
var newGame = function() {
"use strict";
  var lisa = document.querySelector('.lisa');
  var bart = document.querySelector('.bart');
  var h3 = document.querySelector('h3');
  h3.innerHTML = "Bart gets to start! Eat my shorts!";
  currentPlayer = players[1];
  spaces = 42;
  count = 0;
  renderBoard();
  board.addEventListener('click', handleClick);
  return;
};

board.addEventListener('click', handleClick);
button.addEventListener('click', newGame);

renderBoard();
