/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
const maxIceCream = function(costs, coins) {
  costs.sort((a, b) => a - b)
  let res = 0, idx = 0
  while(coins >= costs[idx]) {
    res++
    coins -= costs[idx++]
  }
  
  return res
};
