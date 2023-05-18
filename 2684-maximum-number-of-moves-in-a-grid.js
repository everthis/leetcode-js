/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function(g) {
	let dirs = [
		[-1, 1],
		[0, 1],
		[1, 1],
	]
  let grid = g
	let m = grid.length, n = grid[0].length
	let cachev1 = Array.from({ length: m }, () => Array(n).fill(null))
  const cache = {}
  // const m = g.length; const n = g[0].length
  const dx = [0, -1, 1]; const dy = [1, 1, 1]

  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans = Math.max(ans, dfs(i, j))
    }
  }
  return ans

  function dfs (i, j) {
    if (cache[`${i}_${j}`]) return cache[`${i}_${j}`]
    if (j === 0) return cache[`${i}_${j}`] = 0
    let s = -1
    for (let k = 0; k < 3; k++) {
      const x = i - dx[k]; const y = j - dy[k]
      if (x >= 0 && x < m && y >= 0 && y < n && g[i][j] > g[x][y]) {
        s = Math.max(s, dfs(x, y))
      }
    }
    if (s === -1) return cache[`${i}_${j}`] = -1
    return cache[`${i}_${j}`] = s + 1
  }
};
