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

// another

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(k, prices) {
    if(prices.length === 0) return 0
    
    if(k > (prices.length/2)) {
        let profit = 0
        for(let i = 1; i < prices.length; i++) {
            if(prices[i] > prices[i-1]) profit += prices[i] - prices[i-1]
        }
        return profit
    } else {
        let dp = new Array(prices.length).fill(0)
        let length = prices.length
        for(let j = 0; j < k; j++) {
            let min = prices[0], max = 0
            for(let i = 0; i < length; i++) {
                min = Math.min(min, prices[i] - dp[i])
                max = Math.max(max, prices[i] - min)
                dp[i] = max
            }
        }
        return dp.pop()
    }
}

 // another

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(k, prices) {
  if (k >= prices.length / 2) {
    let max = 0;
    for(let i = 1; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]) {
        max += prices[i] - prices[i - 1];
      }
    }
    return max;
  }
  if (prices.length === 0) return 0;
  let dp = new Array(k + 1);
  dp[0] = new Array(prices.length).fill(0);
  for (let t = 1; t <= k; t++) {
    dp[t] = [0];
    let max = dp[t - 1][0] - prices[0];
    for (let day = 1; day < prices.length; day++) {
      dp[t][day] = Math.max(dp[t][day - 1], max + prices[day]);
      max = Math.max(max, dp[t - 1][day] - prices[day]);
    }
  }
  return dp[k][prices.length - 1];
}
