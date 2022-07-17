/**
 * @param {number[][]} grid
 * @return {number}
 */
const closedIsland = function(grid) {
  const m = grid.length, n = grid[0].length
  const dirs = [[0,1], [0,-1], [1,0], [-1,0]]
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if((i=== 0 || i === m - 1 || j === 0 || j === n - 1) && grid[i][j] === 0){
        fill(i, j)
      }
    }
  }

  
  let res = 0
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(grid[i][j] === 0) {
        res++
        fill(i, j)
      }    
    }
  }
  
  return res

  
  function fill(i, j) {
    if(i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== 0) return
    grid[i][j] = 1
    for(const [dx, dy] of dirs) {
      const nx = i + dx, ny = j + dy
      fill(nx, ny)
    }
  }
};

// another


/**
 * @param {number[][]} grid
 * @return {number}
 */
const closedIsland = function(grid) {
  const m = grid.length, n = grid[0].length
  const arr = []
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(grid[i][j] === 0) arr.push([i, j])
    }
  }
  const dirs = [[0,1], [0,-1], [1,0], [-1,0]]
  let num = 2
  for(const [i, j] of arr) {
    if(grid[i][j] !== 0) continue
    else {
      bfs(i, j, num)
      num++
    }
  }
  
  let res = 0
  const set = new Set()
  for(let i = 2; i < num; i++) {
    set.add(i)
  }
  
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(grid[i][j] > 1 && invalid(i, j)) {
        set.delete(grid[i][j])
      }    
    }
  }
  return set.size
  
  function invalid(i,j) {
    if(i === 0 || i === m - 1 || j === 0 || j === n - 1) return true
    return false
  }
  function bfs(i, j, v) {
    let q = [[i,j]]
    grid[i][j] = v
    while(q.length) {
      const tmp = []
      const size = q.length
      
      for(const [x, y] of q) {
        for(const [dx, dy] of dirs) {
          const nx = x + dx, ny = y + dy
          if(nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === 0) {
            grid[nx][ny] = v
            tmp.push([nx, ny])
          }
        }
      }
      
      q = tmp
    }
  }
};
