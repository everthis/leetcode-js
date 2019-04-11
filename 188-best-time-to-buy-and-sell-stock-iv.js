/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(k, prices) {
  if (!prices.length) return 0
  let len = prices.length,
    res = 0
  if (k >= ~~(len / 2)) {
    for (let i = 1; i < len; i++) {
      res += Math.max(prices[i] - prices[i - 1], 0)
    }
    return res
  }
  const buy = new Array(k + 1).fill(Number.MIN_SAFE_INTEGER)
  const sell = new Array(k + 1).fill(0)

  for (let p of prices) {
    for (let i = 1; i <= k; i++) {
      buy[i] = Math.max(sell[i - 1] - p, buy[i])
      sell[i] = Math.max(buy[i] + p, sell[i])
    }
  }
  return sell[k]
}
