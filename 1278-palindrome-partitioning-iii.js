/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const palindromePartition = function(s, k) {
  const n = s.length
  const memo = new Map()
  return dfs(0, k)
  function cost(s, i, j) {
    let r = 0
    while(i < j) {
      if(s[i] !== s[j]) r++
      i++
      j--
    }
    return r
  }
  function dfs(i, k) {
    if(memo.has(`${i}-${k}`)) return memo.get(`${i}-${k}`)
    if(n - i === k) return 0
    if(k === 1) return cost(s, i, n - 1)
    let res = Infinity
    for(let j = i + 1; j < n - k + 2; j++) {
      res = Math.min(res, dfs(j, k - 1) + cost(s, i, j - 1))
    }
    memo.set(`${i}-${k}`, res)
    return res
  }
};
