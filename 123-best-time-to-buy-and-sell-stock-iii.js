/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let maxProfit1 = 0
  let maxProfit2 = 0
  let lowestBuyPrice1 = Number.MAX_VALUE
  let lowestBuyPrice2 = Number.MAX_VALUE

  for (let p of prices) {
    maxProfit2 = Math.max(maxProfit2, p - lowestBuyPrice2)
    lowestBuyPrice2 = Math.min(lowestBuyPrice2, p - maxProfit1)
    maxProfit1 = Math.max(maxProfit1, p - lowestBuyPrice1)
    lowestBuyPrice1 = Math.min(lowestBuyPrice1, p)
  }
  return maxProfit2
}
