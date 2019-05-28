/**
 * @param {string[]} words
 * @return {number}
 */
const longestStrChain = function(words) {
  words.sort((a, b) => a.length - b.length)
  const dp = {}
  for(let el of words) {
    dp[el] = 1
  }
  
  let res = Number.MIN_VALUE
  for(let w of words) {
    for(let i = 0; i < w.length; i++) {
      let prev = w.slice(0, i) + w.slice(i + 1)
      dp[w] = Math.max(dp[w], (dp[prev] || 0) + 1 )
    }
    if(dp[w] > res) res = dp[w]
  }
  return res
};
