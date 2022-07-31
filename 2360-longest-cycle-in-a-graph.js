/**
 * @param {number[]} edges
 * @return {number}
 */
const longestCycle = function(edges) {
  const n = edges.length, colors = Array(n).fill(0), dis = Array(n).fill(0)
  let res = -1
  
  for(let i = 0; i < n; i++) {
    if(colors[i] === 0) {
      res = Math.max(res, dfs(i, 0))
    }
  }
  
  return res
  
  function dfs(u, d) {
    let ans = -1
    dis[u] = d
    colors[u]  = 1
    
    if(edges[u] !== -1) {
      if(colors[edges[u]] == 1) {
        return dis[u] - dis[edges[u]] + 1
      } else if(colors[edges[u]] === 0) {
        ans = Math.max(ans, dfs(edges[u], d + 1))         
      }
    }
    
    colors[u] = 2
    return ans
  }
};
