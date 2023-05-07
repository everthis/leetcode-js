/**
 * @param {number} n
 * @param {number[]} cost
 * @return {number}
 */
var minIncrements = function(n, cost) {
  let ans = 0;
  const {abs, max} = Math
  for (let i = n >> 1; i > 0; ) {
      let r = i<<1, l = r-1;
      ans += abs(cost[l]-cost[r]);
      cost[--i] += max(cost[l], cost[r]);
  }
  return ans;
};
