/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let minPrice = Number.MAX_SAFE_INTEGER;
  let maxP = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxP) {
      maxP = prices[i] - minPrice;
    }
  }
  return maxP;
};

// another

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let res = 0, maxCur = 0
  for(let i = 1; i < prices.length; i++) {
    maxCur = Math.max(0, maxCur + (prices[i] - prices[i - 1]))
    res = Math.max(res, maxCur)
  }
  return res
};
