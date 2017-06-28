Start the count at 0
For each column, if the grid at row = row, col = j is the player, increase the count by 1
Otherwise, reset the count at 0
If the count equates to 4, stop the loop (break)
If the count equates to 4, return true
Otherwise, return false

Start the count at 0
For each row, if the grid is at row = i, col = col is the player, increase the count by 1
Otherwise, reset the count at 0
If the count equates to 4, stop the loop (break)
If the count equates to 4, return true
Otherwise, return false

Start the count at 0
For (int i = row, j = col; i < 6 && j >= 0; i++, j--)
If the grid at row = i, col = j is the player, increase the count by 1
Otherwise, reset the count at 0
If the count equates to 4, stop the loop (break)
If the count equates to 4, return true
Otherwise, return false

Start the count at 0
For (int i = row, j = col; i < 6 && j < 7, i++, j--)
If the grid at row = i, col = j is the player, increase the count by 1
Otherwise, reset the count at 0
If the count equates to 4, stop the loop (break)
If the count equates to 4, return true
Otherwise, return false