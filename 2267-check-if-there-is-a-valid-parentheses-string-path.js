/**
 * @param {character[][]} grid
 * @return {boolean}
 */
const hasValidPath = function (grid) {
  const m = grid.length
  const n = grid[0].length
  if (grid[0][0] != '(' || grid[m - 1][n - 1] != ')') return false
  const dp = kdArr(-1, [m, n, ~~((m + n) / 2) + 1])


  function dfs(i, j, left) {
    if (i >= m || j >= n) return false
    if (grid[i][j] === '(') left++
    else left--
    if (left < 0 || left > Math.floor((m + n) / 2)) return false
    if (dp[i][j][left] != -1) return dp[i][j][left]
    if (i == m - 1 && j == n - 1 && left == 0) return (dp[i][j][left] = true)
    return (dp[i][j][left] = dfs(i, j + 1, left) || dfs(i + 1, j, left))
  }
  return dfs(0, 0, 0)
  
  function kdArr(defaultVal, arr) {
    if(arr.length === 1) return Array(arr[0]).fill(defaultVal)
    
    const res = []
    for(let i = 0, len = arr[0]; i < len; i++) {
      res.push(kdArr(defaultVal, arr.slice(1)))
    }
    
    return res
  }
}


// another

/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    if (grid[0][0] == ")") return false
    let m = grid.length, n = grid[0].length
    const dirs = [[0, 1], [1, 0]]

    if ((m + n - 1) % 2 == 1) return false
    const a = Array.from({ length: m }, () => Array(n).fill(null))
    for(let i = 0; i < m; i++) {
      for(let j = 0; j < n; j++) {
        if(grid[i][j] === '(') a[i][j] = 1
        else a[i][j] = -1
      }
    }
  
  
    const visited = new Set([`0,0,1`])
    let q = [[0, 0, 1]]

    while (q.length){
        const tmp = []
        for (const [x, y, v] of q) {
            if (`${x},${y},${v}` == `${m - 1},${n - 1},0`) return true
            for (const [dx, dy] of dirs) {
                let i= x + dx,  j = y + dy
                if (0 <= i && i < m && 0 <= j && j < n) {
                    let v2 = v + a[i][j]
                    if (v2 >= 0 && !visited.has(`${i},${j},${v2}`) ) {
                        tmp.push([i, j, v2])
                        visited.add(`${i},${j},${v2}`)                           
                    }
              
                }
            }
        }
        q = tmp      
    }
    return false
};

