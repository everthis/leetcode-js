/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} m
 * @return {number}
 */
var maximumAND = function(nums, k, m) {
  const big = BigInt
  let cand = nums.map(e => [big(e), 0n])  
  let res = 0
  let kl = big(k)

  for(let b = 30; b >= 0; b--) {
    const bitVal = 1n << big(b)
    const mask = bitVal - 1n
    const nxtCand = []
    const costs = []

    for(const [val, cost] of cand) {
      if( (val & bitVal) !== 0n ) {
        if(cost <= kl) {
          nxtCand.push([val, cost])
          costs.push(cost)
        }
      } else {
        const needed = bitVal - (val & mask)
        const newCost = cost + needed
        if(newCost <= kl) {
          nxtCand.push([val + needed, newCost])
          costs.push(newCost)
        }
      }
    }


    if(costs.length < m) continue

    costs.sort((a, b) => a < b ? -1 : (a > b ? 1 : 0))

    let sumTopM = 0n
    for(let i = 0; i < m; i++) sumTopM += costs[i]

    if(sumTopM <= kl) {
      res = res | (1 << b)
      cand = nxtCand
    }
  }


  return res
};
