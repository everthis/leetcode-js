/**
 * @param {number} n
 * @param {number[]} cost
 * @return {number}
 */
const minIncrements = function(n, cost) {
  let res = 0
  dfs(1)
  return res
  
  function dfs(node) {
    if(node > n) return 0
    const l = dfs(2 * node)
    const r = dfs(2 * node + 1)
    res += Math.abs(l - r)
    return Math.max(l, r) + cost[node - 1]
  }
};

// another

/**
 * @param {number} n
 * @param {number[]} cost
 * @return {number}
 */
var minIncrements = function(n, cost) {
  let ans = 0;
  const {abs, max} = Math
  for (let i = n >> 1; i > 0; ) {
      let r = i<<1, l = r-1;
      ans += abs(cost[l]-cost[r]);
      cost[--i] += max(cost[l], cost[r]);
  }
  return ans;
};
