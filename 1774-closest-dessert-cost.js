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
