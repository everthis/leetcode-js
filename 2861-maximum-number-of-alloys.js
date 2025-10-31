/**
 * @param {number} n
 * @param {number} k
 * @param {number} budget
 * @param {number[][]} composition
 * @param {number[]} stock
 * @param {number[]} cost
 * @return {number}
 */
const maxNumberOfAlloys = function(n, k, budget, composition, stock, cost) {
  let low = 0,
    high = 1e9
  let res = 0

  while (low < high) {
    let mid = high - Math.floor((high - low) / 2)
    if (isPossible(n, k, budget, composition, stock, cost, mid)) {
      low = mid
    } else {
      high = mid - 1
    }
  }

  return low  
};

function isPossible(n, k, budget, composition, stock, costs, fixed_alloy) {
  for (let i = 0; i < k; i++) {
    let calBudget = 0
    for (let j = 0; j < n; j++) {
      let required = 1 * composition[i][j] * fixed_alloy
      required -= stock[j]
      if (required > 0) {
        calBudget += 1 * required * costs[j]
      }
    }
    if (calBudget <= 1 * budget) return true
  }

  return false
}
