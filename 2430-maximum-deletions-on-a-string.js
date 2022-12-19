/**
 * @param {string} s
 * @return {number}
 */
const deleteString = function (s) {
  const dp = Array(4000).fill(0)
  const n = s.length
  return helper(0)
  
  function helper(i) {
    if(dp[i] === 0) {
      dp[i] = 1
      for(let len = 1; dp[i] <= n - i - len; len++) {
        if(s.slice(i, i + len) === s.slice(i + len, i + 2 * len)) {
          dp[i] = Math.max(dp[i], 1 + helper(i + len))          
        }
      }
    }
    return dp[i]
  }
}

// another

/**
 * @param {string} s
 * @return {number}
 */
const deleteString = function (s) {
  const dp = Array(4000).fill(0), lps = Array(4000).fill(0)
  for (let k = s.length - 1; k >= 0; --k) {
    dp[k] = 1; 
    for (let i = 1, j = 0; dp[k] <= s.length - i - k + 1; ++i) {
      while (j && s[i + k] != s[j + k]) j = Math.max(0, lps[j] - 1);
      j += s[i + k] == s[j + k];
      lps[i] = j;
      if (i % 2) {
        const len = ~~((i + 1) / 2);
        if (lps[len * 2 - 1] == len) {
          dp[k] = Math.max(dp[k], 1 + dp[k + len]);
        }
      }
    }
  }
  return dp[0];
}


// another


/**
 * @param {string} s
 * @return {number}
 */
const deleteString = function (t) {
  let n = t.length
  const set = new Set(t.split(''))
  if (set.size == 1) return n

  let s = t.split('')
  if (n === 1 || (n === 2 && s[0] !== s[1])) return 1
  if (n === 2 && s[0] === s[1]) return 2
  if (n === 3 && s[0] === s[1]) return s[1] === s[2] ? 3 : 2
  else if (n === 3) return 1
  const f = new Array(n).fill(null)
  dfsSearchWithMemory(0)
  return f[0]

  function dfsSearchWithMemory(i) {
    if (i >= n) return 0
    if (f[i] !== null) return f[i]
    if (i === n - 1) return (f[i] = 1)
    let max = 0,
      cur = 0,
      j = i + 1
    for (j = i + 1; j <= ~~((n - i) / 2 + i); j++) {
      if (t.slice(j).startsWith(t.slice(i, j))) {
        cur = 1 + dfsSearchWithMemory(j)
        if (cur > max) max = cur
      }
    }
    if (j > (n - i) / 2 + i && max === 0) return (f[i] = 1)
    return (f[i] = max)
  }
}
