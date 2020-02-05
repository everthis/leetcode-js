/**
 * @param {character[][]} grid
 * @return {number}
 */
const maxKilledEnemies = function(grid) {
  const m = grid.length
  const n = m != 0 ? grid[0].length : 0
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
