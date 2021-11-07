/**
 * @param {string} word
 * @return {number}
 */
const countVowels = function(word) {
  let res = 0n
  const n = BigInt(word.length)
  const set = new Set(['a', 'e', 'i', 'o', 'u'])
  const dp = Array(n + 1n).fill(0n)
  for(let i = 0n; i < n; i++) {
    const ch = word[i]
    if(set.has(ch)) dp[i + 1n] = dp[i] + (i + 1n)
    else dp[i + 1n] = dp[i]
  }
  
  for(const e of dp) res += e
  return res
};


