/**
 * @param {number[]} prices
 * @return {number}
 */
const getDescentPeriods = function(prices) {
  if(prices.length === 1) return 1
  let res = 0, idx = 0
  
  for (let i = 1, n = prices.length; i < n ; i++) {
    if(prices[i - 1] - prices[i] === 1) {
     if (i === n - 1) {
      const len = i - idx + 1
      res += (len + 1) * len / 2
     }
    } else {
      const len = i - 1 - idx + 1
      res += (len + 1) * len / 2
      idx = i
      if(i === n - 1) {
        res += 1
      }
    }

  }
  
  return res
};
