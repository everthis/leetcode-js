/**
 * @param {number} n
 * @return {number}
 */
const distinctSequences = function(n) {
  const hash = {
    1: [2,3,4,5,6],
    2: [1,3,5],
    3: [1,2,4,5],
    4: [1,3,5],
    5: [1,2,3,4,6],
    6: [1,5],
  }
  
  const memo = kdArr(0, [7,7,n+1])
  const mod = 1e9 + 7
  let res = 0
  for(let i = 1; i <= 6; i++) {
    res = (res + dfs(i, 0, n - 1)) % mod
  }
  
  
  return res
  
  function dfs(s,i,j) {
    if(j === 0) return 1
    if(memo[s][i][j] !== 0) return memo[s][i][j]
    let res = 0
    for(let e of hash[s]) {
      if(e !== i) {
        res = (res + dfs(e, s, j - 1)) % mod
      }
    }
    memo[s][i][j] = res
    return res
  }
  
  function kdArr(defaultVal, arr) {
    if(arr.length === 1) return Array(arr[0]).fill(defaultVal)
    
    const res = []
    for(let i = 0, len = arr[0]; i < len; i++) {
      res.push(kdArr(defaultVal, arr.slice(1)))
    }
    
    return res
  }
};

// another


/**
 * @param {number} n
 * @return {number}
 */
const dp = MultidimensionalArray(0, 1e4 + 1, 7, 7)
const distinctSequences = function (n, p = 0, pp = 0) {
  const mod = 1e9 + 7
  if (n === 0) return 1
  if (dp[n][p][pp] === 0) {
    for (let d = 1; d < 7; d++) {
      if (d !== p && d !== pp && (p === 0 || gcd(d, p) === 1)) {
        dp[n][p][pp] = (dp[n][p][pp] + distinctSequences(n - 1, d, p)) % mod
      }
    }
  }

  return dp[n][p][pp]
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b)
}

function MultidimensionalArray(defaultValue, ...args) {
  if (args.length === 1) {
    return Array(args[0]).fill(defaultValue)
  }
  const res = []

  for (let i = 0, n = args[0]; i < n; i++) {
    res.push(MultidimensionalArray(defaultValue, ...args.slice(1)))
  }

  return res
}
