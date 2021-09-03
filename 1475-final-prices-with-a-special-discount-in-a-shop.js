/**
 * @param {number[]} prices
 * @return {number[]}
 */
const finalPrices = function(prices) {
  const res = [], n = prices.length
  for(let i = 0; i < n; i++) {
    const cur = prices[i]
    let dis = null
    for(let j = i + 1; j < n; j++) {
      if(prices[j] <= cur) {
        dis = prices[j]
        break
      }
    }
    res.push(dis == null ? cur : cur - dis)
  }
  return res
};
