/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
const loudAndRich = function(richer, quiet) {
  const hash = {}
  for(const [a, b] of richer) {
    if(hash[b] == null) hash[b] = []
    hash[b].push(a)
  }
  const n = quiet.length
  
  const res = []
  for(let i = 0; i < n; i++) {
    dfs(i)
  }
  
  return res
  
  function dfs(i) {
    if(res[i] != null) return res[i]
    res[i] = i
    
    const nxt = hash[i] || []
    for(const e of nxt) {
      if(quiet[dfs(e)] < quiet[res[i]]) res[i] = res[e]
      
    }
    return res[i]
  }
};
