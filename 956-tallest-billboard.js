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
