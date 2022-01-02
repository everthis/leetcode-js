/**
 * @param {number[]} favorite
 * @return {number}
 */
var maximumInvitations = function(favorite) {
  const n = favorite.length, m = Array(n).fill(-1), r = Array.from({ length: n }, () => [])
  for(let i = 0; i < n; i++) r[favorite[i]].push(i)
  
  function dfs(u) {
    if(m[u] !== -1) return m[u]
    let res = 0
    for(let v of r[u]) res = Math.max(res, dfs(v))
    return m[u] = 1 + res
  }
  let res = 0, free = 0
  for(let i = 0; i < n; ++i) {
    if (m[i] != -1) continue; // skip visited nodes
    if (favorite[favorite[i]] == i) {
      m[i] = m[favorite[i]] = 0;
      let a = 0, b = 0; // find the length of the longest arms starting from `i` and `A[i]`
      for (let v of r[i]) {
          if (v == favorite[i]) continue;
          a = Math.max(a, dfs(v));
      }
      for (let v of r[favorite[i]]) {
          if (v == i) continue;
          b = Math.max(b, dfs(v));
      }
      free += a + b + 2; // this free component is of length `a+b+2`
    } 
  }
  function dfs2(u) {
    if (m[u] != -1) return[u, m[u], false]; // this is the merge point
    m[u] = 0;
    let [mergePoint, depth, mergePointMet] = dfs2(favorite[u]);
    if (mergePointMet) { // If we've met the merge point again already, this node is outside of the cycle and should be ignored.
        m[u] = 0;
        return [mergePoint, depth, true];
    }
    m[u] = 1 + depth; // If we haven't met the merge point, we increment the depth.
    return [mergePoint, m[u], u == mergePoint];
  }
  
  for(let i = 0; i < n; i++) {
    if(m[i] !== -1) continue
    let [mergePoint, depth, mergePointMet] = dfs2(i)
    if(mergePointMet) res = Math.max(res, depth)
  }
  
  return Math.max(res, free)
};

