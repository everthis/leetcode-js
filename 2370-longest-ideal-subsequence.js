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

