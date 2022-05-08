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

