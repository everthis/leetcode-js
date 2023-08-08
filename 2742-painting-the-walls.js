/**
 * @param {number[]} cost
 * @param {number[]} time
 * @return {number}
 */
const paintWalls = function(cost, time) {
  const n = cost.length
  const cache = {}
  
  return dfs(n - 1, 0)

  function dfs(i, j) {
    if(j > i) return 0
    if(i < 0) return Number.MAX_SAFE_INTEGER
    const k = `${i},${j}`
    if(cache[k] != null) return cache[k]

    const res = Math.min(dfs(i - 1, j + time[i]) + cost[i], dfs(i - 1, j - 1))
    cache[k] = res
    return res
  }
};
