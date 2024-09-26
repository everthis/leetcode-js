/**
 * @param {string} s
 * @return {number}
 */
const maxProduct = function(s) {
  const n = s.length
  const limit = (1 << n) - 1
  let res = 0
  for(let mask = 1; mask < limit; mask++) {
    res = Math.max(res, lp(mask) * lp(limit - mask))
  }
  return res
  
  function lp(state) {
    if(state === 0) return 0
    const str = []
    let idx = 0
    // console.log((state))
    while(idx < s.length) {
      // console.log((state >>> 0).toString(2))
      if((state >> idx) & 1) str.push(s[s.length - 1 - idx])
      idx++
    }
    // console.log(str)
    const len = str.length
    const dp = Array.from({ length: len }, () => Array(len).fill(0))
    for(let i = 0; i < len; i++) dp[i][i] = 1
    
    for(let length = 2; length <= len; length++) {
      for(let i = 0; i + length - 1 < len; i++) {
        const j = i + length - 1
        if(str[i] === str[j]) dp[i][j] = dp[i + 1][j - 1] + 2
        else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
    
    // console.log(dp, len)
    return dp[0][len - 1]
  } 
};

// another

/**
 * @param {string} s
 * @return {number}
 */
var maxProduct = function(s) {
  const n = s.length;
  let max = 0;
  for (let i = 0; i < (1 << n); i++) {
    let n0 = palindromic(i, s, true);
    if (n0 === 0) continue;
    for (let j = 0; j < (1 << n); j++) {
      if ((i & j) > 0) continue;
      max = Math.max(palindromic(j, s) * n0, max);
    }
  }
  return max; 
};
function palindromic( i, s) {
  const n = s.length;
  let sub = "";
  for (let x = 0; x < n; x++) {
    if (i & (1 << x)) sub += s[x]
  }
  let len = sub.length;
  for (let i = 0; i < len; i++) {
    if (sub[i] !== sub[len - i - 1]) return 0;
  }
  return len;
}

// another

/**
 * @param {string} s
 * @return {number}
 */
const maxProduct = function(s) {
  const s1 = [], s2 = [], n = s.length
  let res = 0
  dfs(0)
  return res
  
  function dfs(idx) {
    if(idx === n) {
      if(isPalindromic(s1) && isPalindromic(s2)) {
        res = Math.max(res, s1.length * s2.length)
      }
      return
    }
    const ch = s[idx]
    s1.push(ch)
    dfs(idx + 1)
    s1.pop()
    
    s2.push(ch)
    dfs(idx + 1)
    s2.pop()
    
    dfs(idx + 1)
  }
  function isPalindromic(arr) {
    let l = 0, r = arr.length - 1
    while(l < r) {
      if(arr[l] === arr[r]) {
        l++
        r--
      } else {
        return false
      }
    }
    return true
  }
};
