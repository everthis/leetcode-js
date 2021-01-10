/**
 * @param {number} n
 * @return {number[]}
 */
const constructDistancedSequence = function(n) {
  const ans = Array(2 * n - 1).fill(0)
  const used = Array(n + 1).fill(0)
  dfs(ans, 0)
  return ans
    
  function dfs(ans, i) {
    if(i === ans.length) return true
    if(ans[i]) return dfs(ans, i + 1)
    for(let j = used.length - 1; j > 0; j--) {
      if(used[j]) continue
      if(j !== 1 && (i + j >= ans.length || ans[i + j])) continue
      used[j] = 1
      ans[i] = j
      if(j !== 1) ans[i + j] = j
      if(dfs(ans, i + 1)) return true
      ans[i] = 0
      if(j !== 1) ans[i + j] = 0
      used[j] = 0
    }
    return false
  }
};
