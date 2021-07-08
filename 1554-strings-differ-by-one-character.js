/**
 * @param {string[]} dict
 * @return {boolean}
 */
 const differByOne = function(dict) {
  const n = dict.length, m = dict[0].length
  for (let j = 0; j < m; j++) {
    const seen = new Set()
    for(let i = 0; i < n; i++) {
      const newStr = dict[i].slice(0, j) + '*' + dict[i].slice(j + 1)
      if(seen.has(newStr)) return true
      seen.add(newStr)
    }
  }

  return false  
};

// another

/**
 * @param {string[]} dict
 * @return {boolean}
 */
const differByOne = function (dict) {
  const M = dict.length,
    N = dict[0].length,
    hash = Array(M).fill(0),
    ord = (c) => c.charCodeAt(0),
    MOD = 1e13, seen = new Set(),
    zPlusOne = 'z'.charCodeAt(0)
  // 1. generate each i-th rolling hash
  for (let i = 0; i < M; ++i) {
    let base = 1
    for (let j = 0; j < N; ++j) {
      hash[i] = (hash[i] + base * ord(dict[i][j])) % MOD
      base = (zPlusOne * base) % MOD
    }
  }
  // 2. remove each j-th char from each i-th rolling hash to find a diff collision
  for (let i = 0; i < M; ++i) {
    let base = 1
    for (let j = 0; j < N; ++j) {
      const diff = (hash[i] - base * ord(dict[i][j])) % MOD
      if (seen.has(diff)) return true
      seen.add(diff)
      base = (zPlusOne * base) % MOD
    }
  }
  return false
}

