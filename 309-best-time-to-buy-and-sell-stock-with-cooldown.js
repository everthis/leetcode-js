/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  if (prices === null || prices.length < 1) {
    return 0;
  }

  const length = prices.length;
  // buy[i]: max profit if the first "i" days end with a "buy" day
  const buy = Array(length + 1).fill(0); 
  // buy[i]: max profit if the first "i" days end with a "sell" day
  const sell = Array(length + 1).fill(0); 

  buy[1] = -prices[0];

  for (let i = 2; i <= length; i++) {
    const price = prices[i - 1];
    buy[i] = Math.max(buy[i - 1], sell[i - 2] - price);
    sell[i] = Math.max(sell[i - 1], buy[i - 1] + price);
  }

  // sell[length] >= buy[length]
  return sell[length];
};
