/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const colorTheGrid = function(m, n) {
  // Get color of the `mask` at `pos`, 2 bit store 1 color
  function getColor(mask, pos) {
    return (mask >> (2 * pos)) & 3
  }
  // Set `color` to the `mask` at `pos`, 2 bit store 1 color
  function setColor(mask, pos, color) {
    return mask | (color << (2 * pos))
  }
  function dfs(r, curColMask, prevColMask, out) {
    // Filled full color for a row
    if(r === m) {
      out.push(curColMask)
      return
    }
    // Try colors i in [1=RED, 2=GREEN, 3=BLUE]
    for(let i = 1; i <= 3; i++) {
      if(getColor(prevColMask, r) !== i && (r === 0 || getColor(curColMask, r - 1) !== i)) {
        dfs(r + 1, setColor(curColMask, r, i), prevColMask, out)
      }
    }
  }
  // Generate all possible columns we can draw, if the previous col is `prevColMask`
  function neighbor(prevColMask) {
    let out = []
    dfs(0, 0, prevColMask, out)
    return out
  }
  const mod = 10 ** 9 + 7
  const memo = {}
  function dp(c, prevColMask) {
    // Found a valid way
    if(c === n) return 1
    if(memo[`${c},${prevColMask}`] != null) return memo[`${c},${prevColMask}`]
    let res = 0
    const arr = neighbor(prevColMask)
    for(let e of arr) {
      res = (res + dp(c + 1, e)) % mod
    }
    memo[`${c},${prevColMask}`] = res
    return res
  }
  
  return dp(0, 0)
  
};

// another

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const colorTheGrid = function(m, n) {
  const mod = 10 ** 9 + 7
  const colors = [1, 2, 3]
  const memoDp = {}, memoOpts = {}
  function getColor(pos, preMask) {
    return (preMask >> (pos * 2)) & 3
  }
  function setColor(pos, color, curMask) {
    return curMask | (color << (pos * 2))
  }
  function dfs(pos, curMask, preMask, res) {
    if(pos === m) {
      res.push(curMask)
      return
    }
    for(let c of colors) {
      if(getColor(pos, preMask) !== c && (pos === 0 || getColor(pos - 1, curMask) !== c)) {
        dfs(pos + 1, setColor(pos, c, curMask), preMask, res)
      }
    }
  }
  function curOpts(preMask) {
    if (memoOpts[preMask]) return memoOpts[preMask]
    const res = []
    dfs(0, 0, preMask, res)
    memoOpts[preMask] = res
    return res
  }
  function dp(col, preMask) {
    const k = `${col},${preMask}`
    if(col === n) return 1
    if(memoDp[k]) return memoDp[k]
    let res = 0
    const cur = curOpts(preMask)
    for(let mask of cur) {
      res = (res + dp(col + 1, mask)) % mod
    }
    memoDp[k] = res
    return res
  }

  return dp(0, 0)
};

// another

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const colorTheGrid = function(m, n) {
  const mod = 1e9 + 7
  const limit = 1 << (2 * m)
  const memo = Array.from({ length: n }, () => Array(limit))
  
  return dp(0, 0)
  
  function dp(col, preColMask) {
    if(col === n) return 1
    let res = 0
    
    if(memo[col][preColMask] != null) return memo[col][preColMask]
    const curColMasks = []
    dfs(preColMask, 0, 0, curColMasks)
    for(const colMask of curColMasks) {
      res = (res + dp(col + 1, colMask)) % mod
    }
    return memo[col][preColMask] = res
  }
  
  function dfs(preColMask, curColMask, row, res) {
    if(row === m) {
      res.push(curColMask)
      return
    }
    for(let i = 1; i <= 3; i++) {
      if(getColor(preColMask, row) !== i && (row === 0 || getColor(curColMask, row - 1) !== i)) {
        dfs(preColMask, setColor(curColMask, row, i) ,row + 1, res)
      }
    }
  }
    
  function getColor(mask, row) {
    return (mask >> (2 * row)) & 3 
  }
  function setColor(mask, row, val) {
    return mask | (val << (2 * row)) 
  }
};
