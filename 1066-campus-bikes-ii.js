/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
const assignBikes = function(workers, bikes) {
  const n = workers.length, m = bikes.length
  let res = Infinity
  dfs(0, 0, 0)
  return res
  function dfs(i, mask, cur) {
    if(i === n) {
      res = Math.min(res, cur)
      return
    }
    for(let j = 0; j < m; j++) {
      if((mask & (1 << j)) === 0) {
        dfs(i + 1, mask | (1 << j), cur + calc(i, j))
      }
    }
  }

  function calc(i, j) {
    const a = workers[i], b = bikes[j]
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
  }

};

// another

/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
const assignBikes = function(workers, bikes) {
  const n = workers.length, m = bikes.length
  const dp = Array(1 << m).fill(Infinity)
  return dfs(0, 0)
 
  function dfs(i, mask) {
    if(i >= workers.length) return 0
    if(dp[mask] !== Infinity) return dp[mask]
    for(let j = 0; j < bikes.length; j++) {
      if((mask & (1 << j)) === 0) {
         dp[mask] = Math.min(dp[mask], dist(i, j) + dfs(i + 1, mask + (1 << j)))
      }
    }
    
    return dp[mask]
  }
  
  function dist(j, i) {
    return Math.abs(bikes[i][0] - workers[j][0]) + Math.abs(bikes[i][1] - workers[j][1])
  }
};

// another

/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
const assignBikes = function (workers, bikes) {
  const n = workers.length
  const m = bikes.length
  const dp = Array.from({ length: n + 1 }, () =>
    Array(1 << m).fill(Number.MAX_VALUE / 2)
  )

  dp[0][0] = 0
  let min = Number.MAX_VALUE
  for (let i = 1; i <= n; i++) {
    for (let s = 1; s < 1 << m; s++) {
      for (let j = 0; j < m; j++) {
        if ((s & (1 << j)) === 0) continue
        let prev = s ^ (1 << j)
        dp[i][s] = Math.min(
          dp[i - 1][prev] + dis(workers[i - 1], bikes[j]),
          dp[i][s]
        )
        if (i === n) min = Math.min(min, dp[i][s])
      }
    }
  }
  return min
}

function dis(p1, p2) {
  return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1])
}
