/**
 * @param {number[]} power
 * @return {number}
 */
const minimumTime = function(power) {
  const n = power.length
  const limit = 1 << n
  const dp = new Array(limit).fill(Infinity)
  dp[0] = 0
  for(let mask = 1; mask < limit; mask++) {
    const k = cnt(mask)
    for(let i = 0; i < n; i++) {
      if((mask >> i) & 1) {
        dp[mask] = Math.min(dp[mask], dp[mask - (1 << i)] + Math.ceil(power[i] / k) )
      }
    }
  }
  // console.log(dp)
  return dp[limit - 1]
  
  function cnt(num) {
    let res = 0
    while(num) {
      if(num & 1) res++
      num = num >> 1
    }
    
    return res
  }
};
