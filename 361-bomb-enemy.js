/**

Given a 2D grid, each cell is either a wall 'W',
an enemy 'E' or empty '0' (the number zero),
return the maximum enemies you can kill using one bomb.
The bomb kills all the enemies in the same row and column
from the planted point until it hits the wall since the wall
is too strong to be destroyed.

Note: You can only put the bomb at an empty cell.

Example:

Input: [["0","E","0","0"],["E","0","W","E"],["0","E","0","0"]]
Output: 3 
Explanation: For the given grid,

0 E 0 0 
E 0 W E 
0 E 0 0

Placing a bomb at (1,1) kills 3 enemies.

*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
const maxKilledEnemies = function(grid) {
  const m = grid.length
  const n = m !== 0 ? grid[0].length : 0
  let result = 0
  let rowhits = 0
  const colhits = new Array(n).fill(0)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (j === 0 || grid[i][j - 1] === 'W') {
        rowhits = 0
        for (let k = j; k < n && grid[i][k] !== 'W'; k++)
          rowhits += grid[i][k] === 'E' ? 1 : 0
      }
      if (i === 0 || grid[i - 1][j] === 'W') {
        colhits[j] = 0
        for (let k = i; k < m && grid[k][j] !== 'W'; k++)
          colhits[j] += grid[k][j] === 'E' ? 1 : 0
      }
      if (grid[i][j] === '0') result = Math.max(result, rowhits + colhits[j])
    }
  }
  return result
}

// another

/**
 * @param {character[][]} grid
 * @return {number}
 */
const maxKilledEnemies = function(grid) {
  if (grid == null || grid.length === 0 || grid[0].length === 0) return 0
  const rows = grid.length
  const cols = grid[0].length
  let max = 0
  const dp = Array.from({ length: rows }, () => new Array(cols).fill(0))
  //travel each column twice: from left and from right
  for (let i = 0; i < rows; i++) {
    let cnt = 0
    for (let k = 0; k < cols; k++) {
      if (grid[i][k] === '0') {
        dp[i][k] = cnt
      } else if (grid[i][k] === 'E') {
        cnt++
      } else {
        cnt = 0
      }
    }
    cnt = 0
    for (let k = cols - 1; k >= 0; k--) {
      if (grid[i][k] === '0') {
        dp[i][k] += cnt
      } else if (grid[i][k] === 'E') {
        cnt++
      } else {
        cnt = 0
      }
    }
  }
  //travel each row twice: from top and from bottom
  for (let i = 0; i < cols; i++) {
    let cnt = 0
    for (let k = 0; k < rows; k++) {
      if (grid[k][i] === '0') {
        dp[k][i] += cnt
      } else if (grid[k][i] === 'E') {
        cnt++
      } else {
        cnt = 0
      }
    }
    cnt = 0
    for (let k = rows - 1; k >= 0; k--) {
      if (grid[k][i] === '0') {
        dp[k][i] += cnt
        max = Math.max(max, dp[k][i])
      } else if (grid[k][i] === 'E') {
        cnt++
      } else {
        cnt = 0
      }
    }
  }
  return max
}

