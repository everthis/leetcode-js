/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const longestIdealString = function(s, k) {
  const n = s.length, a = 'a'.charCodeAt(0)
  const dp = Array(26).fill(0)
  let res = 0
  
  for(let i = 0; i < n; i++) {
    const cur = s[i], curCode = cur.charCodeAt(0)
    const tmp = helper(curCode - a) + 1
    dp[curCode - a] = tmp
    res = Math.max(res, tmp)
  }
  // console.log(dp)
  return res
  
  function helper(end) {
    let res = 0
    for(let i = Math.max(0, end - k), e = Math.min(25, end + k); i <= e; i++) {
      if(dp[i] > res) res = dp[i]
    }
    
    return res
  }
};


// another

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const longestIdealString = function(s, k) {
  const n = s.length
  const arr = [], a = 'a'.charCodeAt(0)
  for(const ch of s) {
    arr.push(ch.charCodeAt(0) - a)
  }
  const dp = Array(26).fill(0)
  for(const e of arr) {
    dp[e] = 1 + Math.max(...dp.slice(Math.max(0, e - k), e + k + 1))
  }
  return Math.max(...dp)
};

