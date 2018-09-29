/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function(cost) {
  let f1 = cost[0];
  let f2 = cost[1];
  for (let i = 2; i < cost.length; i++) {
    let f_cur = cost[i] + Math.min(f1, f2);
    f1 = f2;
    f2 = f_cur;
  }
  return Math.min(f1, f2);
};
