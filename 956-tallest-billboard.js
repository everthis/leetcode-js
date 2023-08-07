/**
 * @param {number[]} rods
 * @return {number}
 */
const tallestBillboard = function(rods) {
  const sum = rods.reduce((ac, e) => ac + e, 0)
  const dp = Array(sum + 1).fill(-1), { abs, max, min } = Math
  dp[0] = 0
  for(const e of rods) {
    const bak = dp.slice()
    for(let delta = 0; delta <= sum; delta++) {
      if(bak[delta] < 0) continue
      if(delta + e <= sum) dp[delta + e] = max(dp[delta + e], bak[delta])
      dp[abs(delta - e)] = max(dp[abs(delta - e)], bak[delta] + min(e, delta))
    }
  }
  
  
  return dp[0]
};


// another


/**
 * @param {number[]} rods
 * @return {number}
 */
const tallestBillboard = function(rods) {
  const dp = {0 : 0}
  for(let el of rods) {
    for(let [diff, y] of Object.entries(dp)) {
      diff = +diff
      dp[diff + el] = Math.max(dp[diff + el] || 0, y)
      if(diff >= el) dp[diff - el] = Math.max(dp[diff - el] || 0, y + el)
      else dp[el - diff] = Math.max(dp[el - diff] || 0, y + diff)
    }
  }
  return dp['0']
};
