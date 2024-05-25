/**
 * @param {number} n
 * @param {number} k
 * @param {number} budget
 * @param {number[][]} composition
 * @param {number[]} stock
 * @param {number[]} cost
 * @return {number}
 */
var maxNumberOfAlloys = function (n, k, budget, composition, stock, cost) {
  let low = 1,
    high = 1e9
  let ans = 0 // intialise the ans = 0;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2)
    if (isPossible(n, k, budget, composition, stock, cost, mid)) {
      low = mid + 1
      ans = mid // we can form the "mid" quantity of alloys from any of the compositions in the given "budget";
    } else {
      high = mid - 1
    }
  }

  return ans
}
function isPossible(n, k, budget, composition, stock, costs, fixed_alloy) {
  for (let i = 0; i < k; i++) {
    let calBudget = 0
    for (let j = 0; j < n; j++) {
      // this much quantity of jth metal is required to form the "fixed_alloy";
      let required = 1 * composition[i][j] * fixed_alloy
      // subtracting the stocked portion of the jth metal;
      required -= stock[j]
      if (required > 0) {
        // adding the cost for required quantity of jth metal to form the "fixed_alloy";
        calBudget += 1 * required * costs[j]
      }
    }
    // "fixed alloy can be formed with the ith machine";
    if (calBudget <= 1 * budget) return true
  }

  // can't be formed with any of the machine;
  return false
}
