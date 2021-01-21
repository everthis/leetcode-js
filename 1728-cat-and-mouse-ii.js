/**
 * @param {string[]} grid
 * @param {number} catJump
 * @param {number} mouseJump
 * @return {boolean}
 */
const canMouseWin = function(grid, catJump, mouseJump) {
  let n,m,k,lim,cache,mpos = -1, cpos = -1, fpos = -1
  n = grid.length
  m = grid[0].length
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
      if(grid[i][j] === 'M') mpos = i * m + j
      else if(grid[i][j] === 'C') cpos = i * m + j
      else if(grid[i][j] === 'F') fpos = i * m + j
    }
  }
  mnei = Array(n * m), cnei = Array(n * m)
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
      mnei[i * m + j] = traj(i, j, mouseJump)
    }
  }
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
      cnei[i * m + j] = traj(i, j, catJump)
    }
  }
  k = m * n
  lim = 100
  cache = Array.from({ length: lim }, () => Array(k * k).fill(0))

  for(let i = 0; i < lim; i++) {
    for(let j = 0; j < k * k; j++) {
      cache[i][j] = -1
    }
  }

  return mouseWin(mpos, cpos, 0)

  function traj(i, j, d) {
    if(grid[i][j] === '#') return []
    let pos = i * m + j
    let change = []
    change.push(pos)
    for(let k = 1; k < d + 1; k++) {
      if(i + k >= n || grid[i + k][j] === '#') break
      change.push(pos + k * m)
    }
    for(let k = 1; k < d + 1; k++) {
      if(i - k < 0 || grid[i - k][j] === '#') break
      change.push(pos - k * m) 
    }
    for(let k = 1; k < d + 1; k++) {
      if(j + k >= m || grid[i][j + k] === '#') break
      change.push(pos + k)
    }
    for(let k = 1; k < d + 1; k++) {
      if(j - k < 0 || grid[i][j - k] === '#') break
      change.push(pos - k)
    }
    return change
  }
  
  function mouseWin(mpos, cpos, turn) {
    if(turn === lim) return false
    let e = mpos * k + cpos
    if(cache[turn][e] >= 0) return cache[turn][e] === 1
    if(cpos === fpos || cpos === mpos) return false
    if(mpos === fpos) return true
    if((turn & 1) !== 0) {
      let b = 0
      for(let newCpos of cnei[cpos]) {
        if(!mouseWin(mpos, newCpos, turn + 1)) b = 1
      }
      if(b===0) cache[turn][e] = 1
      else cache[turn][e] = 0
    } else {
      let b = 0
      for(let newMpos of mnei[mpos]) {
        if(mouseWin(newMpos, cpos, turn + 1)) b = 1
      }
      if(b === 1) cache[turn][e] = 1
      else cache[turn][e] = 0
    }
    return cache[turn][e] === 1
  }
};
