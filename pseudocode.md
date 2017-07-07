// Render
renderBoard
Create board (innerHTML, run addEventListeners function)

// Checking bottom of board using input from rows
checkSquares (row, col)
If square is open
If square is not open

// Player's turns
playerTurn
If current player is token a,
    remove the open square
    add token a
Otherwise, if current player is token b,
    remove the open square
    add token b

// Check if current squares below are empty
checkSquares
If empty, reloop one row lower until square reaches to non-open square

// Checking for wins (winning combinations)
checkVerticalA (row, col)
Start the count at 0
If the count is greater than 3, stop the loop (break)

checkVerticalB (row, col)
Start the count at 0
If the count is greater than 3, stop the loop (break)

checkRHorizontalA (row, col)
Start the count at 0
If the count is greater than 3, stop the loop (break)

checkRHorizontalB (row, col)
Start the count at 0
If the count is greater than 3, stop the loop (break)

checkLHorizontalA (row, col)
Start the count at 0
If the count is greater than 3, stop the loop (break)

checkLHorizontalB (row, col)
Start the count at 0

checkRDiagonalA (row, col)
Start the count at 0
If the count is greater than 3, stop the loop (break)

checkRDiagonalB (row, col)
Start the count at 0
If the count is greater than 3, stop the loop (break)

checkLDiagonalA (row, col)
Start the count at 0
If the count is greater than 3, stop the loop (break)


checkLDiagonalB (row, col)
Start the count at 0
If the count is greater than 3, stop the loop (break)

// Final scan
scanBoard
Check all winning combinations
Start counts at 0

// Declare winner
gameWinner
When count is greater than 3, winner is declared
Game ends

// Declare tie game
tieGame
If squares are all not open (no spaces left) and count is not greater than 3, tie game!
Game ends

// Reset game
newGame
When button is selected, reset board (variables to starting values and states)

// Render
renderBoard
Run beginning of game to generate board