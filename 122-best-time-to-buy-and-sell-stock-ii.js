/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let p = 0
  for (let i = 1; i < prices.length; ++i) {
    let delta = prices[i] - prices[i - 1]
    if (delta > 0) {
      p += delta
    }
  }
  return p
}
