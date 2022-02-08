/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
const closestCost = function(baseCosts, toppingCosts, target) {
  let res = baseCosts[0], n = baseCosts.length, m = toppingCosts.length
  const { abs } = Math
  for (let i = 0; i < n; i++) {
    helper(0, baseCosts[i])
  }
  return res
  function helper(i, cur) {
    if(
      abs(cur - target) < abs(res - target)
      || (abs(cur - target) === abs(res - target) && cur < res)
    ) {
      res = cur
    }
    if(i === m || cur > target) return
    helper(i + 1, cur)
    helper(i + 1, cur + toppingCosts[i])
    helper(i + 1, cur + toppingCosts[i] * 2)
  }
};

// another


/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
const closestCost = function(baseCosts, toppingCosts, target) {
    let n = baseCosts.length, m = toppingCosts.length;
    const { abs } = Math
    const costs = new Set();
    for (let i = 0; i < n; i++) {
      dfs(toppingCosts, 0, m, baseCosts[i], costs);
    }
    const nums = [];
    for (let x of costs) nums.push(x);
    nums.sort((a, b) => abs(a - target) == abs(b - target) ? a - b : abs(a - target) - abs(b - target))
    return nums[0];
  
};

function dfs(toppingCosts, ind, m, cost, costs) {
    costs.add(cost);
    if (ind >= m) return;
    dfs(toppingCosts, ind + 1, m, cost, costs);
    dfs(toppingCosts, ind + 1, m, cost + toppingCosts[ind], costs);
    dfs(toppingCosts, ind + 1, m, cost + toppingCosts[ind] * 2, costs);
}
