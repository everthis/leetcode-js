/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const takeCharacters = function(s, k) {
  const cnt = {a: 0, b: 0, c: 0}
  const n = s.length
  for(const ch of s) {
    cnt[ch]++
  }
  if(cnt.a < k || cnt.b < k || cnt.c < k) return -1
  const limits = { a: cnt.a - k, b: cnt.b - k, c: cnt.c - k }
  let l = 0, r = 0, res = 0
  const hash = {a: 0, b: 0, c: 0}
  for(; r < n; r++) {
    const cur = s[r]
    hash[cur]++
    while(hash[cur] > limits[cur]) {
      hash[s[l]]--
      l++
    }
    
    res = Math.max(res, r - l + 1)
  }
  
  return n - res
};
